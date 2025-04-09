import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="container">
      <Link to="/">
        <img src="/bilag/logo1.png" alt="Logo" className="logo" />
      </Link>
      <ul>
        <li>
          <Link to="/priser">Priser </Link>
        </li>
        <li>
          <Link to="/kundecases">Kundecases</Link>
        </li>
        <li>
          <Link to="/teamet">Teamet</Link>
        </li>
        <li>
          <Link to="/findos">Find Os</Link>
        </li>
        <li>
          <button className="btn">Kontakt</button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
