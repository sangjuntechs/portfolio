import React from 'react'
import styled from 'styled-components'
import { ContantItem } from '../components/contactItem'
import { Footer } from '../components/footer'
import { Header } from '../components/header'

const BodyContainer = styled.div`
    position: relative;
`

const ItemContainer = styled.div`
    padding: 0 15% 10rem 15%;
`

const Section1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const Contact = () => {
    return (
        <BodyContainer>
            <Header />
            <ItemContainer>
                <Section1>
                <ContantItem />
                </Section1>
            </ItemContainer>
            <Footer/>
        </BodyContainer>
    )
}

export default Contact;