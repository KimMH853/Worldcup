import React from "react";
import { Route, Routes } from 'react-router-dom';
import StartPage from "./pages/StartPage";
import ChoicePage from "./pages/ChoicePage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/choice" element={<ChoicePage />} />
    </Routes> 
    </>
  );
}

export default App;
