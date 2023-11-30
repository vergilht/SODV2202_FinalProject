import { GetFights } from "./db.js";
import { GetFighters } from "./db.js";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const { json, urlencoded } = bodyParser;
const app = express();
const port = 5100;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server connected with React.js");
});

// API endpoints
app.get("/api/fights", async (req, res) => {
  try {
    const fights = await GetFights();
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

app.get("/api/predictions", (req, res) => {
  // Logic to get predictions data
  const fightPredictions = [
    {
      fighter1: "Fighter A",
      fighter2: "Fighter B",
      prediction: "Fighter A wins",
    },
    // Add more predictions as needed
  ];
  res.json(fightPredictions);
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
