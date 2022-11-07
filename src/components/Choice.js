import React, { useEffect, useState } from "react";
import items from "../lib/items";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h1`
  position: absolute;
  left: 50%;
  top: 0%;
  transform: translateX(-50%);
  color: white;
  font-size: 3rem;
  font-family: "KOFIHDrLEEJWTTF-B";
`;

const ImageBox = styled.div`
  flex: 1;
`;

const ActorImage = styled.img`
  width: 80%;
  margin: auto;
  display: block;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;

const ActorName = styled.h2`
  color: white;
  text-align: center;
  font-family: "KOFIHDrLEEJWTTF-B";
  font-size: 2rem;
`;

const InformationBox = styled.div``;

const Information = styled.div`
  position: absolute;
  left: 70%;
  top: 40%;
  font-family: "KOFIHDrLEEJWTTF-B";
  font-size: 2rem;
  color: white;
`;

const FinalImage = styled.img`
  width: 50%;
  position: absolute;
  left: 10%;
  top: 20%;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;

const Reset = styled(Link)`
  text-decoration: none;
  position: absolute;
  left: 80%;
  top: 90%;
  font-family: "KOFIHDrLEEJWTTF-B";
  font-size: 2rem;
  color: white;
`;
const Choice = () => {
  const [arr, setArr] = useState([]);
  const [actors, setActors] = useState([]);
  const [winners, setWinners] = useState([]);
  const [tournament, setTournament] = useState(items.length);

  const clickHandler = (actor) => {
    if (arr.length > 2) {
      setWinners([...winners, actor]);
      setActors([arr[2], arr[3]]);
      setArr(arr.slice(2));
    } else if (arr.length <= 2) {
      if (winners.length === 0) {
        setActors([actor]);
        setTournament(1);
      } else {
        let updateArray = [...winners, actor];
        setArr(updateArray);
        setActors([updateArray[0], updateArray[1]]);
        setWinners([]);
        setTournament(updateArray.length);
      }
    }
  };

  useEffect(() => {
    items.sort(() => Math.random() - 0.5);
    setArr(items);
    setActors([items[0], items[1]]);
  }, []);
  return (
    <FlexBox>
      {tournament === 8 ? (
        <Title>8강</Title>
      ) : tournament === 4 ? (
        <Title>4강</Title>
      ) : tournament === 2 ? (
        <Title>결승</Title>
      ) : (
        <Title>우승</Title>
      )}
      {actors.map((a) => {
        return (
          <>
            {actors.length === 1 ? (
              <InformationBox>
                <FinalImage src={a.src} alt={a.name} />
                <Information>
                  <p>{a.name}</p>
                  <p>{a.birthday}</p>
                  <p>{a.career}</p>
                </Information>

                <Reset to="/">다시하기</Reset>
              </InformationBox>
            ) : (
              <ImageBox
                key={a.id}
                onClick={() => {
                  clickHandler(a);
                }}
              >
                <ActorImage src={a.src} alt={a.name} />
                <ActorName>{a.name}</ActorName>
              </ImageBox>
            )}
          </>
        );
      })}
    </FlexBox>
  );
};

export default Choice;
