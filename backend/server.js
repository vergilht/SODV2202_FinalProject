import { GetFights } from "./db.js";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5100;

// Use middleware to parse JSON
app.use(bodyParser.json());

// Serve static files from the client directory
app.use(express.static("../client/build"));

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
