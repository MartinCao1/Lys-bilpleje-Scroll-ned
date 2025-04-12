import React from "react";

function Kontakt() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sender....");
    const formData = new FormData(event.target);

    formData.append("access_key", "70775528-3bcc-449b-bde9-c86be84fa2a9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Beskeden er sendt!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <img
        src="/bilag/contact-background2.png"
        alt=""
        className="background-img"
      />
      <div className="contact-col">
        <h3>
          <strong>Kontakt Os</strong> <img src="/bilag/contact1.svg" alt="" />
        </h3>
        <p>
          Vi er altid klar til at hjælpe! Hvis du har spørgsmål eller ønsker at
          komme i kontakt, så tøv ikke med at række ud. Det er helt uforpligtet.
          Oplysninger om bilen i kontaktformularen er ikke et must, men det vil
          gøre hele processen lettere og hurtigere.
        </p>
        <p>
          Udfyld formularen, og vi vil ringe dig op – helt{" "}
          <strong>uforpligtende</strong>. Alternativt kan du kontakte os direkte
          via:
        </p>
        <ul>
          <li>
            <img src="/bilag/contact-mail.svg" alt="" />
            <a href="mailto:LysBilpleje@gmail.com">LysBilpleje@gmail.com</a>
          </li>
          <li>
            <img src="/bilag/contact-phone.svg" alt="" />
            <a href="tel:+4550136496">+45 50136496</a>
          </li>
          <li>
            <img src="/bilag/contact-location.svg" alt="" />
            <a
              href="https://www.google.com/maps?q=Andrup+Vej+7,+Esbjerg+Ø"
              target="_blank"
              rel="noopener noreferrer"
            >
              Andrup Vej 7, Esbjerg Ø
            </a>
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="navn">Navn:</label>
            <input
              type="text"
              id="navn"
              name="navn"
              placeholder="Indtast dit navn"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Indtast din email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefon">Telefon:</label>
            <input
              type="tel"
              id="telefon"
              name="telefon"
              placeholder="Indtast dit telefonnummer"
            />
          </div>
          <div className="form-group">
            <label htmlFor="besked">Besked:</label>
            <textarea
              id="besked"
              name="besked"
              rows="6"
              placeholder="Indtast din besked"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit">
            Send Besked
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Kontakt;

/* <div className="kontakt-os-page">
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
            <i className="fas fa-map-marker-alt"></i>
            <p>
              <strong>Adresse:</strong> [Din Adresse Her], Odense, Danmark
            </p>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <p>
              <strong>Telefon:</strong>{" "}
              <a href="tel:+4552637247">+45 52 63 72 47</a>
            </p>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:[Din Email Her]">[Din Email Her]</a>
            </p>
          </div>
        </div>
      </div>
    </div> */
