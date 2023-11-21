import React from 'react';
import Fights from './Fights';
import Predictions from './Predictions';
import Fighters from './Fighters';
import '../styles/style.css';
import { Link } from 'react-router-dom';


const HomePage = () => {
    const fighters = [
        { id: 1, name: 'Fighter A' },
        { id: 2, name: 'Fighter B' },
        { id: 3, name: 'Fighter C' },
        { id: 4, name: 'Fighter D' },
        // Add more fighters as needed
    ];

    return (
        <div>
            <h1>MMA Prediction Tracker</h1>

            {/* Fights Section */}
            <Fights />

            {/* Fighters Section */}
            <h2>Fighters</h2>
            <div className="fighters-container">
                <div className="fighters-column">
                    {fighters.slice(0, 3).map((fighter) => (
                        <div key={fighter.id} className="fighter-icon">
                            <Link to={`/fighters/${fighter.id}`}>
                                <img src={`path_to_icon/${fighter.id}.png`} alt={fighter.name} />
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="fighters-column">
                    {fighters.slice(3, 6).map((fighter) => (
                        <div key={fighter.id} className="fighter-icon">
                            <Link to={`/fighters/${fighter.id}`}>
                                <img src={`path_to_icon/${fighter.id}.png`} alt={fighter.name} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Predictions Section */}
            <Predictions />

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default HomePage;
