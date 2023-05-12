import Container from "../../component/Container";
import MainText from "../../component/MainText";
import { TopbarLogo } from "../../component/Topbar";
import MainInput from "../../component/Main/MainInput";
import ThreadList from "../../component/Thread/ThreadList";
import Navigation from "../../component/Navigation";
import ThreeStars from "../../component/ThreeStars";
import { getCookie } from "../../cookie";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../axiosSetting";
import axios from "axios";
import DidWriteToday from "../../component/didWriteToday";
import Toast from "../../component/Toast";
import * as Dummy from  "../../dummy-data";

export interface INode {
  postId: number;
  postContent: string;
}

export type IThread = INode[][];

export default function Main() {
  const navigate = useNavigate();
  const [data, setData] = useState<IThread>([[]]);

  const location = useLocation().state ?? {};

  let toastMessage: string = location.toastMessage ?? "";

  useEffect(() => {
    async function getAllPosts() {
      try {
        const token = getCookie("accessToken");

        const { data } = await axiosInstance.get<{
          postReceiveDetail: IThread;
        }>(`/posts/all`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("data: ", data);
        setData(data.postReceiveDetail);
      } catch (e) {
        if (axios.isAxiosError(e)) {
          console.log("error message: ", e.message);
          setData([[]]);
        } else {
          console.log("unexpected error: ", e);
          setData([[]]);
        }
      }
    }

    function getDummyPosts() {
      setData(Dummy.dummyPosts);
    }

    if(getCookie("preview-mode")!=="true") getAllPosts();
    else getDummyPosts();
  }, []);

  if (getCookie("accessToken") == undefined) {
    console.log("no cookie");
    navigate("/signin");
  }

  return (
    <Container>
      {
        <Toast
          type={toastMessage.length > 0 ? "animate" : "hide"}
          content={toastMessage}
        ></Toast>
      }
      <TopbarLogo />
      <DidWriteToday />
      <span
        onClick={() => {
          navigate("/write-origin");
        }}
      >
        <MainInput />
      </span>
      <div style={{ marginTop: "40px" }}></div> {/* Margination */}
      <MainText content={"당신을 위해 존재해 온 글들"}></MainText>
      <div style={{ marginTop: "15px" }}></div> {/* Margination */}
      {data.map((thread, index) => (
        <span key={index}>
          <ThreadList threadId={index} thread={thread} />
          <div style={{ marginTop: "80px" }}></div> {/* Margination */}
          <ThreeStars />
        </span>
      ))}
      <div style={{ height: "80vh" }}></div> {/* Margination */}
      <Navigation page="home" />
    </Container>
  );
}
