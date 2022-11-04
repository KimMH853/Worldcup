import React, { useEffect, useState } from "react";
import items from "../lib/items";

const Choice = () => {
  const [arr, setArr] = useState([]);
  const [actors, setActors] = useState([]);
  const [winners, setWinners] = useState([]);

  const clickHandler = (actor) => {
    if (arr.length > 2) {
      console.log(actor);
      setWinners([...winners, actor]);
      console.log(winners);
      setActors([arr[2], arr[3]]);
      setArr(arr.slice(2));
    } else {
      return null;
    }
  };

  useEffect(() => {
    items.sort(() => Math.random() - 0.5);
    setArr(items);
    setActors([items[0], items[1]]);
  }, []);
  return (
    <div>
      <h1>골라요</h1>
      {actors.map((a) => {
        return (
          <div
            key={a.name}
            onClick={() => {
              clickHandler(a);
            }}
          >
            <img src={a.src} alt={a.name} />
          </div>
        );
      })}
    </div>
  );
};

export default Choice;
