import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src="/bilag/logo.png" alt="Logo" className="logo" width={"200"} />
      </Link>
      <div className="navbar-content">
        <div className="nav-links">
          <Link to="/priser">Priser </Link>{" "}
          {/* Husk at oprette Priser-komponent og rute */}
          <Link to="/kontakt">Kontakt</Link>
          <Link to="/kundecases">Kundecases</Link>{" "}
          {/* Husk at oprette Kundecases-komponent og rute */}
          <Link to="/teamet">Teamet</Link>{" "}
          {/* Husk at oprette Teamet-komponent og rute */}
          <Link to="/findos">Find Os</Link>
        </div>
        <div className="contact-number">
          <a href="tel:+45 52 63 72 47">+45 52 63 72 47</a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
