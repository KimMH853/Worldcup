import React, { useState, useEffect } from "react";
import { FlexBox } from "./style";

const items = [
  {
    name: "김무성",
    src: require("../image/김무성.jpg")
  },
  {
    name: "나경원",
    src: require("../image/나경원.jpg")
  },
  {
    name: "박용진",
    src: require("../image/박용진.jpg")
  },
  {
    name: "추미애",
    src: require("../image/추미애.jpg")
  }
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
      <h1 className="title">당신의 중년을 선택하세요</h1>
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
