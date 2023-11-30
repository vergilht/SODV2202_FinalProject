import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fighters from "./pages/Fighters.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Fighters />} />
    </Routes>
  );
}
export default App;
