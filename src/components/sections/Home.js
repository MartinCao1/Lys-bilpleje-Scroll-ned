import React from "react";
import Mainframe from "./Mainframe";
import FindOs from "./FindOs";
import Kontakt from "./Kontakt";
import Kundecases from "./Kundecases";
import Teamet from "./Teamet";
import ProcessSektion from "./ProcessSektion"; // Import den nye komponent
import PristilbudForside from "./PristilbudForside";

function home() {
  /* Forældre */
  return (
    <>
      <Mainframe />
      <ProcessSektion />{" "}
      {/* Tilføj ProcessSektion her, hvor du ønsker den vist */}
      <PristilbudForside />
      <FindOs />
    </>
  );
}

export default home;
