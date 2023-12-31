import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Fights() {
  const [upcomingFights, setUpcomingFights] = useState([]);
  const [offset, setOffset] = useState(0);

  const fetchFights = async () => {
    try {
      const response = await fetch(`/api/fights?offset=${offset}`);
      const data = await response.json();
      setUpcomingFights((prevFights) => [...prevFights, ...data]);
      console.log(upcomingFights);
      setOffset((preOffset) => preOffset + 3);
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
      <h4>Upcoming Fights</h4>
      <div>
        {upcomingFights.map((fight) => (
          <Card className="text-center m-1" key={fight.fight_id}>
            <Card.Header>UFC Fight Night</Card.Header>
            <Card.Title className="p-2">
              {fight.fighter_lname[0]} VS {fight.fighter_lname[1]}
            </Card.Title>
            <Card.Text>
              <div>{fight.weightclass[0]} - Main Event</div>
              <div>
                {GetFormatedDate(fight.date)} - {fight.location}
              </div>
              <div className="text-center m-1">
                {fight.fighter_fname[0]} {fight.fighter_lname[0]}
                <img
                  style={{ width: "10%", margin: "1%" }}
                  src={`/FighterImg/${fight.fighter_fname[0]}.png`}
                ></img>
                <img
                  style={{ width: "10%", margin: "1%" }}
                  src={`/FighterImg/${fight.fighter_fname[1]}.png`}
                ></img>
                {fight.fighter_fname[1]} {fight.fighter_lname[1]}
              </div>
            </Card.Text>
          </Card>
        ))}
      </div>
      <div className="text-center">
        <Button onClick={fetchFights}>More</Button>
      </div>
    </div>
  );
}

export default Fights;
