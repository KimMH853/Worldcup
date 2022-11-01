import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import items from "../lib/items";

const FlexBox = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  height: 100vh; */
`;

const Title = styled.h1`
  /* position: absolute;
  z-index: 2;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  padding: 0px 30px;
  padding-bottom: 10px; */
`;

const ActorImg = styled.img`
  /* position: absolute;
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
  } */
`;

const ImgBox = styled.div`
  /* flex: 1;
  min-width: 500px;
  overflow: hidden;
  position: relative; */
`;

const Name = styled.div`
  /* position: absolute;
  z-index: auto;
  color: black;
  bottom: 10%;
  font-size: 2rem;
  left: 50%;
  transform: translateX(-50%); */
`;
const Information = styled.div`
  /* //flex: 2;
  //z-index: 3;
  color: black;
  bottom: 10%;
  font-size: 2rem;
  //text-align:  right;
  //justify-content: center;
  display: flex;
  align-content: space-between;
  justify-content: baseline a {
    text-decoration: none;
    font-size: 2rem;
    color: black;
  } */
`;

const Choice = () => {
  const [actors, setActors] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);
  useEffect(() => {
    items.sort(() => Math.random() - 0.5);
    setActors(items);
    setDisplays([items[0], items[1]]);
  }, []);
  var count = 0;
  const clickCount = () => {
    count++;
  };
  const clickHandler = (actor) => () => {
    console.log(count);
    if (actors.length <= 2) {
      if (winners.length === 0) {
        setDisplays([actor]);
      } else {
        let updateActor = [...winners, actor];
        setActors(updateActor);
        setDisplays([updateActor[0], updateActor[1]]);
        setWinners([]);
      }
    } else if (actors.length > 2) {
      setWinners([...winners, actor]);
      setDisplays([actors[2], actors[3]]);
      setActors(actors.slice(2));
    }
  };
  console.log(count);
  return (
    <FlexBox>
      <Title>당신의 선택 {displays.length > 4 ? "4강" : null} </Title>
      {displays.map((d) => {
        return (
          <ImgBox key={d.name} onClick={clickHandler(d)}>
            <ActorImg src={d.src} alt={d.name} onclick={clickCount()} />
            <Name>{d.name}</Name>
            <Information>
              {displays.length === 1 ? (
                <div>
                  <p>{d.birthday}</p>
                  <p>{d.career}</p>
                </div>
              ) : null}
            </Information>
            <div>
              <Link to="/">다시하기</Link>
            </div>
          </ImgBox>
        );
      })}
    </FlexBox>
  );
};

export default Choice;
