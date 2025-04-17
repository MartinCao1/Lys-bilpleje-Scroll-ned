import React from "react";
import "../../scss/partials/_footer.scss";
import FindOs from "./FindOs";

function Footer() {
  return (
    <div className="wrapper">
      <div className="main-content">
        {/* Your main content goes here */}
      </div>

      <div className="footer">
        <div className="footer-content">
          <FindOs />
          <div className="om-os">
            om os
          </div>
          <div className="Kontakt">
            Kontakt
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
