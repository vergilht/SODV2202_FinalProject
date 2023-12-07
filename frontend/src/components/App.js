import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.js";
//import Fighters from "./pages/Fighters.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/fighters/:fighterId" component={FighterPage} /> */}
    </Routes>
  );
}
export default App;
