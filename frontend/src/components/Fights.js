import React, { useState, useEffect } from "react";

function Fights() {
  const [upcomingFights, setUpcomingFights] = useState([]);

  useEffect(() => {
    // Fetch upcoming fights data from the server
    fetch("/api/fights")
      .then((response) => response.json())
      .then((data) => setUpcomingFights(data))
      .catch((error) =>
        console.error("Error fetching upcoming fights:", error)
      );
  }, []);

  return (
    <div>
      <h2>Upcoming Fights</h2>
      {/* <ul>
                {upcomingFights.map((fight, index) => (
                    <li key={index}>{fight.fighter1} vs {fight.fighter2}</li>
                ))}
            </ul> */}
    </div>
  );
}

export default Fights;
