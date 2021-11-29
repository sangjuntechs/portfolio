import React from 'react'
import styled from 'styled-components'
import { Header } from '../components/header'

const BodyContainer = styled.div`
    position: relative;
`

const ItemContainer = styled.div`
    padding: 0 15% 0 15%;
`

const Contact = () => {
    return (
        <BodyContainer>
            <Header />
            <ItemContainer>
                Hi
            </ItemContainer>
        </BodyContainer>
    )
}

export default Contact;