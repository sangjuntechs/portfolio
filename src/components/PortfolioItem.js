import React from "react";
import styled, { css } from "styled-components";
import SprintImg from "../img/sprintImg.png";
import JunEatsVideo from "../videos/juneats.mp4";
import DahyangVideo from "../videos/dahyangVideo.mp4";
import PortfolioImg from "../img/PortfolioImg.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Gothic A1', sans-serif;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  margin-top: 5rem;
  padding-bottom: 5rem;
  border-bottom: 1px solid rgb(200, 200, 200);
`;

const ItemHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const ContentBox = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const InLineStyle = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: unset;
    margin-bottom: 0.7rem;
  }
  
  ${(props) =>
    props.gap1 &&
    css`
      margin-bottom: 1rem;
    `}
`;

const ContentImgSection = styled.div`
  width: 45%;
  margin-right: 1.5rem;
  @media screen and (max-width: 700px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const ContentTextSection = styled.div`
  width: 55%;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const ContentImg = styled.img`
  width: 100%;
`;

const Video = styled.video`
  width: 100%;
`;

const Astyle = styled.a`
  color: #5b44ff;
  display: inline;
`;

const Labels = styled.div((props) => ({
  padding: "4px 10px 1px 10px",
  color: "white",
  backgroundColor: props.bgcolor,
  borderRadius: "3px",
  marginRight: "0.5rem",
  marginBottom: props.margin_bottom,
}));

const Font = styled.p`
  letter-spacing: 1px;
  line-height: 1.4rem;
  ${(props) =>
    props.minWidth &&
    css`
      min-width: 80px;
    `}
  ${(props) =>
    props.Large &&
    css`
      font-size: 2rem;
      @media screen and (max-width: 500px) {
    font-size: 1.3rem;
  }
    `}
  ${(props) =>
    props.Mid &&
    css`
      font-size: 1rem;
      @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
    `}
 ${(props) =>
    props.gap1 &&
    css`
      margin-bottom: 1rem;
    `}
 ${(props) =>
    props.gray &&
    css`
      color: rgb(100, 100, 100);
    `}
 ${(props) =>
    props.Light &&
    css`
      font-weight: 300;
    `}
 ${(props) =>
    props.Thick &&
    css`
      font-weight: 600;
    `}
 ${(props) =>
    props.mr1 &&
    css`
      margin-right: 1rem;
    `}
`;

const Border = styled.div`
  width: 100%;
  border-top: 1px solid rgb(200, 200, 200);
  margin-bottom: 1rem;
`;

const LabelBox = styled.div`
  width: 35%;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const PortfolioItem = () => {
  return (
    <Container>
      <ItemContainer>
        <ItemHeader>
          <Font Large gap1 Thick>
            Sprint 관리자 페이지
          </Font>
          <InLineStyle>
            <Font Mid gray mr1 Thick>
              개발 기간
            </Font>
            <Font Mid>2020/ 12/ 14 ~ 2021/ 02/ 28</Font>
          </InLineStyle>
          <InLineStyle>
            <Font Mid gray mr1 Thick>
              개발 인원
            </Font>
            <Font Mid>3인 프로젝트</Font>
          </InLineStyle>
          <InLineStyle>
            <Font Mid gray mr1 Thick>
              사용 기술
            </Font>
            <LabelBox>
            <Labels bgcolor="dodgerblue" margin_bottom='0.3rem'>React.js</Labels>
            <Labels bgcolor="orange" margin_bottom='0.3rem'>Javascript</Labels>
            <Labels bgcolor="green" margin_bottom='0.3rem'>Node.js</Labels>
            <Labels bgcolor="gray" margin_bottom='0.3rem'>Deploy</Labels>
            </LabelBox>
          </InLineStyle>
        </ItemHeader>
        <ContentBox>
          <ContentImgSection>
            <ContentImg src={SprintImg} />
          </ContentImgSection>
          <ContentTextSection>
            <Font Mid gap1>
              인턴기간 동안 관리자 페이지 중 영양사 피드백 부분을 리팩토링
              하였습니다. 처음으로 백 엔드 개발자분과 협업을 통해 다양한 경험을
              하였습니다. 통신과정에서 CORS등 처음 만나보는 상황이 많았고,
              받아오는 정보에 대한 가공 등 많은 능력이 향상 됐다고 생각합니다.{" "}
            </Font>
            <Font Mid gap1>
              노션 페이지를 통해 제가 정보를 가공 시 필요한 API명세를 작성하여
              소통을 하였고, 커뮤니케이션의 중요성도 많이 깨닫게 되었습니다.
              디자이너 분과는 Figma에 작성된 프로토타입을 보며 소통을
              하였습니다.{" "}
            </Font>
            <Font Mid gap1>
              필요한 다양한 리액트 라이브러리를 찾아보았고, 좋은 라이브러리도
              많이 알게 되었습니다. 그러한 라이브러리를 자신에게 필요하게
              가공하고 사용하는 능력도 향상되었습니다.{" "}
            </Font>
            <Border />
            <InLineStyle gap1>
              <Font Mid gray mr1 Thick minWidth>
                주요 기능
              </Font>
              <Font Mid>
                회원 검색, 검색 명령어 기능 ex)키+몸무게, 담당 유저별 케어 기능,
                날짜별 피드백 유무 확인 기능, 피드백, 유저 쪽지 보내기 기능,
                탄단지 계산, 키워드 하이라이팅 검색 기능 등
              </Font>
            </InLineStyle>
            <InLineStyle>
              <Font Mid gray mr1 Thick minWidth>
                Notion Post
              </Font>
              <Astyle href="https://sangjuntechs.notion.site/9c0bb6dbd0fb4978875ecd8c0c059f89">
                https://sangjuntechs.notion.site/9c0bb6dbd0fb4978875ecd8c0c059f89
              </Astyle>
            </InLineStyle>
          </ContentTextSection>
        </ContentBox>
      </ItemContainer>
      <ItemContainer>
        <ItemHeader>
          <Font Large gap1 Thick>
            향수리뷰서비스 : 다향
          </Font>
          <InLineStyle>
            <Font Mid gray mr1 Thick>
              개발 기간
            </Font>
            <Font Mid>2021/ 07/ 20 ~ 2021/ 09/ 29</Font>
          </InLineStyle>
          <InLineStyle>
            <Font Mid gray mr1 Thick>
              개발 인원
            </Font>
            <Font Mid>교내 3인 프로젝트</Font>
          </InLineStyle>
          <InLineStyle>
            <Font Mid gray mr1 Thick>
              사용 기술
            </Font>
            <LabelBox>
            <Labels bgcolor="dodgerblue" margin_bottom='0.3rem'>React.js</Labels>
            <Labels bgcolor="orange" margin_bottom='0.3rem'>Javascript</Labels>
            <Labels bgcolor="green" margin_bottom='0.3rem'>Node.js</Labels>
            </LabelBox>
          </InLineStyle>
        </ItemHeader>
        <ContentBox>
          <ContentImgSection>
            <Video src={DahyangVideo} autoPlay loop muted type="video/mp4" />
          </ContentImgSection>
          <ContentTextSection>
            <Font Mid gap1>
              교내 학우 2명과 사이드 프로젝트 서비스를 제작하기로 하여 진행한
              프로젝트입니다. 젊은 층 사람들의 퍼스널 퍼퓸, 즉 자신에게 어울리는
              향수 향수에 대한 인기가 갈수록 높이지지만, 그 향수에 대한 품질과
              알레르기 유발 물질에 대한 검증을 해주는 서비스는 없어서 아이디어를
              고안해 진행한 프로젝트 입니다.{" "}
            </Font>
            <Font Mid gap1>
              데이터베이스 구성과 ERD 구성에 참여하였고, 프론트엔드를
              빌드하였습니다. 카카오톡 소셜 로그인을 처음 구현하였습니다.{" "}
            </Font>
            <Font Mid gap1>
              React-slide등 다양한 라이브러리를 찾아보며 재미있는 라이브러리도
              많이 발견하고 정말 사용하기 좋은 훌륭한 라이브러리도 많이 발견하게
              되었습니다.{" "}
            </Font>
            <Border />
            <InLineStyle gap1>
              <Font Mid gray mr1 Thick minWidth>
                주요 기능
              </Font>
              <Font Mid>
                광고 Slide, 카카오톡 로그인 API로 받아온 나이대를 기반으로 한
                추천 로직, 앓고 있는 질병에 대한 향수 필터링, 최근 리뷰, 새로
                등록된 향수 표시, 리뷰수가 가장 많은 향수 필터링, 유저 피드백
                포스트, 해시태그, 이름 검색기능, 상세화면, 리뷰남기기 등
              </Font>
            </InLineStyle>
            <InLineStyle gap1>
              <Font Mid gray mr1 Thick minWidth>
                Notion Post
              </Font>
              <Astyle href="https://sangjuntechs.notion.site/7d3e87f31e6542d585fc2d0a5ac51897">
                https://sangjuntechs.notion.site/7d3e87f31e6542d585fc2d0a5ac51897
              </Astyle>
            </InLineStyle>
            <InLineStyle>
              <Font Mid gray mr1 Thick minWidth>
                Github Code
              </Font>
              <Astyle href="https://github.com/sangjuntechs/2021-kpu-project-frontend">
                https://github.com/sangjuntechs/2021-kpu-project-frontend
              </Astyle>
            </InLineStyle>
          </ContentTextSection>
        </ContentBox>
      </ItemContainer>
      <ItemContainer>
        <ItemHeader>
          <Font Large gap1 Thick>
            Jun Eats
          </Font>
          <InLineStyle>
            <Font Mid gray mr1 Thick>
              개발 기간
            </Font>
            <Font Mid>2021/ 08/ 30 ~ 2021/ 11/ 19</Font>
          </InLineStyle>
          <InLineStyle>
            <Font Mid gray mr1 Thick>
              개발 인원
            </Font>
            <Font Mid>1인 프로젝트</Font>
          </InLineStyle>
          <InLineStyle>
            <Font Mid gray mr1 Thick>
              사용 기술
            </Font>
            <LabelBox>
              <Labels bgcolor="dodgerblue" margin_bottom="0.3rem">
                React.js
              </Labels>
              <Labels bgcolor="#ff007f" margin_bottom="0.3rem">
                Nest.js
              </Labels>
              <Labels bgcolor="blue" margin_bottom="0.3rem">
                Typescript
              </Labels>
              <Labels bgcolor="rgb(204,0,204)" margin_bottom="0.3rem">
                Graphql / Apollo
              </Labels>
              <Labels bgcolor="gray" margin_bottom="0.3rem">
                Testing
              </Labels>
              <Labels bgcolor="rgb(0,204,204)" margin_bottom="0.3rem">
                JWT token
              </Labels>
            </LabelBox>
          </InLineStyle>
        </ItemHeader>
        <ContentBox>
          <ContentImgSection>
            <Video src={JunEatsVideo} autoPlay loop muted type="video/mp4" />
          </ContentImgSection>
          <ContentTextSection>
            <Font Mid gap1>
              Typescript, graphql, Apollo, Nest.js를 적용해 백 엔드를 모두
              담당해서 만들어본 서비스입니다. grapqhl 서버를 통해 쿼리,
              뮤테이션, 서브스크립션까지 모두 다뤄보았으며, 다양한 상황에서
              사용하는 방법을 익히는데 많은 도움이 됐다고 생각합니다.{" "}
            </Font>
            <Font Mid gap1>
              Typescript가 왜 도움이 되는지, 백 엔드 DTO를 Apollo-codegen으로
              타입들을 가져와 프론트엔드에서 바로 작업을 하면서 일반
              자바스크립트만 사용할 때 프로그래밍 후 현저히 적은 에러율로 절실히
              깨닫게 되었습니다.{" "}
            </Font>
            <Font Mid gap1>
              그 외에도 Subscription의 WebSocket 통신 등 Http connection과의
              차이, 결제 모듈 구축, 메일 인증등을 익히면서 굉장히 재미있게
              진행한 프로젝트 였습니다.{" "}
            </Font>
            <Border />
            <InLineStyle gap1>
              <Font Mid gray mr1 Thick minWidth>
                주요 기능
              </Font>
              <Font Mid>
                음식점, 유저, 드라이버에 대한 다른 화면 뷰 구성(user.role에 따른
                화면), jwt token 로그인/인증, 메일 인증, 결제 모듈, 실시간
                연동(graphql subscription), 구글 맵 API, 로그인 값 벨리데이션,
                모든 쿼리 구성, VictoryChart, CSS framework(Tailwind), Testing
              </Font>
            </InLineStyle>
            <InLineStyle gap1>
              <Font Mid gray mr1 Thick minWidth>
                Notion Post
              </Font>
              <Astyle href="https://sangjuntechs.notion.site/JUN-EATS-Front-end-7bbba606e41046a18ba04c376d58590f">
                https://sangjuntechs.notion.site/JUN-EATS-Front-end-7bbba606e41046a18ba04c376d58590f
              </Astyle>
            </InLineStyle>
            <InLineStyle>
              <Font Mid gray mr1 Thick minWidth>
                Github Code
              </Font>
              <Astyle href="https://github.com/sangjuntechs/jun-eats-frontend">
                https://github.com/sangjuntechs/jun-eats-frontend
              </Astyle>
            </InLineStyle>
          </ContentTextSection>
        </ContentBox>
      </ItemContainer>
      <ItemContainer>
        <ItemHeader>
          <Font Large gap1 Thick>
            포트폴리오 사이트 제작
          </Font>
          <InLineStyle>
            <Font Mid gray mr1 Thick>
              개발 기간
            </Font>
            <Font Mid>2021/ 11/ 23 ~ 2021/ 11/ 30</Font>
          </InLineStyle>
          <InLineStyle>
            <Font Mid gray mr1 Thick>
              개발 인원
            </Font>
            <Font Mid>1인 프로젝트</Font>
          </InLineStyle>
          <InLineStyle>
            <Font Mid gray mr1 Thick>
              사용 기술
            </Font>
            <LabelBox>
            <Labels bgcolor="dodgerblue" margin_bottom='0.3rem'>React.js</Labels>
            <Labels bgcolor="orange" margin_bottom='0.3rem'>Javascript</Labels>
            <Labels bgcolor="gray" margin_bottom='0.3rem'>Deploy</Labels>
            </LabelBox>
          </InLineStyle>
        </ItemHeader>
        <ContentBox>
          <ContentImgSection>
            <ContentImg src={PortfolioImg} />
          </ContentImgSection>
          <ContentTextSection>
            <Font Mid gap1>
              정적 포트폴리오 사이트를 구축하였습니다. 백 엔드와의 통신이 없기
              때문에 Typescript를 사용할 필요가 없다고 판단해, 간단하게
              React.js와 javascript로 구현하였습니다.{" "}
            </Font>
            <Font Mid gap1>
              커스텀 도메인과 heroku를 통해 배포하였으며, 마킹과 스타일 위주의
              사이트이기 때문에 styled-components 들의 페이지 내에서의
              재사용성을 고민하며 사이트를 구축하였습니다.{" "}
            </Font>
            <Border />
            <InLineStyle gap1>
              <Font Mid gray mr1 Thick minWidth>
                주요 기능
              </Font>
              <Font Mid>
                pull page home style, routing, deploy heroku, custom domain, styled-component, 모바일 대응(media query, innerWidth)
              </Font>
            </InLineStyle>
            <InLineStyle>
              <Font Mid gray mr1 Thick minWidth>
                Github Code
              </Font>
              <Astyle href="https://github.com/sangjuntechs/portfolio">
                https://github.com/sangjuntechs/portfolio
              </Astyle>
            </InLineStyle>
          </ContentTextSection>
        </ContentBox>
      </ItemContainer>
    </Container>
  );
};
