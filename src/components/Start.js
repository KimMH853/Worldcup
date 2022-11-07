import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StartBox = styled.div``;
const Title = styled.h1`
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  color: white;
  font-family: "KOFIHDrLEEJWTTF-B";
  font-weight: 900;
  line-height: 1.5;
  letter-spacing: 0.075em;
  text-transform: uppercase;
  /* margin: 0 0 1rem 0; */
  font-size: 4rem;
  line-height: 1.1;
`;

const Button = styled(Link)`
  text-decoration: none;
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: white;
  font-family: "KOFIHDrLEEJWTTF-B";
  display: inline-block;
  /* background-color: #ffa500; */
  padding: 10px 20px 10px 20px;
  margin: 20px;
  border-radius: 10px;
  border-width: 3px;
  border-style: solid;
  border-color: white;
`;

const Start = () => {
  return (
    <StartBox>
      <Title> 귀여운게 최고야</Title>
      <Button to="/choice">시작</Button>
    </StartBox>
  );
};

export default Start;
