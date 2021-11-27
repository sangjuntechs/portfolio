/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Header } from "../components/header";
import styled, { css } from "styled-components";
import profileImage from "../img/about_jepeto.jpeg";
import { Footer } from "../components/footer";
import PubImage from "../img/pubImg.png";
import ReactImg from '../img/reactImg.png'
import TypeImg from '../img/typescriptImg.png'
import ApolloImg from '../img/apolloImg.png'
import GraphqlImg from '../img/graphqlImg.png'
import TailwindImg from '../img/tailwindImg.png'
import NodeImg from '../img/nodeImg.png'
import NestImg from '../img/nestImg.png'
import AwsImg from  '../img/awsImg.png'
import SlackImg from '../img/slackImg.png'
import NotionImg from '../img/notionImg.png'
import FigmaImg from '../img/figmaImg.png'
import JestImg from '../img/jestImg.png'
import CypressImg from '../img/cypressImg.png'
import { Qna } from "../components/Qna";

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
  box-sizing: border-box;
  width: 100vw;
  padding-left: 15%;
  padding-right: 15%;
  margin-top: 15rem;
`;

const Section3 = styled.div`
  box-sizing: border-box;
  width: 100vw;
  padding-left: 15%;
  padding-right: 15%;
  margin-top: 15rem;
  background-color: rgb(250,250,250);
  padding-top:5rem;
  padding-bottom:5rem;
`;

const Section4 = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  width: 100vw;
  padding-left: 15%;
  padding-right: 15%;
  margin-top: 5rem;
  padding-top:5rem;
  padding-bottom:5rem;
`;

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
    transform: skewX(790deg);
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
  height: 25rem;
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
  ${(props) =>
    props.blackColor &&
    css`
      color: black;
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

const ContentImg = styled.img(props =>({
  width: props.i_width,
  height: props.i_height,
}))
const ColumnStyle = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  ${(props) =>
    props.margin_top &&
    css`
      margin-top: 3rem;
    `}
`;

const TextHighlight = styled.p`
  display: inline;
  font-weight: 500;
`;

const MidFont = styled.div`
  font-size: 1.2rem;
  ${(props) =>
    props.gray &&
    css`
      color: rgba(80, 80, 80);
    `}
  ${(props) =>
    props.border &&
    css`
      font-weight: 500;
    `}
  ${(props) =>
    props.marginB &&
    css`
      margin-bottom: 1.2rem;
    `}
  ${(props) =>
    props.sMarginB &&
    css`
      margin-bottom: 3px;
    `}
  ${(props) =>
    props.lightWeight &&
    css`
      font-weight: 300;
      letter-spacing: 1.5px;
      line-height: 25px;
    `}
  ${(props) => props.marginT && css`
    margin-top:1.5rem;
  `}
  ${(props) => props.white && css`
    color:white;
  `}

  ${(props) => props.spacing && css`
    letter-spacing: 1.2px;
  `}
`;

const MainTitle = styled.h1((props) => ({
  fontSize: "2.5rem",
  fontWeight: 600,
  marginTop: props.margin_top,
  marginBottom: props.margin_bottom,
  color: "#5b44ff",
}));

const SubTitle = styled.h2((props) => ({
  color: props.color,
  fontSize: "2rem",
  fontWeight: 500,
  marginBottom: props.margin_bottom,
  marginTop: props.margin_top,
}));

const SkillContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const SkillBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  padding: 2.5rem 4.5rem 2.5rem 4.5rem;
  border-radius:15px;
  margin-right: 1.5rem;
  margin-top:1.5rem;
  box-shadow: 2px 4px 8px gray;
  background-color: white;
`;

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
              <MidFont gray border sMarginB>
                Phone
              </MidFont>
              <MidFont marginB> T. +82 (0)10 3977 9827</MidFont>
              <MidFont gray border sMarginB>
                Address
              </MidFont>{" "}
              <MidFont marginB>Gangdong-gu, Seoul, Republic of Korea</MidFont>
              <MidFont gray border sMarginB>
                Email
              </MidFont>{" "}
              <MidFont marginB>devjun0421@gmail.com</MidFont>
              <MidFont gray border sMarginB>
                Achievement
              </MidFont>{" "}
              <MidFont>한국공학대학교 (전 한국산업기술대)</MidFont>
              <MidFont>IT / 경영학과 졸업</MidFont>
            </ColumnStyle>
          </CardTextSection>
        </GlassCard>
      </Section1>
      <Section2>
        <MainTitle margin_bottom="3rem">#1. Introduce</MainTitle>
        <SubTitle color="#5b44ff" margin_bottom="1rem">
          안녕하세요.
        </SubTitle>
        <MidFont lightWeight marginB>
          톡톡 튀는 아이디어 뱅크 신입 프론트엔드 개발자 박상준입니다.👏🏻 저의
          좌우명은 확실합니다.{" "}
          <TextHighlight>" 리턴이 확실한 사람. "</TextHighlight> 리턴이 확실한
          사람이 되기 위해 항상 노력하는 사람이 될 것 입니다! 이제 처음 저와
          함께하게 될 팀을 찾아다니는 저는, 저의 리턴값을 믿고 이끌어 줄 멋진
          팀을 원합니다! 저의 성장이 팀의 성장이 되고, 팀은 저의 성장을 도와주는
          선순환이 되는 멋진 팀과 합류하고 싶습니다 :)
        </MidFont>
        <MidFont lightWeight marginB>
          처음 개발을 시작하게 된 계기는 지극히 즉흥적이였고, '본인 답다.'라고
          생각이 들었습니다. 카페에서 코딩을 하고 있던 한 남성의 모습이 저에게
          너무 멋지게 다가왔습니다. 그렇게 처음 개발 공부를 시작하게 되었고,
          가면 갈수록 이 무엇인가를 완성해나간다는{" "}
          <TextHighlight>
            성취감과 안되던 것을 이루어 냈을 때의 그 기분
          </TextHighlight>
          이 저를 이 직업으로 이끌어 주었습니다. 나의 뇌에서 시작된 어떠한
          구동을 코드로 구현한다는게 너무 매력적이라고 생각합니다.
        </MidFont>
        <MidFont lightWeight>
          실제로 서비스 하고 있는 제품에서 관리자 페이지 중 일 부분을 빌드한
          적이 있었습니다. 사내 영양사 분들이 사용을 하는 관리자 페이지였는데,
          영양사 분들과 직접 피드백하며, 어떠한 부분이 필요하고 어떠한 부분이
          중요한 지 커뮤니케이션해가며 관리자페이지를 빌드 했고, 실제로 사용성이
          개선되었다는 피드백을 받고 정말 기분이 좋았습니다. 처음으로 디자이너
          분들과 협업도 해보았는데, <TextHighlight>Figma</TextHighlight>를
          활용하여 디자이너 분들이 작성한 프로토타입을 보고 참고하는 협업을 해본
          경험이 있습니다. 괜히{" "}
          <TextHighlight>개발자는 개발 3 커뮤니케이션 7</TextHighlight>이라는
          말이 있는게 아니라는 생각을 해보기도 하였습니다!
        </MidFont>
        <SubTitle color="#5b44ff" margin_bottom="1rem" margin_top="10rem">
          내가 생각하는 나의 부족한 점?
        </SubTitle>
        <MidFont lightWeight marginB>
          저는 아직 완성된 팀에서 엄청난 프로젝트를 해본 경험도 없고, 학원도
          다녀본 적 없고, 굉장한 이력도 없습니다. 그런건 괜찮습니다! 이제
          시작하게 될 제가 채워나가야 할 것이니까요! 다만 아쉬운 것은 있습니다.
          어떻게 해야 협업하는 사람과 더욱 간결하고 쉽게 커뮤니케이션 할 수
          있고, 어떠한 코드가 팀 규모로 일할 때 유리할지, 아직 혼자서 고민해보는
          단계밖에 거쳐보지 못했습니다. 그러한 이유로 요즘에는 '클린 코드'에
          관심이 많습니다. 제가 더 좋은 개발자가 되기 위해 저는{" "}
          <TextHighlight>"소통하고 연결되는 브릿지 개발자"</TextHighlight>가
          되고 싶습니다. 어떠한 제품을 내놓기까지 위해 저는 그 중 한 단계이니,
          그 단계에서 좌 우를 꽉 붙들어 단단히 연결하는 개발자가 되고 싶습니다
          :)
        </MidFont>
        <MidFont lightWeight marginB>
          같은 프론트엔드 개발자 분들과 같은 프로젝트를 진행하며, 서로의 프로젝트를 pull하고,
          리뷰하며, 하나처럼 움직이는 경험을 할 수 있으면 정말 좋을 것 같습니다! 어디에서나
          같이 협업을 하면, 기분이 좋아지는 그런 개발자! 저의 1차 목표입니다.
        </MidFont>
        <SubTitle color="#5b44ff" margin_bottom="1rem" margin_top="10rem">
          당신의 장점?
        </SubTitle>
        <MidFont lightWeight marginB>
          인턴을 할 때 출근할 때 마다 듣던 말이 있습니다. 저의 닉네임은 " Ray "
          였습니다. "Ray, 올 때 마다 사무실이 환해지네요?" 스스로 잘 웃는다고
          생각하고 밝은 에너지가 있다고 생각합니다! 가장 인상 깊었던 영양사 분의
          말이 있었습니다.{" "}
          <TextHighlight>
            "Ray 에게는 뭔가 편하게 말할 수 있어서 좋아요."
          </TextHighlight>{" "}
          스스로 정말 좋은 점이라 생각합니다. 누군가가 저에게 말을 걸고
          싶어하고, 편안하게 의사소통 할 수 있다는 것은 좋은 일이라고
          생각합니다!
        </MidFont>
        <MidFont lightWeight marginB>
          톡톡 아이디어 뱅크입니다! 브레인스토밍을 좋아하고, 독서도 좋아합니다!
          다른 관점에서 분석하는 것을 좋아하고, 다양한 시각에서 보는 것을
          좋아합니다. 우연하게 그 단계에서 독창적이고 재미있는 아이디어가 많이
          나오기도 합니다.
        </MidFont>
      </Section2>
      <Section3>
        <MainTitle margin_bottom="3rem">#2. Skill</MainTitle>
        <SubTitle color="#5b44ff" margin_bottom="1rem">
          Front-end
        </SubTitle>
        <SkillContainer>
        <SkillBox>
          <ContentImg src={PubImage} i_width='250px' i_height='100px'/>
          <MidFont border marginT spacing >Publishing</MidFont>
        </SkillBox>
        <SkillBox>
          <ContentImg src={TailwindImg} i_width='150px' i_height='100px' />
          <MidFont border marginT spacing >CSS Library</MidFont>
        </SkillBox>
        <SkillBox>
          <ContentImg src={ReactImg} i_width='100px' i_height='100px' />
          <MidFont border marginT spacing >Framework/Library</MidFont>
        </SkillBox>
        <SkillBox>
          <ContentImg src={TypeImg} i_width='150px' i_height='100px' />
          <MidFont border marginT spacing >Comfile Language</MidFont>
        </SkillBox>
        <SkillBox>
          <div style={{display:"flex"}}>
          <ContentImg src={ApolloImg} i_width='250px' i_height='100px' />
          <ContentImg src={GraphqlImg} i_width='100px' i_height='100px' />
          </div>
          <MidFont border marginT >State Management</MidFont>
        </SkillBox>
        </SkillContainer>
        <SubTitle color="#5b44ff" margin_bottom="1rem" margin_top="5rem">
          Back-end
        </SubTitle>
        <SkillContainer>
        <SkillBox>
          <ContentImg src={NodeImg} i_width='200px' i_height='100px'/>
          <MidFont border marginT spacing >Node</MidFont>
        </SkillBox>
        <SkillBox>
          <ContentImg src={NestImg} i_width='100px' i_height='100px'/>
          <MidFont border marginT spacing >Node framework</MidFont>
        </SkillBox>
        <SkillBox>
          <ContentImg src={AwsImg} i_width='100px' i_height='100px'/>
          <MidFont border marginT spacing >AWS S3</MidFont>
        </SkillBox>
        </SkillContainer>
        <SubTitle color="#5b44ff" margin_bottom="1rem" margin_top="5rem">
          Collaborate
        </SubTitle>
        <SkillContainer>
        <SkillBox>
          <ContentImg src={SlackImg} i_width='100px' i_height='100px'/>
        </SkillBox>
        <SkillBox>
          <ContentImg src={NotionImg} i_width='100px' i_height='100px'/>
        </SkillBox>
        <SkillBox>
          <ContentImg src={FigmaImg} i_width='200px' i_height='100px'/>
        </SkillBox>
        </SkillContainer>
        <SubTitle color="#5b44ff" margin_bottom="1rem" margin_top="5rem">
          Testing
        </SubTitle>
        <SkillContainer>
        <SkillBox>
          <ContentImg src={JestImg} i_width='100px' i_height='100px'/>
        </SkillBox>
        <SkillBox>
          <ContentImg src={CypressImg} i_width='100px' i_height='100px'/>
        </SkillBox>
        </SkillContainer>
      </Section3>
      <Section4>
      <MainTitle margin_bottom="1rem">#3. QnA</MainTitle>
      <SubTitle color="#5b44ff">저의 성향을 조금 더 아실 수 있도록!</SubTitle>
        <Qna />
      </Section4>
      <Footer />
    </Body>
  );
};

export default About;
