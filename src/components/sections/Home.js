import React from "react";
import Mainframe from "./Mainframe";
import FindOs from "./FindOs";
import Kontakt from "./Kontakt";
import Kundecases from "./Kundecases";
import Teamet from "./Teamet";
import Priser from "./Priser";

function home() {
  /* Forældre */
  return (
    <>
      <Mainframe />
      <Priser />
      <FindOs />
    </>
  );
}

export default home;
