import React from 'react';
import styled from 'styled-components'
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { PortfolioItem } from '../components/PortfolioItem';

const BodyContainer = styled.div`
    position: relative;
`

const ItemContainer = styled.div`
    padding: 0 15% 10rem 15%;
    @media screen and (max-width: 500px) {
      padding: 0 8% 5rem 8%;
  }
    
`

const Portfolio = () => {
    return (
        <BodyContainer>
            <Header />
            <ItemContainer>
                <PortfolioItem />
            </ItemContainer>
            <Footer />
        </BodyContainer>
    )
}

export default Portfolio;