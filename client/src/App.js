import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Fighters from './components/Fighters';
import HomePage from './components/HomePage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/fighters/:fighterId" component={FighterPage} />
                {/* Add other routes if needed */}
            </Switch>
        </Router>
    );
};
export default App;
