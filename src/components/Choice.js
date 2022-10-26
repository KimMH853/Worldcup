import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  .title {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    padding: 0px 30px;
    text-transform: uppercase;
    padding-bottom: 10px;
  }
  .flex-1 {
    flex: 1;
    min-width: 500px;
    overflow: hidden;
    background-color: black;
    position: relative;
  }
  .middleAge-img {
    width: 100%;
    height: 100%;
    transition: 0.5s;
    cursor: pointer;
  }
  .middleAge-img:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
  .name {
    position: absolute;
    z-index: 3;
    color: #fff;
    bottom: 10%;
    font-size: 90px;
    left: 50%;
    transform: translateX(-50%);
  }
`;


const items = [
  {
    name: "김윤태",
    src: require("../image/김윤태.jpeg")
  },
  {
    name: "김희진",
    src: require("../image/김희진.jpg")
  },
  {
    name: "서태웅",
    src: require("../image/서태웅.jpeg")
  },
  {
    name: "신윤제",
    src: require("../image/신윤제.jpg")
  },
  {
    name: "신희윤",
    src: require("../image/신희윤.jpeg")
  },
  {
    name: "안현희",
    src: require("../image/안현희.jpeg")
  },
  {
    name: "오욱환",
    src: require("../image/오욱환.jpg")
  },
  {
    name: "이소망",
    src: require("../image/이소망.jpg")
  },
];

const Choice = () => {
  const [middleAges, setMiddleAges] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);
  useEffect(() => {
    items.sort(() => Math.random() - 0.5);
    setMiddleAges(items);
    setDisplays([items[0], items[1]]);
  }, []);

  const clickHandler = middleAge => () => {
    if (middleAges.length <= 2) {
      if (winners.length === 0) {
        setDisplays([middleAge]);
      } else {
        let updatedMiddleAge = [...winners, middleAge];
        setMiddleAges(updatedMiddleAge);
        setDisplays([updatedMiddleAge[0], updatedMiddleAge[1]]);
        setWinners([]);
      }
    } else if (middleAges.length > 2) {
      setWinners([...winners, middleAge]);
      setDisplays([middleAges[2], middleAges[3]]);
      setMiddleAges(middleAges.slice(2));
    }
  };
  return (
    <FlexBox>
      <h1 className="title">당신의 선택</h1>
      {displays.map(d => {
        return (
          <div className="flex-1" key={d.name} onClick={clickHandler(d)}>
            <img className="middleAge-img" src={d.src} alt={d.name} />
            <div className="name">{d.name}</div>
          </div>
        );
      })}
    </FlexBox>
  );
};

export default Choice;
