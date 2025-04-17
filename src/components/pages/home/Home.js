import React from "react";
import Mainframe from "./Mainframe";
import FindOs from "./FindOs";
import ProcessSektion from "./ProcessSektion";
import PristilbudForside from "./PristilbudForside";
import Anmeldelser from "./Anmeldelser";

function home() {
  /* Forældre */
  return (
    <>
      <Mainframe />
      <ProcessSektion />{" "}
      {/* Tilføj ProcessSektion her, hvor du ønsker den vist */}
      <PristilbudForside />
      <Anmeldelser />
    </>
  );
}

export default home;
