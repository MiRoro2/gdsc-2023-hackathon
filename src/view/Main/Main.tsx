import styled from "styled-components";
import Container from "../../component/Container";
import MainText from "../../component/MainText";
import { TopbarLogo } from "../../component/Topbar";

const MainInputWrap = styled.div`
  margin: 0 var(--min-padding);
  margin-top: 10px;
  height: 160px;
`;

export default function Main() {
  return (
    <Container>
      <TopbarLogo />
      <MainText content={"오늘의 글을"}></MainText>
      <MainText content={"아직 남기지 않으셨네요!"}></MainText>
      <MainInputWrap>
        <div
          style={{
            borderTop: "1px solid var(--primary-font)",
          }}
        ></div>
      </MainInputWrap>
    </Container>
  );
}
