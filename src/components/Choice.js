import React, { useEffect, useState } from "react";
import items from "../lib/items";

const Choice = () => {
  const [actors, setActors] = useState([]);
  const [winners, setWinners] = useState([]);

  const clickHandler = (a) => {
    console.log(a);
  };

  useEffect(() => {
    items.sort(() => Math.random() - 0.5);
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
            <img src={a.src} alt={a.name} />;
          </div>
        );
      })}
    </div>
  );
};

export default Choice;
