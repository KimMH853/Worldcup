import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import items from "../lib/items";

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
`;

const Title = styled.h1`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  padding: 0px 30px;
  padding-bottom: 10px;
`;

const ActorImg = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 60%;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    //transform: scale(1.1);
    opacity: 0.8;
  }
`;

const ImgBox = styled.div`
  flex: 1;
  min-width: 500px;
  overflow: hidden;
  position: relative;
`;

const Name = styled.div`
  position: absolute;
  z-index: auto;
  color: black;
  bottom: 10%;
  font-size: 2rem;
  left: 50%;
  transform: translateX(-50%);
`;
const Information = styled.div`
  flex: 2;
  z-index: 3;
  color: black;
  bottom: 10%;
  font-size: 2rem;
  text-align: right;
  vertical-align: middle;

  a {
    text-decoration: none;
    font-size: 2rem;
    color: black;
    text-align: right;
    vertical-align: bottom;
  }
`;

const Choice = () => {
  const [actors, setActors] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);
  const [aa, setAa] = useState("8");
  useEffect(() => {
    items.sort(() => Math.random() - 0.5);
    setActors(items);
    setDisplays([items[0], items[1]]);
  }, []);

  const clickHandler = (actor) => () => {
    if (actors.length <= 2) {
      if (winners.length === 0) {
        setDisplays([actor]);
        setAa("1");
      } else {
        let updatedMiddleAge = [...winners, actor];
        setActors(updatedMiddleAge);
        setDisplays([updatedMiddleAge[0], updatedMiddleAge[1]]);
        setWinners([]);
        if (updatedMiddleAge.length > 2) {
          setAa("4");
        } else {
          setAa("2");
        }
        console.log("updatedMiddleAge.length : " + updatedMiddleAge.length);
        console.log("winners.length : " + winners.length.length);
      }
    } else if (actors.length > 2) {
      setWinners([...winners, actor]);
      setDisplays([actors[2], actors[3]]);
      setActors(actors.slice(2));
    }
    console.log("actors.length :" + actors.length);
  };
  return (
    <FlexBox>
      <Title>당신의 선택</Title>
      {displays.map((d) => {
        return (
          <ImgBox key={d.name} onClick={clickHandler(d)}>
            <ActorImg src={d.src} alt={d.name} />
            <Name>{d.name}</Name>
            {aa === "8" ? (
              <div>8강</div>
            ) : aa === "4" ? (
              <div>4강</div>
            ) : aa === "2" ? (
              <div>결승</div>
            ) : (
              <div>최종</div>
            )}
            <Information>
              {displays.length === 1 ? (
                <div>
                  <p>{d.birthday}</p>
                  <p>{d.career}</p> <Link to="/">다시하기</Link>
                </div>
              ) : null}
            </Information>
          </ImgBox>
        );
      })}
    </FlexBox>
  );
};

export default Choice;
