import React from "react";
import Section from "../HOC/Section";
import Link from "../UI/Link";
import Mainframe from "./Mainframe";
import Booking from "./Booking";
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
      <Kontakt />
      <Kundecases />
      <Teamet />
      <FindOs />
    </>
  );
}

export default home;
