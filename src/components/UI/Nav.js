import React, { useState, useEffect } from "react";

import Link from "./Link";

function Nav() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src="/bilag/logo.png" alt="Logo" className="logo" width={"200"} />
      </Link>
      <div className="navbar-content">
        <div className="nav-links">
          <Link to="/">Priser </Link>
          <Link to="">Kontakt</Link>
          <Link to="">Kundecases</Link>
          <Link to="">Teamet</Link>
        </div>
        <div className="contact-number">
          <a href="tel:+1234567890">+45 52 63 72 47</a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
