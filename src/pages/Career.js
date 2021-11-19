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


const Career = () => {

    return (
        <Body>
            <Header />
            <Hy>
            Career
            </Hy>
        </Body>
    )
}

export default Career;

