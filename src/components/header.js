import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../img/PLogo.jpeg';
import '../css/About.css';

const Container = styled.nav`
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    width:100vw;
    height: 12vh;
    background-color: rgba(255,255,255,0.8);
    justify-content: space-around;
    z-index: 100;
`

const ListContainer = styled.ul`
    display: flex;
`

const List = styled.li`
    margin: 1rem;
    font-size: 1.5rem;
    font-weight: 300;
    @media screen and (max-width: 800px) {
    font-size:1rem;
  }
`

const PLogo = styled.img`
    height: 7vh;
    border-radius: 100%;
`

const ColumnStyle = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    @media screen and (max-width: 500px) {
   display: none;
  }
`

const Font = styled.p`
    letter-spacing: 1.1px;
    margin-top: 5px;
    font-weight: 600;
`

export const Header = () => {
    const [nUrl, setNUrl] = useState('');

    useEffect(() => {
        const url = window.location.href.split('/')
        const currentLocation = url.slice(3,4);
        setNUrl(currentLocation[0]);
      }, [])

    return(

    <Container>
        <ColumnStyle>
        <Link to='/'><PLogo src={Logo} alt='로고'/></Link>
        <Font>Jun's Portfolio</Font>
        </ColumnStyle>
        <ListContainer>
            <List className={nUrl === 'about' ? 'header_highlight' : ''}><Link to='/about'>About</Link></List>
            <List className={nUrl === 'career' ? 'header_highlight' : ''}><Link to='/career'>Career</Link></List>
            <List className={nUrl === 'portfolio' ? 'header_highlight' : ''}><Link to='/portfolio'>Portfolio</Link></List>
            <List className={nUrl === 'contact' ? 'header_highlight' : ''}><Link to='/contact'>Contact</Link></List>
        </ListContainer>
    </Container>)
}
