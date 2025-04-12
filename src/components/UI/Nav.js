import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Flyout-menu state
  const location = useLocation();

  // Toggle flyout-menu
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  // Luk menuen, når man navigerer til en ny side
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Tjek om vi scroller ned på siden
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
    <nav
      className={`container ${
        sticky || !isHomePage || menuOpen ? "dark-nav" : ""
      }`}
    >
      <Link to="/">
        <img src="/bilag/logo1.png" alt="Logo" className="logo" />
      </Link>
      <div className="mobile-nav" onClick={handleClick}>
        <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/priser" onClick={() => setMenuOpen(false)}>
            Priser
          </Link>
        </li>
        <li>
          <Link to="/kundecases" onClick={() => setMenuOpen(false)}>
            Kundecases
          </Link>
        </li>
        <li className="dropdown">
          <Link to="/teamet" className="dropdown-title">
            Teamet
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link to="/hvadkundersiger" onClick={() => setMenuOpen(false)}>
                Hvad siger vores kunder
              </Link>
            </li>
            <li>
              <Link to="/omos" onClick={() => setMenuOpen(false)}>
                Om os
              </Link>
            </li>
            <li>
              <Link to="/faq" onClick={() => setMenuOpen(false)}>
                FAQ
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/findos" onClick={() => setMenuOpen(false)}>
            Find Os
          </Link>
        </li>
        <li>
          <Link
            to="/kontakt"
            className="btn"
            onClick={() => setMenuOpen(false)}
          >
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
