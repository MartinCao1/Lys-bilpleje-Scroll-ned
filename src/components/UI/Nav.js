import React, { useState, useEffect } from 'react';

import Link from './Link';

function Nav() {
  return (
    <div className='navbar'>
      <Link to="/">
        <img src="/bilag/logo.png" alt="Logo" className="logo" width={"200"} />
      </Link>
      <div className="nav-links">
        <Link to="/">Priser </Link>
        <Link to="about">Find Os</Link>
        <Link to="">Hjælp</Link>
        <Link to="">Kontakt</Link>
        <Link to="">Book</Link>
      </div>
    </div>
  );
}

export default Nav;
