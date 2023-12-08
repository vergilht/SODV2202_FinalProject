import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import Fighters from "./pages/Fighters.js";

function App() {
  return (
      <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Fighters" element={<Fighters />} />
    </Routes>
      </>
  );
}
export default App;
