import React from 'react';
import '../css/ContactItem.css';
import { IoMailOutline, IoCallOutline, IoHomeOutline } from "react-icons/io5";
import { SiNotion, SiGithub } from "react-icons/si";

export const ContantItem = () => {
    return (
        <div className='container'>
            <div className='serviceBox'>
                <div className='icon1'><SiGithub /></div>
                <div className='content'>
                    <h2>Github</h2>
                    <p>개인 코드 저장소입니다.</p>
                    <a href='https://github.com/sangjuntechs'>Github 바로가기</a>
                </div>
            </div>
            <div className='serviceBox2'>
                <div className='icon2'><SiNotion /></div>
                <div className='content'>
                <h2>Notion</h2>
                <p>새로 알게된 지식이나 기술들을 이 곳에 정리하며, 복기합니다.</p>
                <a href='https://sangjuntechs.notion.site/Sangjun-s-techFactory-4bd8acde5b00452fa41ec2147288d7ec'>Notion 블로그 바로가기</a>
                </div>
            </div>
            <div className='serviceBox'>
                <div className='icon3'><IoCallOutline /></div>
                <div className='content'>
                    <h2>Phone Number</h2>
                    <p>T. +82 (0)10 3977 9827</p>
                </div>
            </div>
            <div className='serviceBox'>
                <div className='icon4'><IoMailOutline /></div>
                <div className='content'>
                    <h2>Google Email</h2>
                    <p>devjun0421@gmail.com</p>
                </div>
            </div>
            <div className='serviceBox'>
                <div className='icon5'><IoHomeOutline /></div>
                <div className='content'>
                    <h2>Address</h2>
                    <p>Gangdong-gu, Seoul, Republic of Korea</p>
                </div>
            </div>
            <div className='serviceBox'>
                <div className='icon6'>Want work with me?</div>
                <div className='content'></div>
            </div>
        </div>
    )
}