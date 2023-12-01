import React, { useState } from "react";
import { Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.js";
import FighterPage from "./components/Fighters.js";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/fighters/:fighterId" component={FighterPage} />
      {/* Add other routes if needed */}
    </Routes>
  );
};
export default App;
