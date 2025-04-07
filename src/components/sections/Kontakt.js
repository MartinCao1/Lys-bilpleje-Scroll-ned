import React from "react";

function Kontakt() {
  return (
    <div className="kontakt-os-page">
      <div className="kontakt-banner">
        <h1>Kontakt Os</h1>
        <p>
          Har du spørgsmål, ønsker du et tilbud, eller vil du booke en tid?
          Kontakt os endelig!
        </p>
      </div>

      <div className="kontakt-form-section">
        <h2>Send os en besked</h2>
        <form className="kontakt-form">
          <div className="form-group">
            <label htmlFor="navn">Navn:</label>
            <input type="text" id="navn" name="navn" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="telefon">Telefon:</label>
            <input type="tel" id="telefon" name="telefon" />
          </div>
          <div className="form-group">
            <label htmlFor="besked">Besked:</label>
            <textarea id="besked" name="besked" rows="5" required></textarea>
          </div>
          <button type="submit" className="send-besked-btn">
            Send Besked
          </button>
        </form>
      </div>

      <div className="kontakt-info-section">
        <h2>Vores Kontaktoplysninger</h2>
        <div className="kontakt-info">
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>{" "}
            {/* Font Awesome ikon (husk at tilføje bibliotek) */}
            <p>
              <strong>Adresse:</strong> [Din Adresse Her], Odense, Danmark
            </p>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i> {/* Font Awesome ikon */}
            <p>
              <strong>Telefon:</strong>{" "}
              <a href="tel:+4552637247">+45 52 63 72 47</a>
            </p>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i> {/* Font Awesome ikon */}
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:[Din Email Her]">[Din Email Her]</a>
            </p>
          </div>
          {/* Tilføj eventuelt åbningstider her */}
        </div>
      </div>
    </div>
  );
}

export default Kontakt;
