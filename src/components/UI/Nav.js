import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="container">
      <Link to="/">
        <img src="/bilag/logo1.png" alt="Logo" className="logo" />
      </Link>
      <ul>
        <li>
          <Link to="/priser">Priser</Link>
        </li>
        <li>
          <Link to="/kundecases">Kundecases</Link>
        </li>
        <li className="dropdown">
        <Link to="/teamet" className="dropdown-title">Teamet</Link>
          <ul className="dropdown-menu">
            <li><Link to="/hvadkundersiger" style={{ color: '#333', display: 'block', textDecoration: 'none', padding: '0.5rem 1rem' }}>Hvad siger vores kunder</Link></li>
            <li><Link to="/omos" style={{ color: '#333', display: 'block', textDecoration: 'none', padding: '0.5rem 1rem' }}>Om os</Link></li>
            <li><Link to="/faq" style={{ color: '#333', display: 'block', textDecoration: 'none', padding: '0.5rem 1rem' }}>FAQ</Link></li>
          </ul>
        </li>
        <li>
          <Link to="/findos">Find Os</Link>
        </li>
        <li>
          <Link to="/kontakt" className="btn">
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;


