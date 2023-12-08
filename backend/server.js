import express from "express";
import { GetFightsWithIndex } from "./db.js";
import { GetFighters, GetFighterById } from "./db.js";
import cors from "cors";
import bodyParser from "body-parser";

const { json, urlencoded } = bodyParser;
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

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server connected with React.js");
});

// API endpoints
/* app.get("/api/fights", async (req, res) => {
  try {
    const fights = await GetFights();
    res.status(200).json(fights);
  } catch (error) {
    console.error("Error during getting fight events:", error);
    res.status(500).json({ error: "Error getting fights events" });
  }
});
 */
app.get("/api/fights/", async (req, res) => {
  try {
    const { offset } = req.query; //offset is the last fight_id
    const fights = await GetFightsWithIndex(offset);
    res.status(200).json(fights);
  } catch (error) {
    console.error("Error during getting fight events:", error);
    res.status(500).json({ error: "Error getting fights events" });
  }
});

app.get("/api/fighters", async (req, res) => {
  try {
    const fighters = await GetFighters();
    res.status(200).json(fighters);
  } catch (error) {
    console.error("Error during getting fighters profile:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//endpoint fighters
app.get("/api/fighters/:id", (req, res) => {
  const fighterId = req.params.id;
  const response = { ...fighter, fighterId };
  res.json(response);
});

app.get("/api/predictions", async (req, res) => {
  const fighterId1 = req.query.fighterId1;
  const fighterId2 = req.query.fighterId2;

  const fighter1Response = await GetFighterById(fighterId1);
  const fighter2Response = await GetFighterById(fighterId2);

  const fighter1 = fighter1Response[0];
  const fighter2 = fighter2Response[0];

  if (fighter1 && fighter2) {
    const prediction = calcFighterPrediction(fighter1, fighter2);
    res.json({
      fighter1: { ...fighter1, prediction: prediction.fighter1 },
      fighter2: { ...fighter2, prediction: prediction.fighter2 },
    });
  } else {
    res.status(500).json({ message: "Fighter not found" });
  }
});

function calcFighterPrediction(fighter1, fighter2) {
  let f1 = 0;
  let f2 = 0;

  if (fighter1.height > fighter2.height) {
    f1 = f1 + 1;
  } else if (fighter1.height < fighter2.height) {
    f2 = f2 + 1;
  } else {
    f1 = f1 + 1;
    f2 = f2 + 1;
  }

  if (fighter1.weight > fighter2.weight) {
    f1 = f1 + 1;
  } else if (fighter1.weight < fighter2.weight) {
    f2 = f2 + 1;
  } else {
    f1 = f1 + 1;
    f2 = f2 + 1;
  }

  if (fighter1.wins > fighter2.wins) {
    f1 = f1 + 1;
  } else if (fighter1.wins < fighter2.wins) {
    f2 = f2 + 1;
  } else {
    f1 = f1 + 1;
    f2 = f2 + 1;
  }

  if (fighter1.reach > fighter2.reach) {
    f1 = f1 + 1;
  } else if (fighter1.reach < fighter2.reach) {
    f2 = f2 + 1;
  } else {
    f1 = f1 + 1;
    f2 = f2 + 1;
  }

  if (fighter1.stance == "Switch") {
    var stance1 = 3;
  } else if (fighter1.stance == "Southpaw") {
    stance1 = 2;
  } else {
    stance1 = 1;
  }

  if (fighter2.stance == "Switch") {
    var stance2 = 3;
  } else if (fighter2.stance == "Southpaw") {
    stance2 = 2;
  } else {
    stance2 = 1;
  }

  if (stance1 > stance2) {
    f1 = f1 + 1;
  } else if (stance1 < stance2) {
    f2 = f2 + 1;
  } else {
    f1 = f1 + 1;
    f2 = f2 + 1;
  }

  if (fighter1.ranking < fighter2.ranking) {
    f1 = f1 + 2;
  } else if (fighter1.raking > fighter2.raking) {
    f2 = f2 + 2;
  } else {
    f1 = f1 + 2;
    f2 = f2 + 2;
  }
  const probFighter1 = (f1 * 100) / (f1 + f2);
  const probFighter2 = (f2 * 100) / (f1 + f2);

  return { fighter1: probFighter1, fighter2: probFighter2 };
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
