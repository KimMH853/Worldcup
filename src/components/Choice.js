import React, { useEffect, useState } from "react";
import items from "../lib/items";

const Choice = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    items.sort(() => Math.random() - 0.5);
    setActors([items[0], items[1]]);
  }, []);
  return (
    <div>
      <h1>골라요</h1>
      {actors.map((a) => {
        return <img key={a.name} src={a.src} alt={a.name} />;
      })}
    </div>
  );
};

export default Choice;
