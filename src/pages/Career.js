/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Header } from "../components/header";
import styled, { css } from "styled-components";
import SprintLogoImg from "../img/sprintLogoImg.png";
import { Footer } from "../components/footer";

const Body = styled.div`
  position: relative;
`;

const Container = styled.div`
  padding-left: 15%;
  padding-right: 15%;
  @media screen and (max-width: 500px) {
      padding: 0 8% 0 8%;
  }
`;

const ItemContainer1 = styled.div`
  width: 100%;
`;

const SprintLogo = styled.img`
  width: 80px;
  height: 80px;
  padding: 1rem 1rem 1.5rem 0;
`;

const ContainerHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  margin-bottom: 3rem;
`;

const ContainerContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10rem;
`;

const ContentIndent = styled.div`
  padding-left: 1rem;
`;

const InlineStyle = styled.div`
  display: flex;
  align-items: center;
  ${(props) =>
    props.gap1 &&
    css`
      margin-bottom: 0.5rem;
    `}
  ${(props) =>
    props.change_gap &&
    css`
      margin-bottom: 3rem;
    `}
    @media screen and (max-width: 700px) {
        flex-direction: column;
        margin-bottom: 1rem;
        align-items: unset;
  }
`;

const Font = styled.p`
  letter-spacing: 0.7px;
  line-height: 1.3rem;
  ${(props) =>
    props.Large &&
    css`
      font-size: 2rem;
    `}
    @media screen and (max-width: 600px) {
     font-size: 1.5rem;
  }
  ${(props) =>
    props.Mid &&
    css`
      font-size: 1.2rem;
      @media screen and (max-width: 600px) {
        font-size: 0.9rem;
      }
    `}
    ${(props) =>
    props.Small &&
    css`
      font-size: 1rem;
      @media screen and (max-width: 600px) {
        font-size: 0.8rem;
      }
    `}
    ${(props) =>
    props.gray &&
    css`
      color: rgb(150, 150, 150);
    `}
    ${(props) =>
    props.Light &&
    css`
      font-weight: 400;
    `}
    ${(props) =>
    props.Thick &&
    css`
      font-weight: 600;
    `}
    ${(props) =>
    props.margin_right &&
    css`
      margin-right: 2rem;
    `}
    ${(props) =>
    props.mb1 &&
    css`
      margin-bottom: 0.8rem;
    `}
`;

const Career = () => {
  return (
    <Body>
      <Header />
      <Container>
        <ItemContainer1>
          <ContainerHeader>
            <InlineStyle>
              <SprintLogo src={SprintLogoImg} />
              <Font Large Thick>
                Sprint Inc.
              </Font>
            </InlineStyle>
            <Font gray Mid Light>
              유저가 사진 및 글로 자신의 식단을 남기면 분석하여 유저에게
              전달해주고, 전문 영양사가 식단을 피드백주는 헬스케어 서비스
            </Font>
          </ContainerHeader>
          <ContainerContent>
            <InlineStyle gap1>
              <Font gray Thick margin_right Small>
                근무 기간
              </Font>
              <Font Thick Small>2020년 12월14일 ~ 2021년 2월 28일</Font>
            </InlineStyle>
            <InlineStyle change_gap>
              <Font gray Thick margin_right Small>
                담당 업무
              </Font>
              <Font Thick Small>프론트엔드 엔지니어 인턴</Font>
            </InlineStyle>
            <ContentIndent>
              <Font Thick Mid mb1>
                영양사 관리자 페이지 구축
              </Font>
              <InlineStyle gap1>
                <Font gray Thick margin_right Small>
                  참여 인원
                </Font>
                <Font Small>프론트엔드1, 백엔드1, 디자이너1</Font>
              </InlineStyle>
              <InlineStyle change_gap>
                <Font gray Thick margin_right Small>
                  본인 기여
                </Font>
                <Font Small>프론트엔드 100%</Font>
              </InlineStyle>

              <Font Light Small>
                식단 등록 및 관리, 영양사의 피드백이 가능한 초기 헬스케어
                스타트업 스프린트에서 프론트엔드 개발자 인턴으로 근무하였습니다.
              </Font>
              <Font mb1 Small>
                앱 다운로드 URL :{" "}
                <a
                  style={{ color: "#5b44ff" }}
                  href="https://play.google.com/store/search?q=sprint&c=apps"
                >
                  https://play.google.com/store/search?q=sprint&c=apps
                </a>
              </Font>
              <Font Light mb1 Small>
                JSP기반의 관리자 페이지 중 영양사분들이 유저에게 피드백 해주는
                관리자 페이지를 React 기반으로 리빌딩 하였습니다. 기존에 없던
                탄수화물, 단백질, 지방 등의 정보를 표시해주는 기능과
                영양사분들이 요청한 검색 기능등을 구현하였습니다.
              </Font>
              <Font Light mb1 Small>
                기존에 없던 담당 유저에 대한 프로필로 바로 넘어가기, 구현된 달력을
                기반으로 설정한 날짜에 피드백이 없는 유저만 표시, 회사 내규에
                입각한 권장 칼로리 계산, 금일 먹은 모든 음식에 대한
                탄수화물,단백질,지방 칼로리 자동 계산등을 구현하였습니다.
              </Font>
              <Font Light Small>
                노션 페이지, Slack을 통해 커뮤니케이션을 해보았고, 디자이너 분이
                제작한 Figma를 참고해 협업을 하는 경험을 해보았습니다. 1주일,
                1일 단위로 해야 할 업무, 테스크를 쪼개서 티켓 단위로 업무를
                하였습니다.
              </Font>
            </ContentIndent>
          </ContainerContent>
        </ItemContainer1>
      </Container>
      <Footer />
    </Body>
  );
};

export default Career;
