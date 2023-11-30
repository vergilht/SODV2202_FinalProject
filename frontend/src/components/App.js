import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Fighters from './pages/Fighters.js';

function App () {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Fighters />} />
      </Routes>
      </Router>
  );
}
export default App;
