import React from "react";
import Mainframe from "./Mainframe";
import ProcessSektion from "./ProcessSektion"; 
import PristilbudForside from "./PristilbudForside";

function home() {
  /* Forældre */
  return (
    <>
      <Mainframe />
      <ProcessSektion />{" "}
      {/* Tilføj ProcessSektion her, hvor du ønsker den vist */}
      <PristilbudForside />
    </>
  );
}

export default home;
