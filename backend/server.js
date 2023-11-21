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
app.get("/api/fights", (req, res) => {
  // Logic to get upcoming fights data
  const upcomingFights = [
    { fighter1: "Fighter A", fighter2: "Fighter B" },
    // Add more fights as needed
  ];
  res.json(upcomingFights);
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
