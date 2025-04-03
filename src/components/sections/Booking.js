import React, { useState, useEffect } from "react";

function Booking({ brand, model }) {
  const [service, setService] = useState("");
  const [price, setPrice] = useState("0 kr");
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    startDate: "",
    endDate: "",
    time: "",
  });

  const handleServiceChange = (selectedService) => {
    setService(selectedService);
    const prices = {
      "Hele bilen": "2000 kr",
      "Kun indvendigt": "1000 kr",
      "Kun udvendigt": "800 kr",
      Polering: "1500 kr",
    };
    setPrice(prices[selectedService] || "0 kr");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    setService(""); // Reset service selection when brand or model changes
    setPrice("0 kr");
  }, [brand, model]);

  return (
    <div id="booking-section" className="booking-page">
      <h1>Booking</h1>
      <div className="static-info">
        <p>
          <strong>Bilmærke:</strong> {brand}
        </p>
        <p>
          <strong>Model:</strong> {model}
        </p>
      </div>
      <h2>Vælg service</h2>
      <div className="services">
        {[
          {
            title: "Hele bilen",
            text: "Komplet rengøring og polering.",
            key: "Hele bilen",
          },
          {
            title: "Kun indvendigt",
            text: "Rengøring af bilens interiør.",
            key: "Kun indvendigt",
          },
          {
            title: "Kun udvendigt",
            text: "Rengøring af bilens eksteriør.",
            key: "Kun udvendigt",
          },
          {
            title: "Polering",
            text: "Professionel polering af bilen.",
            key: "Polering",
          },
        ].map((option) => (
          <div
            key={option.key}
            className={`service-box ${service === option.key ? "active" : ""}`}
            onClick={() => handleServiceChange(option.key)}
          >
            <h3>{option.title}</h3>
            <p>{option.text}</p>
            <button>Vælg</button>
          </div>
        ))}
      </div>
      <h3>Estimeret pris: {price}</h3>
      <form className="contact-form">
        <h2>Indtast dine oplysninger</h2>
        <label>
          Navn:
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleInputChange}
            placeholder="Indtast dit navn"
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
            placeholder="Indtast din email"
            required
          />
        </label>
        <label>
          Telefon:
          <input
            type="tel"
            name="phone"
            value={userInfo.phone}
            onChange={handleInputChange}
            placeholder="Indtast dit telefonnummer"
            required
          />
        </label>
        <label>
          Ønsket startdato:
          <input
            type="date"
            name="startDate"
            value={userInfo.startDate}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Ønsket slutdato:
          <input
            type="date"
            name="endDate"
            value={userInfo.endDate}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Tidspunkt:
          <select
            name="time"
            value={userInfo.time}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Vælg tidspunkt
            </option>
            {Array.from({ length: 33 }, (_, i) => {
              const hour = Math.floor(i / 4) + 8;
              const minute = (i % 4) * 15;
              const time = `${hour.toString().padStart(2, "0")}:${minute
                .toString()
                .padStart(2, "0")}`;
              return (
                <option key={time} value={time}>
                  {time}
                </option>
              );
            })}
          </select>
        </label>
        <button type="submit">Bekræft booking</button>
      </form>
    </div>
  );
}

export default Booking;
