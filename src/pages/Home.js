import React, { useState } from "react";
import Jepeto from "../videos/jepeto.mp4";
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";
import "../css/Home.css";
import { Link } from "react-router-dom";
import Img1 from '../img/jepeto1.jpeg'

const Bodys = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const JepetoImg1 = styled.img`
  height: 60%;
  width: 60%;
`

const Container = styled.div`
  height: 100vh;
  padding-left: 15%;
  padding-right: 15%;
  transition: all 1s;
  @media screen and (max-width: 500px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const ListSection = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  @media screen and (max-width: 1030px) {
    width:100%;
  }
  
`

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

const Menu = styled.div`
  position: absolute;
  z-index: 10;
  height: 100vh;
  width: 100vw;
  background-color: white;
  transition: 1s;
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
    width: 28vw;
  }
  @media screen and (max-width: 450px) {
    width: 32vw;
  }
`;

const ImgSection = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5b44ff;
  @media screen and (max-width: 1030px) {
    display: none;
  }
`

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
  color: #5b44ff;
  margin-right: 0.7rem;
  margin-left: 0.7rem;
  font-weight: 600;
  @media screen and (max-width: 450px) {
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }
`;

const MenuFont = styled.p`
  font-weight: 300;
  font-size: 4rem;
  text-decoration: none;
  color: black;
  margin-bottom: 2rem;
  transition: 0.2s linear;
  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`

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
    font-size: 0.5rem;
  }
`;

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const openMenuClick = () => {
    setOpenMenu(true);
  };


  document.addEventListener("mousewheel", function (event) {
    if (event.wheelDelta >= 50) {
      setOpenMenu(false);
    }
    if (event.wheelDelta < -70) {
      setOpenMenu(true);
    }
  });

  return (
    <Bodys>
      <Container className={openMenu ? "up" : ""}>
        <Header>
          <IndigoFont>Welcome</IndigoFont> to Sangjun's Portfolio!👏🏻
        </Header>
        <Contents>
          <Video src={Jepeto} autoPlay loop muted type="video/mp4" />
          <TextContainer>
            <NormalText>
              안녕하세요. 작고 소중한 <IndigoFont>신입</IndigoFont> 프론트엔드
              개발자
            </NormalText>
            <NormalText>
              <IndigoFont>' 박상준 '</IndigoFont> 입니다!
            </NormalText>
            <NormalText style={{ marginTop: "1.5rem" }}>
              저의 포트폴리오를 방문해주셔서 감사합니다 :)
            </NormalText>
            <DownClick onClick={openMenuClick}>
              <p style={{ fontWeight: 400 }}>더 보기</p>
              <FaAngleDown style={{ fontSize: "3rem" }} />
            </DownClick>
          </TextContainer>
        </Contents>
      </Container>
      <Menu className={openMenu ? "active" : "un-active"}>
        <MenuContainer>
          <ListSection>
           <MenuFont><Link to='/about'>About me</Link></MenuFont>
           <MenuFont><Link to='/career'>Career</Link></MenuFont>
           <MenuFont><Link to='/portfolio'>Portfolio</Link></MenuFont>
           <MenuFont><Link to='/contact'>Contact me</Link></MenuFont>
          </ListSection>
          <ImgSection>
            <JepetoImg1 src={Img1} />
          </ImgSection>
        </MenuContainer>
      </Menu>
    </Bodys>
  );
};

export default Home;
