import React from "react";
import Fights from "./pages/Fights.js";
//import Predictions from "./Predictions.js";
import Fighters from "./pages/Fighters.js";
//import "../styles/style.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>MMA Prediction Tracker</h1>
      {/* Fights Section */}
      <Fights />
      {/* Fighters Section */}
      {/*       <h2>Fighters</h2>
      <div className="fighters-container">
        <div className="fighters-column">
          {fighters.slice(0, 3).map((fighter) => (
            <div key={fighter.id} className="fighter-icon">
              <Link to={`/fighters/${fighter.id}`}>
                <img
                  src={`path_to_icon/${fighter.id}.png`}
                  alt={fighter.name}
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="fighters-column">
          {fighters.slice(3, 6).map((fighter) => (
            <div key={fighter.id} className="fighter-icon">
              <Link to={`/fighters/${fighter.id}`}>
                <img
                  src={`path_to_icon/${fighter.id}.png`}
                  alt={fighter.name}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
 */}
      {/* Predictions Section */}

      {/* <Predictions /> */}
      {/* Footer Section */}
    </div>
  );
};

export default HomePage;
