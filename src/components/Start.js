import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <h1> 이상형을 고르자</h1>
      <Link to="/choice">시작</Link>
    </div>
  );
};

export default Start;
