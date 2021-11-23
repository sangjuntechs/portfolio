/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Header } from "../components/header";
import styled, { css } from "styled-components";
import profileImage from "../img/about_jepeto.jpeg";

const Body = styled.div`
  position: relative;
`;

const Section1 = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  width: 100vw;
`;

const Section2 = styled.div`
  box-sizing:border-box;
  height: 85vh;
  width: 100vw;
  padding-left: 15%;
  padding-right: 15%;
  margin-top: 15rem;
`

const CardContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  filter: blur(60px);
  opacity: 0.8;
`;

const GlassCard = styled.div`
  box-sizing: border-box;
  display: flex;
  position: absolute;
  width: 43vw;
  height: 55vh;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 30px;
  border: 2px solid white;
  overflow: hidden;
  transition: 0.8s;
  animation: shake infinite 0.8s alternate linear;
  ::before {
    content: "";
    position: absolute;
    left: -50%;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    pointer-events: none;
    transform: skewX(345deg);
  }
  @keyframes shake {
    from {
      transform: translateY(-5px);
    }
    to {
      transform: translateY(5px);
    }
  }
`;

const Round1 = styled.span`
  position: absolute;
  top: 20%;
  left: 15%;
  width: 25rem;
  height: 25rem;
  display: block;
  background-color: #8b44ff;
  border-radius: 100%;
  z-index: 4;
`;

const Round2 = styled.span`
  position: absolute;
  top: 30%;
  left: 50%;
  width: 25rem;
  height:25rem;
  display: block;
  background-color: #5b44ff;
  border-radius: 100%;
  z-index: 3;
`;

const CardTextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 2rem;
`;

const BigFont = styled.p`
  font-size: 2rem;
`;

const SmallFont = styled.p`
  font-size: 0.9rem;
  color: rgb(80, 80, 80);
  ${props => props.blackColor && css`
    color:black;
  `}
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ProfileImg = styled.img`
  z-index: 5;
  width: 92%;
  height: 95%;
  border-radius: 30px;
`;

const ColumnStyle = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  ${props => props.margin_top && css`
    margin-top:3rem;
  `}
`;

const MidFont = styled.div`
  font-size: 1.2rem;
  ${props => props.gray && css`
    color: rgba(80,80,80);
  `}
  ${props => props.border && css`
    font-weight: 500;
  `}
  ${props => props.marginB && css`
    margin-bottom: 1.2rem;
  `}
  ${props => props.sMarginB && css`
    margin-bottom: 3px;
  `}
  ${props => props.lightWeight && css`
    font-weight: 300;
    letter-spacing: 1.5px;
    line-height: 25px;
  `}
`

const SubTitle = styled.div(props => ({
  color: props.color,
  fontSize: '2rem',
  fontWeight: 500,
  marginBottom: props.margin_bottom,
}))

const About = () => {
  return (
    <Body>
      <Header />
      <Section1>
        <CardContainer>
          <Round1></Round1>
          <Round2></Round2>
        </CardContainer>
        <GlassCard>
          <ImageSection>
            <ProfileImg src={profileImage} />
          </ImageSection>
          <CardTextSection>
            <ColumnStyle>
              <BigFont>박 상준</BigFont>
              <SmallFont>(PARK SANGJUN)</SmallFont>
            </ColumnStyle>
            <ColumnStyle>
            <MidFont gray border sMarginB>Phone</MidFont><MidFont marginB> T. +82 (0)10 3977 9827</MidFont>
            <MidFont gray border sMarginB>Address</MidFont> <MidFont marginB>Gangdong-gu, Seoul, Republic of Korea</MidFont>
            <MidFont gray border sMarginB>Email</MidFont> <MidFont marginB>devjun0421@gmail.com</MidFont>
            <MidFont gray border sMarginB>Achievement</MidFont> <MidFont>한국공학대학교 (전 한국산업기술대)</MidFont><MidFont>IT 경영학과 졸.</MidFont>
            </ColumnStyle>
          </CardTextSection>
        </GlassCard>
      </Section1>
      <Section2>
        <SubTitle color='#5b44ff' margin_bottom='2.5rem'>안녕하세요.</SubTitle>
        <MidFont lightWeight marginB>신입 프론트엔드 개발자 박상준입니다.👏🏻 저의 좌우명은 확실합니다 "리턴이 확실한 사람." 리턴이 확실한 사람이 되기 위해 항상 노력하는 사람이 될 것 입니다!
          이제 처음 저와 함께하게 될 팀을 찾아다니는 저는 저의 리턴값을 믿고 이끌어 줄 멋진 팀을 원합니다! 저의 성장이 팀의 성장이 되고, 팀은 저의 성장을 도와주는 선순환이 되는
          멋진 팀과 합류하고 싶습니다 :)
        </MidFont> 
        <MidFont lightWeight marginB>
          처음 개발을 시작하게 된 계기는 지극히 즉흥적이였고, '본인 답다.'라고 생각이 들었습니다. 카페에서 코딩을 하고 있던 한 남성의 모습이 저에게 너무 멋지게 다가왔습니다.
          그렇게 처음 개발 공부를 시작하게 되었고, 가면 갈수록 이 무엇인가를 완성해나간다는 성취감과 안되던 것을 이루어 냈을 때의 그 기분이 저를 이 직업으로 이끌어 주었습니다.
          나의 뇌에서 시작된 어떠한 구동을 코드로 구현한다는게 너무 매력적이라고 생각합니다.
        </MidFont>
        <MidFont lightWeight>
          실제로 서비스 하고 있는 제품에서 관리자 페이지 중 일 부분을 빌드한 적이 있었습니다. 사내 영양사 분들이 사용을 하는 관리자 페이지였는데, 영양사 분들과
          직접 피드백하며, 어떠한 부분이 필요하고 어떠한 부분이 중요한 지 커뮤니케이션해가며 관리자페이지를 빌드 했고, 실제로 사용성이 개선되었다는 피드백을 받고
          정말 기분이 좋았습니다.
        </MidFont>
      </Section2>
    </Body>
  );
};

export default About;
