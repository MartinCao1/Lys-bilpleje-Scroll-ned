import React from "react";

function Kundecases() {
  return (
    <div className="kundecases-page">
      <h1>Vores Kundecases</h1>
      <p>
        Se nogle eksempler på vores arbejde og hvordan vi har hjulpet vores
        kunder med at få deres biler til at skinne.
      </p>

      <div className="case">
        <h3>Mercedes-Benz C-klasse - Komplet Polering</h3>
        <img
          src="/bilag/case-mercedes.jpg"
          alt="Mercedes-Benz C-klasse efter polering"
        />
        <p>
          Vi udførte en komplet polering af denne Mercedes-Benz C-klasse,
          hvilket fjernede ridser og gav lakken en dyb glans. Kunden var meget
          tilfreds med resultatet.
        </p>
        {/* Evt. flere detaljer eller før/efter billeder */}
      </div>

      <div className="case">
        <h3>Volkswagen Golf - Indvendig Rengøring og Vask</h3>
        <img
          src="/bilag/case-golf.jpg"
          alt="Volkswagen Golf efter indvendig rengøring"
        />
        <p>
          Denne Volkswagen Golf fik en grundig indvendig rengøring, inklusive
          sæder, måtter og instrumentbræt. Derudover blev bilen vasket og tørret
          udvendigt.
        </p>
        {/* Evt. flere detaljer */}
      </div>

      {/* Tilføj flere kundecases her */}
    </div>
  );
}

export default Kundecases;
