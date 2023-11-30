import React, { useState, useEffect } from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Fighters from './pages/Fighters';

function App () {
  return (
      <>
      <Routes>
        <Route path="/" element={<Fighters />} />
      </Routes>
      </>
  );
}
export default App;
