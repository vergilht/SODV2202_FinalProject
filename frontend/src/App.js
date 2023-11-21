import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.js";
import FighterPage from "./components/Fighters.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/fighters/:fighterId" component={FighterPage} />
        {/* Add other routes if needed */}
      </Routes>
    </Router>
  );
};
export default App;
