import React from 'react'
import styled from 'styled-components'
import { ContantItem } from '../components/contactItem'
import { Header } from '../components/header'

const BodyContainer = styled.div`
    position: relative;
`

const ItemContainer = styled.div`
    padding: 0 15% 0 15%;
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
        </BodyContainer>
    )
}

export default Contact;