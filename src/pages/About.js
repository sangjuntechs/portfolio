/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Header } from '../components/header';
import styled from 'styled-components';

const Body = styled.div`
    position: relative;
`

const Hy = styled.div`
    height: 5000px;
`


const About = () => {

    return (
        <Body>
            <Header />
            <Hy>
            About me
            </Hy>
        </Body>
    )
}

export default About;

