import React from "react";
import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
import StartPage from "./pages/StartPage";
import ChoicePage from "./pages/ChoicePage";

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    box-sizing:border-box;
  }
`;

function App() {
  return (
    <>
    <GlobalStyle></GlobalStyle>
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/choice" element={<ChoicePage />} />
    </Routes> 
    </>
  );
}

export default App;
