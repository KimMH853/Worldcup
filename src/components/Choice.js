import React, { useEffect, useState } from "react";
import items from "../lib/items";

const Choice = () => {
  const [actors, setActors] = useState([]);
  useEffect(() => {
    setActors(items[0], items[1]);
  }, []);

  console.log(Array.isArray(items));

  return (
    <div>
      <h1>골라요</h1>
    </div>
  );
};

export default Choice;
