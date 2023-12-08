import React, { useRef } from "react";
import Fights from "./Fights.js";
import Predictions from "./Predictions.js";
import "../styles/HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  const fightsSectionRef = useRef(null);
  const predictionsSectionRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <div className="logo">
        <img src="/MMA%20TRACKER.png" alt="MMA-Tracker-Application" />
      </div>

      <div className="banner">
        <img
          src="/xuan-nguyen-jAke8NofTtE-unsplash.jpg"
          alt="MMA-Tracker-Banner"
        />
      </div>

      <div className="container flex-center">
        <nav role="navigation" className="nav-menu">
          <button to="/" className="button">
            Home
          </button>

          <button
            to="/"
            onClick={() => scrollToSection(fightsSectionRef)}
            className="button"
          >
            Fights
          </button>

          <Link to="/Fighters" className="button">
            Fighters
          </Link>

          <button
            to="/"
            onClick={() => scrollToSection(predictionsSectionRef)}
            className="button"
          >
            Predictions
          </button>
        </nav>
      </div>

      <div className="section free-w-hero">
        <div className="container flex-center">
          <div className="hero-image-mask">
            <img
              src="/alora-griffiths-TTrTW-pFxKw-unsplash.jpg"
              sizes="95vw"
              alt=""
              className="hero-image"
            />
            <img src="/Group117.svg" alt="" className="free-workout-shape" />
          </div>
          <div className="hero-line shop-line">
            <h1 className="no-margin">MMA Tracker Application</h1>
          </div>
        </div>
      </div>

      {/* Fights Section Rendering */}
      <div ref={fightsSectionRef}>
        <Fights />
      </div>

      {/* Fighters Section */}

      <div className="gridFighter">
        <div className="fighter-icons">
          <Link to="/Fighters">
            <img src="/Armen%20Petrosyan.png" alt="Fighter1" />
          </Link>
          <Link to="/Fighters">
            <img src="/Caio%20Borralho.png" alt="Fighter2" />
          </Link>
          <Link to="/Fighters">
            <img src="/Daniel%20Marcos.png" alt="Fighter3" />
          </Link>
        </div>
        <div className="fighter-icons">
          <Link to="/Fighters">
            <img src="/Darren%20Till.png" alt="Fighter4" />
          </Link>
          <Link to="/Fighters">
            <img src="/Derrick%20Lewis.png" alt="Fighter5" />
          </Link>
          <Link to="/Fighters">
            <img src="/Elizeu%20Zaleski.png" alt="Fighter6" />
          </Link>
        </div>
        <div className="fighter-icons">
          <Link to="/Fighters">
            <img src="/Gabriel%20Bonfim.png" alt="Fighter7" />
          </Link>
          <Link to="/Fighters">
            <img src="/Ismael%20Bonfim.png" alt="Fighter8" />
          </Link>
          <Link to="/Fighters">
            <img src="/Jailton%20Almeda.png" alt="Fighter9" />
          </Link>
        </div>
        <div className="fighter-icons">
          <Link to="./Fighters">
            <img src="/Nicolas%20Dalby.png" alt="Fighter10" />
          </Link>
          <Link to="./Fighters">
            <img src="/Rinat%20Fakhretdinov.png" alt="Fighter11" />
          </Link>
          <Link to="./Fighters">
            <img src="/Rodolfo%20Vieira.png" alt="Fighter12" />
          </Link>
        </div>
      </div>

      {/* Predictions Section */}
      <div ref={predictionsSectionRef}>
        <Predictions />
      </div>

      {/* Footer Section */}

      <div className="section footer-section">
        <div className="container footer-container">
          <div
            id="w-node-_1d6466da-e94d-115c-c97d-71e22c54b454-2c54b452"
            className="column"
          >
            <a href="#" className="footer-brand">
              <img src="/MMA%20TRACKER.png" alt="" className="brand-logo" />
            </a>
          </div>

          <div
            id="w-node-_1d6466da-e94d-115c-c97d-71e22c54b461-2c54b452"
            className="column"
          >
            <div className="label footer-label">Contact</div>
            <a href="mailto:test@testemail.com" className="footer-contact-link">
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
};

export default HomePage;
