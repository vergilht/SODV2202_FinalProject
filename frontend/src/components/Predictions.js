import React, { useState, useEffect } from 'react';

function Predictions() {
    const [fightPredictions, setFightPredictions] = useState([]);

    useEffect(() => {
        // Fetch predictions data from the server
        fetch('/api/predictions')
            .then(response => response.json())
            .then(data => setFightPredictions(data))
            .catch(error => console.error('Error fetching predictions:', error));
    }, []);

    return (
        <div>
            <h2>Fight Predictions</h2>
            <ul>
                {fightPredictions.map((prediction, index) => (
                    <li key={index}>{prediction.fighter1} vs {prediction.fighter2}: {prediction.prediction}</li>
                ))}
            </ul>
        </div>
    );
}

export default Predictions;
