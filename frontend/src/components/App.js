import React, { useState, useEffect } from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Fighters from './pages/Fighters';

const App = () => {
  return (
      <Routes>
        <Route exact path="/fighters" component={Fighters} />
      </Routes>
  );
};
export default App;
