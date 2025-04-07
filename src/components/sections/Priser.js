import React from "react";

function Priser() {
  return (
    <div className="priser-page">
      <h1>Vores Priser</h1>
      <p>
        Her kan du se vores vejledende priser for de mest populære bilpleje
        services. Kontakt os for et præcist tilbud på din specifikke bil og
        behov.
      </p>

      <div className="price-list">
        <div className="price-item">
          <h3>Hele bilen - Komplet Rengøring og Polering</h3>
          <p>Fra: 2000 kr</p>
          <p>
            Inkluderer: Indvendig rengøring, udvendig vask, polering af lak.
          </p>
          {/* Evt. mere detaljer */}
        </div>

        <div className="price-item">
          <h3>Kun indvendigt</h3>
          <p>Fra: 1000 kr</p>
          <p>
            Inkluderer: Støvsugning, rengøring af overflader, vinduespolering
            indvendigt.
          </p>
          {/* Evt. mere detaljer */}
        </div>

        <div className="price-item">
          <h3>Kun udvendigt</h3>
          <p>Fra: 800 kr</p>
          <p>Inkluderer: Vask, tørring, rudepolering udvendigt.</p>
          {/* Evt. mere detaljer */}
        </div>

        <div className="price-item">
          <h3>Polering</h3>
          <p>Fra: 1500 kr</p>
          <p>Fjerner ridser og giver lakken glans.</p>
          {/* Evt. mere detaljer om typer af polering */}
        </div>

        {/* Tilføj flere priser og services her */}
      </div>

      <p>
        Bemærk: Priserne er vejledende og kan variere afhængigt af bilens
        størrelse og tilstand.
      </p>
      <p>Kontakt os for et uforpligtende tilbud!</p>
    </div>
  );
}

export default Priser;
