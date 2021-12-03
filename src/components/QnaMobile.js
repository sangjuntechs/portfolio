import React from "react";
import styled from "styled-components";
import QuoteImg from "../img/quoteImg.png";

const Container = styled.div`
  display: none;
  @media screen and (max-width: 500px) {
    display: flex;
    margin-top: 3rem;
    flex-direction: column;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid rgb(220, 220, 220);
  padding-bottom: 1rem;
  padding-top: 2rem;
`;

const QuoteImage = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 0.5rem;
`;

const Font = styled.p((props) => ({
  fontSize: props.font_size,
  color: props.color,
  fontWeight: props.font_weight,
  letterSpacing: "1.3px",
  lineHeight: "1.4rem",
  marginBottom: props.margin_bottom,
}));

export const QnaMobile = () => {
  return (
    <Container>
      <Card>
        <Font color="#5b44ff" font_weight="400" margin_bottom="15px">
          Question 1.
        </Font>
        <Font font_size="1rem" font_weight="500" margin_bottom="10px">
          보통 기술적 문제를 어떻게 해결하시나요?
        </Font>
        <QuoteImage src={QuoteImg} />
        <Font
          color="rgb(80,80,80)"
          font_size="1.2rem"
          margin_bottom="1rem"
          font_weight="600"
        >
          큰 덩어리 먼저!
        </Font>
        <Font font_weight="400" font_size="0.9rem" margin_bottom="15px">
          아예 방향성이 잡히지 않는 경우는 비슷한 유형의 코드를 찾고 찾습니다.
          구글에 검색도 하고, 유튜브도 찾아보고..
        </Font>
        <Font font_weight="400" font_size="0.9rem" margin_bottom="15px">
          ex) how to pagination from backend?
        </Font>
        <Font font_weight="400" font_size="0.9rem" margin_bottom="15px">
          그렇게 커다란 방향성을 먼저 찾고, 필요한 기술 및 라이브러리를 찾아가다
          보면 어느새 조금 씩 결과에 가까워지고 있었습니다!
        </Font>
      </Card>
      <Card>
        <Font color="#5b44ff" font_weight="400" margin_bottom="15px">
          Question 2.
        </Font>
        <Font font_size="1rem" font_weight="500" margin_bottom="10px">
          개발을 하며 가장 뿌듯했을 때는?
        </Font>
        <QuoteImage src={QuoteImg} />
        <Font
          color="rgb(80,80,80)"
          font_size="1.2rem"
          margin_bottom="1rem"
          font_weight="600"
        >
          한숨을 환희로!
        </Font>
        <Font font_weight="400" font_size="0.9rem" margin_bottom="15px">
          식단 관리 어플리케이션 관리자 페이지를 제작 중 영양사 분이 관리자
          페이지를 사용하는데 어려움을 겪는 것을 보았습니다.
        </Font>
        <Font font_weight="400" font_size="0.9rem" margin_bottom="15px">
          체중과 키 만으로 유저를 찾을 수 있으면 좋을텐데.. 저는 그 것을 캐치해
          해결을 해 드렸고, 정말 좋아하시는 모습을 보았을 때가 가장 뿌듯하고
          보람이 느껴졌습니다!
        </Font>
      </Card>
      <Card>
        <Font color="#5b44ff" font_weight="400" margin_bottom="15px">
          Question 3.
        </Font>
        <Font font_size="1rem" font_weight="500" margin_bottom="10px">
          기술 경향 파악은 어떻게 하시는지?
        </Font>
        <QuoteImage src={QuoteImg} />
        <Font
          color="rgb(80,80,80)"
          font_size="1.2rem"
          margin_bottom="1rem"
          font_weight="600"
        >
          이건 뭐지?
        </Font>
        <Font font_weight="400" font_size="0.9rem" margin_bottom="15px">
          호기심이 많아 버린 저는 어떠한 정보가 들어오면 이게 왜 나온거지? 라며
          의문을 가집니다. 보통 레딧, 유튜브에서 정보를 찾아보기도 하고 그
          정보를 기반으로 구글에 검색도 해봅니다!
        </Font>
        <Font font_weight="400" font_size="0.9rem" margin_bottom="15px">
          React-router가 선언 방식이 자꾸 달라지길래 이건 왜 자꾸 바꾸는거야..
          짜증내면서 찾아보기도 하고 바로 수긍합니다.😅
        </Font>
      </Card>
      <Card>
        <Font color="#5b44ff" font_weight="400" margin_bottom="15px">
          Question 4.
        </Font>
        <Font font_size="1rem" font_weight="500" margin_bottom="10px">
          5년 뒤 당신은 무엇을 하고 있을 것 같은지?
        </Font>
        <QuoteImage src={QuoteImg} />
        <Font
          color="rgb(80,80,80)"
          font_size="1.2rem"
          margin_bottom="1rem"
          font_weight="600"
        >
          내가 시니어?!
        </Font>
        <Font font_weight="400" font_size="0.9rem" margin_bottom="15px">
          5년차 미드, 시니어 개발자가 되어서 주니어 분들과 함께 좀더 커다란(?)
          덩어리를 맡아서 제품 서비스를 개발하고 있을 것 같습니다.
        </Font>
        <Font font_weight="400" font_size="0.9rem" margin_bottom="15px">
          좀 더 믿음직스럽고, 스케줄링도 완벽히 해내는 멋진 시니어 개발자로
          진화하고 싶습니다.
        </Font>
      </Card>
      <Card>
        <Font color="#5b44ff" font_weight="400" margin_bottom="15px">
          Question 5.
        </Font>
        <Font font_size="1rem" font_weight="500" margin_bottom="10px">
          최종 커리어 골이 어떻게 되시는지?
        </Font>
        <QuoteImage src={QuoteImg} />
        <Font
          color="rgb(80,80,80)"
          font_size="1.2rem"
          margin_bottom="1rem"
          font_weight="600"
        >
          최고의 컴퓨터 번역가.
        </Font>
        <Font font_weight="400" font_size="0.9rem" margin_bottom="15px">
          프로그래머는 인간과 컴퓨터 사이의 번역가라고 생각합니다. 사람의 생각을
          컴퓨터의 언어로 번역하여 이루어내는!
        </Font>
        <Font font_weight="400" font_size="0.9rem" margin_bottom="15px">
          모든 사람의 생각을 완벽하게 컴퓨터 언어로 번역하는 최고의 번역가가
          되어 최고의 프론트엔드 팀을 이끄는 CTO,TechLead가 되고 싶습니다.
        </Font>
      </Card>
      <Card>
        <Font color="#5b44ff" font_weight="400" margin_bottom="15px">
          Question 4.
        </Font>
        <Font font_size="1rem" font_weight="500" margin_bottom="10px">
          5년 뒤 당신은 무엇을 하고 있을 것 같은지?
        </Font>
        <QuoteImage src={QuoteImg} />
        <Font
          color="rgb(80,80,80)"
          font_size="1.2rem"
          margin_bottom="1rem"
          font_weight="600"
        >
          내가 시니어?!
        </Font>
        <Font font_weight="400" font_size="0.9rem" margin_bottom="15px">
          5년차 미드, 시니어 개발자가 되어서 주니어 분들과 함께 좀더 커다란(?)
          덩어리를 맡아서 제품 서비스를 개발하고 있을 것 같습니다.
        </Font>
        <Font font_weight="400" font_size="0.9rem" margin_bottom="15px">
          좀 더 믿음직스럽고, 스케줄링도 완벽히 해내는 멋진 시니어 개발자로
          진화하고 싶습니다.
        </Font>
      </Card>
      <Card>
        <Font color="#5b44ff" font_weight="400" margin_bottom="15px">
          Question 6.
        </Font>
        <Font font_size="1rem" font_weight="500" margin_bottom="10px">
          자신이 성장했다고 느낀 순간은?
        </Font>
        <QuoteImage src={QuoteImg} />
        <Font
          color="rgb(80,80,80)"
          font_size="1.2rem"
          margin_bottom="1rem"
          font_weight="600"
        >
          이제 알겠다!
        </Font>
        <Font font_weight="400" font_size="0.9rem" margin_bottom="15px">
          가장 이 기술을 이해하기 쉬운 방법은 체득이라고 생각합니다! 왜 이걸
          사용하고 있지? 분명, 사용하다 보면 어떠한 한계점이나 아쉬운 부분이
          생겼습니다.
        </Font>
        <Font font_weight="400" font_size="0.9rem" margin_bottom="15px">
          그 과정을 거치고 다시 문서를 보면, 이해가 되지 않았던게 자연스럽게
          너무나도 명확하게 이해가 되는 경우가 있습니다. 이 때 저는 아! 내가
          성장했다는 생각이 들었습니다.
        </Font>
      </Card>
    </Container>
  );
};
