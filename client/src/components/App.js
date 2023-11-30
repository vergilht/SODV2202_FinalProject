import React, { useState, useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Fighters from './Fighters';

const App = () => {
  return (
      <Routes>
        <Route exact path="/fighters" component={Fighters} />
      </Routes>
  );
};
export default App;
