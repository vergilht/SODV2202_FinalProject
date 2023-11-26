const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5100;

const fighter = {
  fighterId: 1,
  firstName: "John",
  middleName: "",
  lastName: "Doe",
  nickname: "Johny Rock",
  teamId: "1",
  height: 200,
  weight: 200,
  birthdate: "1990-10-26",
  reach: 120,
  stance: 30,
  weightClassId: "3",
};

// Use middleware to parse JSON
app.use(bodyParser.json());

// Serve static files from the client directory
app.use(express.static("../client/build"));

app.get("/", (req, res) => {
  res.send("Server connected with React.js");
});

// API endpoints
app.get("/api/fights", (req, res) => {
  // Logic to get upcoming fights data
  const upcomingFights = [
    { fighter1: "Fighter A", fighter2: "Fighter B" },
    // Add more fights as needed
  ];
  res.json(upcomingFights);
});

//endpoint fighters
app.get("/api/fighters/:id", (req, res) => {
  const fighterId = req.params.id;
  const response = { ...fighter, fighterId };
  res.json(response);
});

app.get("/api/predictions", (req, res) => {
  const fighterId1 = req.query.fighterId1;
  const fighterId2 = req.query.fighterId2;

  const fighter1 = { ...fighter, wins: 100, loses: 2 };
  const fighter2 = {
    ...fighter,
    wins: 3,
    loses: 1,
    height: 210,
  };
  /* Logic to get predictions data
  const fighter1 = getFighterProfileById(fighterId1);
  const fighter2 = getFighterProfileById(fighterId2);
  function getFighterProfileById(id){
  SELECT * FROM fighter WHERE fighter_id = id
}
function getFighterResults(id){
  query to retrive winner and loser
}
*/
  if (fighter1 && fighter2) {
    const fighter1Stats = calculateFighterStats(fighter1);
    const fighter2Stats = calculateFighterStats(fighter2);

    if (fighter1Stats > fighter2Stats) {
      res.json(fighter1);
    } else if (fighter1Stats < fighter2Stats) {
      res.json(fighter2);
    } else {
      res.json(null);
    }
  } else {
    res.json({});
  }
});

function calculateFighterStats(fighterWL) {
  return (
    fighterWL.height * 5 +
    fighterWL.reach * 7 +
    fighterWL.weight / 10 +
    (fighterWL.wins / fighterWL.loses) * 10
  );
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
