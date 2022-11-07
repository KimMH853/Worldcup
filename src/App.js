import React from "react";
import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import ChoicePage from "./pages/ChoicePage";
import ResultPage from "./pages/ResultPage";
import { createGlobalStyle } from "styled-components";
import bg from "./image/bg.jpg";
const GlobalStyle = createGlobalStyle`
  body {
    /* background-image: url(${bg}); */
    background-color: #1e252d;
    
  }

  @font-face {
    font-family: 'Cafe24Ssurround';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'YdestreetB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/YdestreetB.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'KOFIHDrLEEJWTTF-B';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-2@1.0/KOFIHDrLEEJWTTF-B.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
`;

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/choice" element={<ChoicePage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </>
  );
}

export default App;
