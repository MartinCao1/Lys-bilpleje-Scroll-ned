import React from "react";
import Nav from "./Nav";
import TopBar from "./TopBar";

const Header = () => {
  return (
    <div className="header">
      <TopBar /> {/* Tilføjet TopBar */}
      <Nav />
    </div>
  );
};

export default Header;
