import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../styles/Fighters.css";
import { Link } from "react-router-dom";

function Fighters() {
  const [fighters, setFighters] = useState([]);
  const [selectedFighter1, setSelectedFighter1] = useState(null);
  const [selectedFighter2, setSelectedFighter2] = useState(null);

  /*   useEffect(() => {
    // Fetch fighters data from backend API
    fetch("/api/fighters")
      .then((res) => res.json())
      .then((data) => setFighters(data))
      .catch((err) => console.error("Error fetching fighters:", err));
  }, []);
  const handleSelectFighter1 = (fighter, isFighter1) => {
    if (isFighter1) {
      setSelectedFighter1(fighter);
    } else {
      setSelectedFighter2(fighter);
    }
  };
 */
  return (
    <div>
      {/* <div style={{ opacity:0 }} className="page-wrap">
                <div data-collapse="medium" data-animation="over-right" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar">
                    <div className="container nav-container">
                        <img src="/public/MMA%20TRACKER.png" alt="" className="brand-logo" />
                        <div className="nav-right-wrap">
                            <nav role="navigation" className="nav-menu w-nav-menu">
                                <a href="/about" className="nav-link w-nav-link">Home</a>
                                <a href="/free-workouts" className="nav-link w-nav-link">About</a>
                                <a href="/shop" aria-current="page" className="nav-link w-nav-link">Fighters</a>
                                <a href="/shop" aria-current="page" className="nav-link w-nav-link">Predictions</a>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="section free-w-hero">
                    <div className="container flex-center">
                        <div className="hero-image-mask">
                            <img src="/public/alora-griffiths-TTrTW-pFxKw-unsplash.jpg" sizes="95vw" alt="" className="hero-image" />
                            <img src="/public/Group117.svg" alt="" className="free-workout-shape" />
                        </div>
                        <div className="hero-line shop-line">
                            <h1 className="no-margin">Fighters Profile</h1>
                        </div>
                    </div>
                </div>

                <section className="container">
                    <div className="container-2">
                        <h2 className="centered-heading">Comparison table section</h2>
                        <p className="centered-subheading">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.
                        </p>

                        <div className="comparison-table">
                            <div className="comparison-row-main">
                                // I want to have two columns here, one for fighter 1 and one for fighter 2 with dropdowns to select the fighters
                                <h3 className="comparison-title">
                                    {selectedFighter1 ? selectedFighter1.fighter1 : 'Fighter 1'}
                                </h3>
                                <h3 className="comparison-title">
                                    {selectedFighter2 ? selectedFighter2.fighter2 : 'Fighter 2'}
                                </h3>
                            </div>

                            <div className="comparison-row-main"></div>


                            <div>Fighter ID</div>
                            <div className="comparison-row">
                                <div className="comparison-fighter1">
                                    <select onChange={(e) => handleSelectFighter1(e.target.value, true)}>
                                        <option value="">Select Fighter</option>
                                        {fighters.map((fighter, index) => (
                                            <option key={fighter.fighter_id} value={index}>
                                                {fighter.fighter_id}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="comparison-fighter2">
                                    <select onChange={(e) => handleSelectFighter1(e.target.value, false)}>
                                        <option value="">Select Fighter</option>
                                        {fighters.map((fighter, index) => (
                                            <option key={fighter.fighter_id} value={index}>
                                                {fighter.fighter_id}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>


                            <div>Nickname</div>
                            <div className="comparison-row">
                                <div className="comparison-fighter1">
                                    <select onChange={(e) => handleSelectFighter1(e.target.value, true)}>
                                        <option value="">Select Fighter</option>
                                        {fighters.map((fighter, index) => (
                                            <option key={fighter.fighter_nickname} value={index}>
                                                {fighter.fighter_nickname}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="comparison-fighter2">
                                    <select onChange={(e) => handleSelectFighter1(e.target.value, false)}>
                                        <option value="">Select Fighter</option>
                                        {fighters.map((fighter, index) => (
                                            <option key={fighter.fighter_nickname} value={index}>
                                                {fighter.fighter_nickname}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>


                            <div>Team Name</div>
                            <div className="comparison-row">
                                <div className="comparison-fighter1">
                                    <select onChange={(e) => handleSelectFighter1(e.target.value, true)}>
                                        <option value="">Select Fighter</option>
                                        {fighters.map((fighter, index) => (
                                            <option key={fighter.fighter_team} value={index}>
                                                {fighter.fighter_team}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="comparison-fighter2">
                                    <select onChange={(e) => handleSelectFighter1(e.target.value, false)}>
                                        <option value="">Select Fighter</option>
                                        {fighters.map((fighter, index) => (
                                            <option key={fighter.fighter_team} value={index}>
                                                {fighter.fighter_team}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>


                            <div>Height</div>
                            <div className="comparison-row">
                                <div className="comparison-fighter1">
                                    <select onChange={(e) => handleSelectFighter1(e.target.value, true)}>
                                        <option value="">Select Fighter</option>
                                        {fighters.map((fighter, index) => (
                                            <option key={fighter.height} value={index}>
                                                {fighter.height}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="comparison-fighter2">
                                    <select onChange={(e) => handleSelectFighter1(e.target.value, false)}>
                                        <option value="">Select Fighter</option>
                                        {fighters.map((fighter, index) => (
                                            <option key={fighter.height} value={index}>
                                                {fighter.height}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>


                            <div>Weight</div>
                            <div className="comparison-row">
                                <div className="comparison-fighter1">
                                    <select onChange={(e) => handleSelectFighter1(e.target.value, true)}>
                                        <option value="">Select Fighter</option>
                                        {fighters.map((fighter, index) => (
                                            <option key={fighter.weight} value={index}>
                                                {fighter.weight}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="comparison-fighter2">
                                    <select onChange={(e) => handleSelectFighter1(e.target.value, false)}>
                                        <option value="">Select Fighter</option>
                                        {fighters.map((fighter, index) => (
                                            <option key={fighter.weight} value={index}>
                                                {fighter.weight}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>


                            <div>Birth Date</div>
                            <div className="comparison-row">
                                <div className="comparison-fighter1">
                                    <select onChange={(e) => handleSelectFighter1(e.target.value, true)}>
                                        <option value="">Select Fighter</option>
                                        {fighters.map((fighter, index) => (
                                            <option key={fighter.birthdate} value={index}>
                                                {fighter.birthdate}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="comparison-fighter2">
                                    <select onChange={(e) => handleSelectFighter1(e.target.value, false)}>
                                        <option value="">Select Fighter</option>
                                        {fighters.map((fighter, index) => (
                                            <option key={fighter.birthdate} value={index}>
                                                {fighter.birthdate}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>


                            <div>Reach</div>
                            <div className="comparison-row">
                                <div className="comparison-fighter1">
                                    <select onChange={(e) => handleSelectFighter1(e.target.value, true)}>
                                        <option value="">Select Fighter</option>
                                        {fighters.map((fighter, index) => (
                                            <option key={fighter.reach} value={index}>
                                                {fighter.reach}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="comparison-fighter2">
                                    <select onChange={(e) => handleSelectFighter1(e.target.value, false)}>
                                        <option value="">Select Fighter</option>
                                        {fighters.map((fighter, index) => (
                                            <option key={fighter.reach} value={index}>
                                                {fighter.reach}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>


                            <div>Stance</div>
                            <div className="comparison-row">
                                <div className="comparison-fighter1">
                                    <select onChange={(e) => handleSelectFighter1(e.target.value, true)}>
                                        <option value="">Select Fighter</option>
                                        {fighters.map((fighter, index) => (
                                            <option key={fighter.stance} value={index}>
                                                {fighter.stance}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="comparison-fighter2">
                                    <select onChange={(e) => handleSelectFighter1(e.target.value, false)}>
                                        <option value="">Select Fighter</option>
                                        {fighters.map((fighter, index) => (
                                            <option key={fighter.stance} value={index}>
                                                {fighter.stance}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>


                            <div>Weight Class ID</div>
                            <div className="comparison-row">
                                <div className="comparison-fighter1">
                                    <select onChange={(e) => handleSelectFighter1(e.target.value, true)}>
                                        <option value="">Select Fighter</option>
                                        {fighters.map((fighter, index) => (
                                            <option key={fighter.weightclass_id} value={index}>
                                                {fighter.weightclass_id}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="comparison-fighter2">
                                    <select onChange={(e) => handleSelectFighter1(e.target.value, false)}>
                                        <option value="">Select Fighter</option>
                                        {fighters.map((fighter, index) => (
                                            <option key={fighter.weightclass_id} value={index}>
                                                {fighter.weightclass_id}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="section newsletter-section">
                    <img src="/public/anastase-maragos-7kEpUPB8vNk-unsplash.jpg" sizes="100vw" alt="" className="section-bg-image top-align" />
                </div>

                <div className="section footer-section">
                    <div className="container footer-container">
                        <div id="w-node-_1d6466da-e94d-115c-c97d-71e22c54b454-2c54b452" className="column">
                            <a href="#" className="footer-brand w-nav-brand">
                                <img src="/public/MMA%20TRACKER.png" alt="" className="brand-logo" />
                            </a>
                        </div>

                        <div id="w-node-_1d6466da-e94d-115c-c97d-71e22c54b461-2c54b452" className="column">
                            <div className="label footer-label">Contact</div>
                            <a href="mailto:test@testemail.com" className="footer-contact-link">contact@MMATracker.OOP</a>
                            <div className="_30px-spacer"></div>
                            <div className="label footer-label">SODV2202 - Object Oriented Programming</div>
                            <div className="text-block">Vergil Phan</div>
                            <div className="text-block">Jiwon Jeon</div>
                            <div className="text-block">Jhenyffer Cristo Marques</div>
                            <div className="text-block">Gabriel Constantino Zacharias </div>
                            <div className="text-block">Nathaniel Gatus</div>
                        </div>

                        <div id="w-node-_1d6466da-e94d-115c-c97d-71e22c54b46f-2c54b452" className="column">
                            <div className="label footer-label">Explore</div>
                            <a href="/shop" aria-current="page" className="footer-link">Home</a>
                            <a href="/free-workouts" className="footer-link">About</a>
                            <a href="/blog" className="footer-link"></a>
                            <a href="/about" className="footer-link">Fights</a>
                            <a href="/contact" className="footer-link">Fighters Profile</a>
                            <a href="/brand-guidelines/style-guide" className="footer-link">Prediction</a>
                        </div>
                    </div>
                </div>

                <style>
                    {`
                    body {
                    -webkit-font-smoothing: antialiasing;
                    -moz-osx-font-smoothing: grayscale;
                    }
                    `}
                </style>
            </div> */}
    </div>
  );
}

export default Fighters;
