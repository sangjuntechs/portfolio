import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  border-top: 1px solid #5b44ff;
`;

const Font = styled.p`
  font-size: 1.1rem;
  letter-spacing: 1.2px;
  font-weight: 500;
  color: #5b44ff;
`;

export const Footer = () => {
  return (
    <Container>
      <Font>Copyright© 2021. Park sangjun. All rights reserved.</Font>
    </Container>
  );
};
