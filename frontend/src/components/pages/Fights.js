import React, { useState, useEffect } from "react";

function Fights() {
  const [upcomingFights, setUpcomingFights] = useState([]);
  const [offset, setOffset] = useState(0);
  /*   useEffect(() => {
    // Fetch upcoming fights data from the server
    fetch("/api/fights")
      .then((response) => response.json())
      .then((data) => setUpcomingFights(data))
      .catch((error) =>
        console.error("Error fetching upcoming fights:", error)
      );
  }, []); */

  const fetchFights = async () => {
    try {
      const response = await fetch(`/api/fights?offset=${offset}&limit=5`);
      const data = await response.json();
      setUpcomingFights((prevFights) => [...prevFights, ...data]);
      setOffset((preOffset) => preOffset + 5);
    } catch (error) {
      console.error("Error fetching fights:", error);
    }
  };

  useEffect(() => {
    fetchFights();
  });

  return (
    <div>
      <h2>Upcoming Fights</h2>
      <div className="fights-container">
        <ul>
          {upcomingFights.map((fight) => (
            <li key={fight.fight_id}>{fight.name}</li>
          ))}
        </ul>
        <div>
          <button onClick={fetchFights}>More</button>
        </div>
      </div>
    </div>
  );
}

export default Fights;
