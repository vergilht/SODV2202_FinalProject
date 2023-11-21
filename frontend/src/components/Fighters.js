// src/components/FighterPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Fighters = () => {
    const { fighterId } = useParams();
    const [fighterData, setFighterData] = useState(null);

    useEffect(() => {
        // Fetch fighter data based on fighterId
        // Update the state with the fetched data
    }, [fighterId]);

    if (!fighterData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{fighterData.name}</h2>
            {/* Display fighter information, winning ratios, and fight history */}
        </div>
    );
};

export default Fighters;

