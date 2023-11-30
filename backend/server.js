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
    }
    catch (error) {
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