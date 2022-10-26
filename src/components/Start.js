import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1` 
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
    
    
`
const Button = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;

`

const Start = () => {
    return (
        <div>
            <Title>당신의 신인을 선택하세요</Title>
            
            <Button><Link to="/choice">시작</Link></Button>    
            
            
        </div>
    );
};

export default Start;