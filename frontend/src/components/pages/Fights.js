import React, { useState, useEffect } from "react";

function Fights() {
  const [upcomingFights, setUpcomingFights] = useState([]);
  const [offset, setOffset] = useState(0);

  const fetchFights = async () => {
    try {
      const response = await fetch(`/api/fights?offset=${offset}`);
      const data = await response.json();
      setUpcomingFights((prevFights) => [...prevFights, ...data]);
      console.log(upcomingFights);
      setOffset((preOffset) => preOffset + 5);
    } catch (error) {
      console.error("Error fetching fights:", error);
    }
  };

  useEffect(() => {
    fetchFights();
  }, []);

  const GetFormatedDate = (date) => {
    const fightDateString = date;
    const fightDate = new Date(fightDateString);

    const options = { day: "numeric", month: "short", year: "numeric" };
    return fightDate.toLocaleDateString("en-GB", options);
  };

  return (
    <div>
      <h2>Upcoming Fights</h2>
      <div className="fights-container">
        <ul>
          {upcomingFights.map((fight) => (
            <li key={fight.fight_id}>
              {fight.name}
              <div className="fighter_container">
                <div className="fight_container_firstLine">
                  UFC Fight Night: {fight.fighter_lname[0]} VS{" "}
                  {fight.fighter_lname[1]}
                </div>
                <div className="fight_container_secondLine">
                  {fight.weightclass[0]} - Main Event
                </div>
                <div className="fight_container_thirdLine">
                  {GetFormatedDate(fight.date)} - {fight.location}
                </div>
                <div className="fight_container_fourthLine">
                  <span className="fighter1">
                    {fight.fighter_fname[0]} {fight.fighter_lname[0]}
                  </span>
                  <span> </span>
                  <span className="fighter2">
                    {fight.fighter_fname[1]} {fight.fighter_lname[1]}
                  </span>
                </div>
              </div>
            </li>
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
