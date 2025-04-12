import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../../scss/partials/_tilvalg.scss";

function Tilvalg() {
  const { pakkenavn } = useParams();
  const [ekstraTilvalg, setEkstraTilvalg] = useState({});
  const [dybdegaendeSaederAntal, setDybdegaendeSaederAntal] = useState(0);
  const [rensAfBoernesaederAntal, setRensAfBoernesaederAntal] = useState(0);
  const [bemærkninger, setBemærkninger] = useState("");

  const tilvalgData = [
    { id: "dyrehaar", navn: "Dyrehår", pris: 299 },
    { id: "ekstraBeskidt", navn: "Ekstra Beskidt", pris: 299 },
    { id: "laederpleje", navn: "Læderpleje af sæder", pris: 399 },
    { id: "toemningFoererkabine", navn: "Tømning af førerkabine", pris: 99 },
    {
      id: "dybdegaendeSaeder",
      navn: "Dybdegående sæderens",
      pris: null,
      antal: dybdegaendeSaederAntal,
      setAntal: setDybdegaendeSaederAntal,
    },
    {
      id: "rensAfBoernesaeder",
      navn: "Rens af børnesæder",
      pris: null,
      antal: rensAfBoernesaederAntal,
      setAntal: setRensAfBoernesaederAntal,
    },
    { id: "vinylpleje", navn: "Vinylpleje", pris: 249 },
    { id: "plejeGummimaatter", navn: "Pleje af gummimåtter", pris: 99 },
    { id: "ventilationsrens", navn: "Ventilationsrens", pris: 99 },
    { id: "hulrumsrengoering", navn: "Hulrumsrengøring", pris: 99 },
  ];

  const handleTilvalgChange = (event) => {
    const { name, checked } = event.target;
    setEkstraTilvalg((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleBemærkningerChange = (event) => {
    setBemærkninger(event.target.value);
  };

  const handleBekræftValg = () => {
    // ... din eksisterende bekræftelseslogik ...
  };

  return (
    <div className="tilvalg-container">
      <h2>Tilvalg og Bemærkninger for {pakkenavn}</h2>

      <h3>Indvendige tilvalg</h3>
      <ul>
        {tilvalgData.map((tilvalg) => (
          <li key={tilvalg.id}>
            {tilvalg.pris !== null ? (
              <>
                <label>
                  <input
                    type="checkbox"
                    name={tilvalg.id}
                    checked={ekstraTilvalg[tilvalg.id] || false}
                    onChange={handleTilvalgChange}
                  />
                  {tilvalg.navn}
                </label>
                <span>
                  {tilvalg.pris},-{" "}
                  <span className="inkl-moms">Kr. inkl. moms</span>
                </span>
              </>
            ) : (
              <div className="antal-vaelger">
                <label>{tilvalg.navn}</label>
                <div>
                  <select
                    value={tilvalg.antal}
                    onChange={(e) =>
                      tilvalg.setAntal(parseInt(e.target.value, 10))
                    }
                  >
                    {[...Array(5)].map((_, i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                  <span>Vælg antal</span>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      <h3>Eventuelle bemærkninger:</h3>
      <textarea
        placeholder="Indtast dine bemærkninger her"
        value={bemærkninger}
        onChange={handleBemærkningerChange}
      />
      <button onClick={handleBekræftValg}>Bekræft Valg for {pakkenavn}</button>
    </div>
  );
}

export default Tilvalg;
