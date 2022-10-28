import React from "react";
import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import ChoicePage from "./pages/ChoicePage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/choice" element={<ChoicePage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </>
  );
}

export default App;
