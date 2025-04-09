import React from "react";
import "../scss/partials/_priser.scss";
import { useNavigate } from 'react-router-dom';

function Priser() {
  const navigate = useNavigate();

  const handleVaeglPakkeClick = (pakkeNavn) => {
    navigate(`/tilvalg/${pakkeNavn}`);
  };

  return (
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
        <button onClick={() => handleVaeglPakkeClick("bronze")}>Vælg pakke</button>
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
        <button onClick={() => handleVaeglPakkeClick("guld")}>Vælg pakke</button>
      </div>

      <div className="prispakke-boks diamant">
        <h3>Diamant Pakke</h3>
        <p className="beskrivelse">
          Komplet luksusbehandling. Inkluderer dybderens, polering og lakforsegling.
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
        <button onClick={() => handleVaeglPakkeClick("diamant")}>Vælg pakke</button>
      </div>

    </div>
  );
}

export default Priser;