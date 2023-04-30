import styled from "styled-components";
import AvatarButton from "../AvatarButton";
import WordCount from "../WordCount";
import { useRef, useState, ChangeEvent } from "react";
import ThreadPunch from "./ThreadPunch";
import { useAtom } from "jotai";
import { ThreadInputAtom, ThreadInputI } from "../../store";

interface IProps {
  threadId: number;
}

const InputAreaWrapper = styled.div`
  position: relative;
  display: inline-block;
  border: 3px var(--stroke-color) solid;
  border-radius: 20px;
  background-color: var(--primary-color);
  padding-top: 12px;
  padding-bottom: 12px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:after {
    content: "";
    position: absolute;
    bottom: -20px;
    right: 1em;
    width: 30px;
    height: 30px;
    background-image: url("../src/assets/stars.png");
    background-repeat: no-repeat;
    z-index: 1;
  }
`;

const TextareaWrapper = styled.textarea`
  display: inline-block;
  border: none;
  background-color: transparent;
  min-width: 100%;
  min-height: 200px;
  resize: none;
  outline: none;
  margin: 10px 0;
  padding: 0 1.5em;
`;

const SendButtonWrapper = styled.span`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

export default function ThreadInput({ threadId }: IProps) {
  const [text, setText] = useState<string>("");
  const [length, setLength] = useState<number>(0);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    setText(inputValue);
    setLength(inputValue.length);
  };

  const [threadInput, setThreadInput] = useAtom(ThreadInputAtom);

  const updateIsOpen = (threadId: number) => {
    const updatedThreads = threadInput.map((thread) => {
      if (thread.threadId === threadId) {
        return { ...thread, isOpen: false };
      }
      return thread;
    });

    setThreadInput(updatedThreads);
  };

  return (
    <InputAreaWrapper>
      <ThreadPunch />
      <TextareaWrapper
        placeholder="오늘은 어떤 일이 있으셨나요?"
        value={text}
        onChange={handleChange}
      />
      <div
        style={{
          display: "flex",
          position: "absolute",
          right: "52px",
          bottom: "13px",
        }}
      >
        <div>{length} / 300 자</div>
        <div
          style={{
            marginLeft: "12px",
            fontFamily: "NanumMyeongjoExtraBold",
            textDecoration: "underline",
          }}
          onClick={() => {
            updateIsOpen(threadId);
          }}
        >
          취소
        </div>
      </div>
      <SendButtonWrapper>
        <AvatarButton type="send"></AvatarButton>
      </SendButtonWrapper>
      <ThreadPunch />
    </InputAreaWrapper>
  );
}
