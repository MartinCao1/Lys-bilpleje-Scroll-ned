import React from "react";
import "../scss/partials/_processsektion.scss"; // Import SCSS-filen
import { FaWrench } from "react-icons/fa"; // Import FaWrench ikonet

function ProcessSektion() {
  return (
    <div className="process-section">
      <h2>
        PROCESSEN <span className="underline"></span>
      </h2>
      <div className="process-steps">
        <div className="step">
          <div className="icon-container">
            <span role="img" aria-label="booking">
              ✅
            </span>
          </div>
          <div className="step-number">1. BOOKING</div>
        </div>
        <div className="arrow">❯</div>
        <div className="step">
          <div className="icon-container">
            <span role="img" aria-label="validering">
              ✉️
            </span>
          </div>
          <div className="step-number">2. VALIDERING</div>
        </div>
        <div className="arrow">❯</div>
        <div className="step">
          <div className="icon-container">
            <FaWrench /> {/* Brug ikonet som en React-komponent */}
          </div>
          <div className="step-number">3. UDFØRELSE</div>
        </div>
        <div className="arrow">❯</div>
        <div className="step">
          <div className="icon-container">
            <span role="img" aria-label="betaling">
              💳
            </span>
          </div>
          <div className="step-number">4. BETALING</div>
        </div>
      </div>
    </div>
  );
}

export default ProcessSektion;
