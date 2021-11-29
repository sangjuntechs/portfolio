import React from "react";
import styled, { css } from "styled-components";
import SprintImg from "../img/sprintImg.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    `}
  ${(props) =>
    props.Mid &&
    css`
      font-size: 1rem;
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
            <Labels bgcolor="dodgerblue">React.js</Labels>
            <Labels bgcolor="orange">Javascript</Labels>
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
                날짜별 피드백 유무 확인 기능, 피드백, 유저 쪽지 보내기 기능, 탄단지 계산,
                키워드 하이라이팅 검색 기능 등
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
          <Font Large gap1>
            향수리뷰서비스 : 다향
          </Font>
          <Font Mid gray>
            2021/ 07/ 20 ~ 2021/ 09/ 29
          </Font>
          <Font Mid gray>
            교내 3인 프로젝트
          </Font>
        </ItemHeader>
      </ItemContainer>
      <ItemContainer>
        <ItemHeader>
          <Font Large gap1>
            Jun Eats
          </Font>
          <Font Mid gray>
            2021/ 08/ 30 ~ 2021/ 11/ 19
          </Font>
          <Font Mid gray>
            1인 프로젝트
          </Font>
        </ItemHeader>
      </ItemContainer>
      <ItemContainer>
        <ItemHeader>
          <Font Large gap1>
            포트폴리오 사이트 제작
          </Font>
          <Font Mid gray>
            2021/ 11/ 24 ~ 2021/ 11/ 19
          </Font>
          <Font Mid gray>
            1인 프로젝트
          </Font>
        </ItemHeader>
      </ItemContainer>
    </Container>
  );
};
