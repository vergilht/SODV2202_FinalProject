import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../styles/Fighters.css";
import { Link } from "react-router-dom";
import { Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function Fighters() {
  const [selectedFighter, setSelectedFighter] = useState(null);
  const [fighters, setFighters] = useState([]);

  useEffect(() => {
    // Fetch fighters data from API
    fetch("/api/fighters")
        .then((res) => res.json())
        .then((data) => setFighters(data))
        .catch((err) => console.error("Error fetching fighters:", err));
  }, []);

  const fetchFighterData = async (fighter_id) => {
    try {
      const response = await fetch(`/api/fighters/${fighter_id}`);
      const data = await response.json();
      setSelectedFighter(data);
    } catch (error) {
      console.error("Error fetching fighter:", error);
    }
  };

  return (
      <div>
        <div className="logo">
          <img src="/MMATRACKER.png" alt="MMA-Tracker-Application"/>
        </div>

        <div className="banner">
          <img src="/xuannguyen.jpg" alt="MMA-Tracker-Banner"/>
        </div>

        <div className="container flex-center">
          <nav role="navigation" className="nav-menu">
            <Link to="/" className="button">
              Home
            </Link>

            <Link to="/" className="button">
              Fights
            </Link>

            <Link to="/Fighters" className="button">
              Fighters
            </Link>

            <Link to="/" className="button">
              Predictions
            </Link>
          </nav>
        </div>

        <div className="section free-w-hero">
          <div className="container flex-center">
            <div className="hero-image-mask">
              <img
                  src="/alora.jpg"
                  sizes="95vw"
                  alt=""
                  className="hero-image"
              />
              <img
                  src="/Group117.svg"
                  alt=""
                  className="free-workout-shape"
              />
            </div>
            <div className="hero-line shop-line">
              <h1 className="no-margin">Fighters Profile</h1>
            </div>
          </div>
        </div>

        <section className="container">
          <div className="container-2">
            <h2 className="centered-heading">Fighters Profile</h2>
            <p className="centered-subheading">
              Select a fighter to view their profile
            </p>

            <Card className="text-center m-3">
              <Card.Header>Select a fighter</Card.Header>
              <Card.Body>
                <Form.Select onChange={(e) => fetchFighterData(e.target.value)}>
                  {fighters.map((fighter) => (
                  <option key={fighter.fighter_id} value={fighter.fighter_id}>
                    {fighter.fighter_fname} {fighter.fighter_lname}
                      </option>
                  ))}
                </Form.Select>

                {selectedFighter && (
                    <div className="container-2">
                      <Card.Title>
                        {selectedFighter.fighter_fname} {selectedFighter.fighter_lname}
                      </Card.Title>

                      <Card.Text>
                        <p>Nickname: {selectedFighter.fighter_nickname}</p>
                        <p>Weight class: {selectedFighter.weightclass}</p>
                        <p>Height: {selectedFighter.height}</p>
                        <p>Reach: {selectedFighter.reach}</p>
                        <p>Stance: {selectedFighter.stance}</p>
                        <p>Wins: {selectedFighter.wins}</p>
                        <p>Team: {selectedFighter.team_name}</p>
                        <p>Birth Date: {selectedFighter.birthdate}</p>
                        <p>Ranking: {selectedFighter.ranking}</p>
                      </Card.Text>
                    </div>
                )}
              </Card.Body>
            </Card>
          </div>
        </section>

        {/* Footer Section */}

        <div className="section footer-section">
          <div className="container footer-container">
            <div
                id="w-node-_1d6466da-e94d-115c-c97d-71e22c54b454-2c54b452"
                className="column"
            >
              <a className="footer-brand">
                <img
                    src="/MMATRACKER.png"
                    alt=""
                    className="brand-logo"
                />
              </a>
            </div>

            <div
                id="w-node-_1d6466da-e94d-115c-c97d-71e22c54b461-2c54b452"
                className="column"
            >
              <div className="label footer-label">Contact</div>
              <a
                  href="mailto:test@testemail.com"
                  className="footer-contact-link"
              >
                contact@MMATracker.OOP
              </a>
              <div className="_30px-spacer"></div>
              <div className="label footer-label">
                SODV2202 - Object Oriented Programming
              </div>
              <div className="text-block">Vergil Phan</div>
              <div className="text-block">Jiwon Jeon</div>
              <div className="text-block">Jhenyffer Cristo Marques</div>
              <div className="text-block">Gabriel Constantino Zacharias</div>
            </div>

            <div
                id="w-node-_1d6466da-e94d-115c-c97d-71e22c54b46f-2c54b452"
                className="column"
            >
              <div className="label footer-label">Explore</div>
              <Link to="/" className="footer-link">
                Home
              </Link>

              <Link to="/" className="footer-link">
                Fights
              </Link>

              <Link to="/Fighters" className="footer-link">
                Fighters
              </Link>

              <Link to="/" className="footer-link">
                Predictions
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Fighters;
