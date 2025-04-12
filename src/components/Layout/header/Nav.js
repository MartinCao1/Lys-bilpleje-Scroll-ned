import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const [sticky, setSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tjek om vi er på forsiden
  const isHomePage = location.pathname === "/";

  return (
    <nav className={`container ${sticky || !isHomePage ? "dark-nav" : ""}`}>
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
        <li>
          <Link to="/teamet">Teamet</Link>
        </li>
        <li>
          <Link to="/anmeldelser">Anmeldelser</Link>
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
