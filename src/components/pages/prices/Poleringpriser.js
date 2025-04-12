import React from "react";
import { Link } from "react-router-dom";
import "../../scss/partials/_poleringpriser.scss"; // Importér SCSS filen for styling

function PoleringPriser() {
  return (
    <div className="polering-priser-container">
      <h1>Priser for Professionel Polering</h1>
      <p className="intro-text">
        Hos Ly´s bilpleje tilbyder vi forskellige poleringsbehandlinger for at
        genskabe din bils glans og beskytte lakken. Vores erfarne team sikrer et
        flot resultat hver gang. Nedenfor kan du se vores forskellige
        poleringsmuligheder.
      </p>

      <div className="polering-pris-boks">
        <h3>Let Polering - Opfriskning</h3>
        <p className="beskrivelse">
          Ideel til nyere biler eller biler med få overfladiske swirls og lette
          ridser. Giver en markant forbedring af glansen.
        </p>
        <ul className="inkluderet">
          <li>Grundig udvendig vask</li>
          <li>Let maskinpolering i ét trin</li>
          <li>Aftørring og inspektion</li>
        </ul>
        <p className="pris">
          Fra: <span>1.495</span>,- DKK
        </p>
        {/* Evt. en knap til at booke eller kontakte */}
      </div>

      <div className="polering-pris-boks">
        <h3>Avanceret Polering - Ridsefjernelse</h3>
        <p className="beskrivelse">
          Til biler med flere og dybere swirls, ridser og andre lakdefekter.
          Denne behandling involverer flere poleringstrin for at opnå et næsten
          perfekt resultat.
        </p>
        <ul className="inkluderet">
          <li>Grundig udvendig vask og dekontaminering</li>
          <li>Maskinpolering i flere trin (2-3 trin)</li>
          <li>Aftørring og inspektion</li>
        </ul>
        <p className="pris">
          Fra: <span>2.995</span>,- DKK (prisen kan variere afhængigt af bilens
          størrelse og lakens tilstand)
        </p>
        {/* Evt. en knap til at booke eller kontakte */}
      </div>

      <div className="polering-pris-boks">
        <h3>Keramisk Coating Inkl. Fuld Polering</h3>
        <p className="beskrivelse">
          Den ultimative behandling for glans og langvarig beskyttelse.
          Inkluderer en omfattende polering for at fjerne defekter, efterfulgt
          af påføring af en holdbar keramisk coating.
        </p>
        <ul className="inkluderet">
          <li>Grundig udvendig vask og dekontaminering</li>
          <li>Avanceret maskinpolering i flere trin</li>
          <li>Påføring af keramisk coating (specificer mærke og holdbarhed)</li>
          <li>Afsluttende inspektion og plejeanvisninger</li>
        </ul>
        <p className="pris">
          Fra: <span>6.995</span>,- DKK (prisen kan variere afhængigt af bilens
          størrelse og valg af coating)
        </p>
        {/* Evt. en knap til at booke eller kontakte */}
      </div>

      <p className="kontakt-os">
        Kontakt os gerne for et uforpligtende tilbud tilpasset netop din bil og
        dine behov!{" "}
        <Link to="/kontakt" className="kontakt-link">
          Udfyld venligst kontaktformularen
        </Link>
        , og jeg vil snarest vende tilbage.
      </p>
    </div>
  );
}

export default PoleringPriser;
