# MMA PREDICTION TRACKER APPLICATION

![MMA Prediction Application Website Layout](public/MMA%20PREDICTION%20LAYOUT.jpeg)

Our wireframe layout for the website application
![MMA Prediction Application](public/MMA%20PREDICTION%20APPLICATION.png)

## Overview

MMA Prediction Tracker is a web application that allows users to track upcoming MMA fights, have a look at the Fighters profile and make predictions for each
matchup. The project is built using Node.js for the backend, React for the frontend, and Express for the server.

## Features

- **Upcoming Fights:** View a list of upcoming MMA fights with details of the location, date and time. The user can click MORE to get more upcoming fights on the website interface
- **Fighters Profile:** View a fighter's profile with details about their information, including: first name, last name, nickname, team, height, weight, birthdate, reach, stance, weight class, wins, ranking
- **Fight Predictions:** Make and view predictions for each fight with logic to calculate the proability of winning.

## Project Structure

```bash
/mma_prediction_tracker
    /frontend
        /src
            App.js
            index.js
            /components
                /pages 
                    HomePage.js
                    Fighters.js
                    Fights.js
                    Predictions.js
                /styles
                    HomePage.css
                    Fighters.css
        /public
            MMA PREDICTION APPLICATION.png
            MMA PREDICTION LAYOUT.jpeg
    /backend
        db.js
        server.js
    package.json
    pac
    README.md
```

## Getting Started

### Clone the Repository:

```bash
git clone git@github.com:vergilht/SODV2202_FinalProject.git
cd mma_prediction_tracker
```

### Install Dependencies:

```bash
cd backend
npm install init -y
npm install express
npm install cors
npm install mssql


cd frontend
npm install
```

### Run the Application:

```bash
cd backend
npm start

cd frontend
npm start
```

Open your browser and navigate to http://localhost:3000.

## Contributing

Feel free to contribute to the project! Follow these steps:

1. Fork the repository.
2. Create a new branch: git checkout -b feature/new-feature.
3. Make your changes and commit: git commit -am 'Add new feature'.
4. Push to the branch: git push origin feature/new-feature.
5. Submit a pull request.
