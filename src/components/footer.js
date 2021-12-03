import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  border-top: 1px solid #5b44ff;
  font-family: 'Gothic A1', sans-serif;
  @media screen and (max-width: 500px) {
    padding: 1.5rem;
  }
`;

const Font = styled.p`
  font-size: 1.1rem;
  letter-spacing: 1.2px;
  font-weight: 500;
  color: #5b44ff;
  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

export const Footer = () => {
  return (
    <Container>
      <Font>Copyright© 2021. Park sangjun-portfolio</Font>
    </Container>
  );
};
