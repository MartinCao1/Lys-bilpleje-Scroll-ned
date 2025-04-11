import React from "react";
import "../scss/partials/_pristilbudforside.scss";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function PristilbudForside() {
  const navigate = useNavigate();

  const handleVaeglPakkeClick = (pakkeNavn) => {
    navigate(`/tilvalg/${pakkeNavn}`);
  };

  return (
    <section className="pristilbud-forside">
      <div className="container">
        <h2>Vores prispakker</h2>
        <p className="intro-text">
          Hos Lys Bilpleje tilbyder vi en række forskellige bilplejepakker, der
          er skræddersyet til dine behov og din bils tilstand. Se vores udvalg
          nedenfor:
        </p>
        <div className="prispakker-container">
          <div className="prispakke-boks bronze">
            <h3>Bronze Pakke</h3>
            <p className="beskrivelse">
              Grundlæggende rengøring af bilen. Perfekt til vedligeholdelse.
            </p>
            <ul className="inkluderet">
              <li>
                <FontAwesomeIcon icon={faCheck} className="ikon" /> Udvendig
                vask
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="ikon" /> Støvsugning
                af kabine
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="ikon" /> Rens af
                måtter
              </li>
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
              <li>
                <FontAwesomeIcon icon={faCheck} className="ikon" /> Udvendig
                vask
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="ikon" /> Støvsugning
                af kabine
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="ikon" /> Rens af
                måtter og sæder
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="ikon" /> Let polering
                af lak
              </li>
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
              <li>
                <FontAwesomeIcon icon={faCheck} className="ikon" /> Udvendig
                vask
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="ikon" /> Dybderens af
                kabine
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="ikon" /> Rens og
                pleje af læder/stof
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="ikon" /> Avanceret
                polering af lak
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} className="ikon" />{" "}
                Lakforsegling for langvarig beskyttelse
              </li>
            </ul>
            <p className="pris">
              Fra: <span>3.995</span>,-
            </p>
            <button onClick={() => handleVaeglPakkeClick("diamant")}>
              Vælg pakke
            </button>
          </div>
        </div>
        <div className="se-alle-pakker">
          <a href="/priser" className="se-alle-link">
            Se alle vores prispakker
          </a>
        </div>
      </div>
    </section>
  );
}

export default PristilbudForside;
