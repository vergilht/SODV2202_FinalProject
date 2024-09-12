import express from "express";
import { GetFightsWithIndex } from "./db.js";
import { GetFighters, GetFighterById, calcFighterPrediction } from "./db.js";
import cors from "cors";
import bodyParser from "body-parser";

const { json, urlencoded } = bodyParser;
const app = express();
const port = 5100;

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
app.get("/api/fighters/:id", async (req, res) => {
  const fighterId = req.params.id;
  const response = await GetFighterById(fighterId);
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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Fight prediction
var f1 = 0;
var f2 = 0;

if (fighter1.Height > fighter2.Height)
{
    f1 = f1 + 1;
} else if (fighter1.Height < fighter2.Height){
    f2 = f2 + 1;
} else {
    f1 = f1 + 1;
    f2 = f2 + 1;
} 

if (fighter1.Weight > fighter2.Weight)
{
    f1 = f1 + 1;
} else if (fighter1.Weight < fighter2.Weight){
    f2 = f2 + 1;
} else {
    f1 = f1 + 1;
    f2 = f2 + 1;
} 

if (fighter1.Wins > fighter2.Wins)
{
    f1 = f1 + 1;
} else if (fighter1.Wins < fighter2.Wins) {
    f2 = f2 + 1;
} else {
    f1 = f1 + 1;
    f2 = f2 + 1;
} 

if (fighter1.Reach > fighter2.Reach)
{
    f1 = f1 + 1;
} else if (fighter1.Reach < fighter2.Reach) {
    f2 = f2 + 1;
} else {
    f1 = f1 + 1;
    f2 = f2 + 1;
} 

if (fighter1.Stance == "switch")
{
    var stance1 = 3;
} else if (fighter1.Stance == "southpaw") {
    stance1 = 2;
} else {
    stance1 = 1;
}

if (fighter2.Stance == "switch")
{
    var stance2 = 3;
} else if (fighter2.Stance == "southpaw") {
    stance2 = 2;
} else {
    stance2 = 1;
}

if (stance1 > stance2)
{
    f1 = f1 + 1;
} else if (stance1 < stance2) {
    f2 = f2 + 1;
} else {
    f1 = f1 + 1;
    f2 = f2 + 1;
} 

if (fighter1.Rank > fighter2.Rank)
{
    f1 = f1 + 1;
} else if (fighter1.Rank < fighter2.Rank) {
    f2 = f2 + 1;
} else {
    f1 = f1 + 1;
    f2 = f2 + 1;
} 

if (f1 > f2)
{
    prediction: `${fighter1.Name} wins`;
} else {
    prediction: `${fighter2.Name} wins`;
}
