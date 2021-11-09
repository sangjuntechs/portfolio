import React from "react";
import Jepeto from "/Users/sangjun/Documents/junfolio/junfolio/src/videos/jepeto.mp4";
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";

const Container = styled.div`
  height: 100vh;
  padding-left: 15%;
  padding-right: 15%;
  @media screen and (max-width: 500px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const Video = styled.video`
  width: 20vw;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 1030px) {
    margin-bottom: 2rem;
    margin-top: 3rem;
  }
  @media screen and (max-width: 800px) {
    width:28vw;
  }
  @media screen and (max-width: 450px) {
    width:32vw;
  }
  
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  font-weight: 300;
  @media screen and (max-width: 800px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 0.7rem;
  }
`;

const IndigoFont = styled.p`
  color: #4e1aff;
  margin-right: 0.7rem;
  margin-left: 0.7rem;
  font-weight: 600;
  @media screen and (max-width: 450px) {
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }
`;

const Contents = styled.div`
  display: flex;
  height: 90vh;
  @media screen and (max-width: 1030px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const TextContainer = styled.div`
  @keyframes opacity {
    from {
      opacity: 0;
      transform: translateY(2rem);
    }
    to {
      opacity: 1;
      transform: translateY(0rem);
    }
  }
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  margin-left: 3rem;
  animation: opacity 1s;
  @media screen and (max-width: 1030px) {
    margin-left: 0;
    align-items: center;
  }
`;

const NormalText = styled.p`
  display: flex;
  font-size: 2.5rem;
  font-weight: 300;
  @media screen and (max-width: 1600px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 1350px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 660px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 0.6rem;
  }
`;

const DownClick = styled.div`
  @keyframes updown {
    from {
      transform: translateY(-0.3rem);
    }
    to {
      transform: translateY(0.3rem);
    }
  }
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-top: 6rem;
  transition: all 0.5s;
  animation: updown 0.5s infinite alternate linear;
  @media screen and (max-width: 450px) {
    margin-top: 3rem;
    font-size:0.5rem;
  }
`;

const Home = () => {
  return (
    <Container>
      <Header>
        <IndigoFont>Welcome</IndigoFont> to Sangjun's Portfolio!👏🏻
      </Header>
      <Contents>
        <Video src={Jepeto} autoPlay loop muted type="video/mp4" />
        <TextContainer>
          <NormalText>
            안녕하세요 작고 소중한 <IndigoFont>신입</IndigoFont> 프론트앤드
            개발자
          </NormalText>
          <NormalText>
            <IndigoFont>' 박상준 '</IndigoFont> 입니다!
          </NormalText>
          <NormalText style={{ marginTop: "1.5rem" }}>
            저의 포트폴리오를 방문해주셔서 감사합니다 :)
          </NormalText>
          <DownClick>
            <p style={{ fontWeight: 400 }}>Go Index</p>
            <FaAngleDown style={{ fontSize: "3rem" }} />
          </DownClick>
        </TextContainer>
      </Contents>
    </Container>
  );
};

export default Home;
