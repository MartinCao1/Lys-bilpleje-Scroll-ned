import React from "react";
import "../scss/partials/_priser.scss";
import { useNavigate } from "react-router-dom";

function Priser() {
  const navigate = useNavigate();

  const handleVaeglPakkeClick = (pakkeNavn) => {
    navigate(`/tilvalg/${pakkeNavn}`);
  };

  const handleSePoleringPrisClick = () => {
    navigate("/poleringpriser"); // Navigerer til siden med poleringspriser
  };

  return (
    <div className="prispakker-side">
      <div className="prispakker-container">
        <div className="prispakke-boks bronze">
          <h3>Bronze Pakke</h3>
          <p className="beskrivelse">
            Grundlæggende rengøring af bilen. Perfekt til vedligeholdelse.
          </p>
          <ul className="inkluderet">
            <li>Udvendig vask</li>
            <li>Støvsugning af kabine</li>
            <li>Rens af måtter</li>
          </ul>
          <p className="pris">
            Fra: <span>1.295</span>,-
          </p>
          <button onClick={() => handleVaeglPakkeClick("bronze")}>
            Vælg pakke
          </button>
        </div>

        <div className="prispakke-boks guld">
          <h3>Guld Pakke</h3>
          <p className="beskrivelse">
            Udvidet rengøring og pleje. Inkluderer polering for øget glans.
          </p>
          <ul className="inkluderet">
            <li>Udvendig vask</li>
            <li>Støvsugning af kabine</li>
            <li>Rens af måtter og sæder</li>
            <li>Let polering af lak</li>
          </ul>
          <p className="pris">
            Fra: <span>2.495</span>,-
          </p>
          <button onClick={() => handleVaeglPakkeClick("guld")}>
            Vælg pakke
          </button>
        </div>

        <div className="prispakke-boks diamant">
          <h3>Diamant Pakke</h3>
          <p className="beskrivelse">
            Komplet luksusbehandling. Inkluderer dybderens, polering og
            lakforsegling.
          </p>
          <ul className="inkluderet">
            <li>Udvendig vask</li>
            <li>Dybderens af kabine</li>
            <li>Rens og pleje af læder/stof</li>
            <li>Avanceret polering af lak</li>
            <li>Lakforsegling for langvarig beskyttelse</li>
          </ul>
          <p className="pris">
            Fra: <span>3.995</span>,-
          </p>
          <button onClick={() => handleVaeglPakkeClick("diamant")}>
            Vælg pakke
          </button>
        </div>
      </div>

      <div className="polering-display">
        <div className="polering-intro">
          <img
            src="/bilag/poleret-bil.jpg"
            alt="Poleret bil"
            className="bil-billede"
          />
        </div>
        <div className="polering-priser-side">
          <h2>Polering</h2>
          <p className="polering-intro-text">
            Professionel Polering. Giv din bil en fantastisk glans og
            beskyttelse.
          </p>
          <div className="polering-pris-boks">
            <h3>1-Trins Polering</h3>
            <p className="pris">
              Fra: <span>1.495</span>,- DKK
            </p>
          </div>
          <div className="polering-pris-boks">
            <h3>2-3 Trins Polering</h3>
            <p className="pris">
              Fra: <span>2.995</span>,- DKK
            </p>
          </div>
          <div className="polering-pris-boks">
            <h3>Fuld Polering Inkl. Coating</h3>
            <p className="pris">
              Fra: <span>6.995</span>,- DKK
            </p>
          </div>
          <div className="se-polering-pris-knap-container">
            <button
              onClick={handleSePoleringPrisClick}
              className="se-polering-pris-knap"
            >
              Tilgå poleringsmuligheder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Priser;
