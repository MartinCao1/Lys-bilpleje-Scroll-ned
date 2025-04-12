import React, { useState } from "react";
import { Link } from "react-scroll";

function Mainframe() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  return (
    <div className="mainframe">
      <video autoPlay muted loop className="background-video">
        <source src="/bilag/tesla-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-overlay">
        <h1>Book din tid hos Ly's Bilpleje</h1>
        <h2>Få en gratis prisvurdering</h2>
        <div className="dropdowns">
          <select value={brand} onChange={(e) => setBrand(e.target.value)}>
            <option value="" disabled>
              Vælg bilmærke
            </option>
            <option value="Toyota">Toyota</option>
            <option value="BMW">BMW</option>
            <option value="Audi">Audi</option>
          </select>
          <select value={model} onChange={(e) => setModel(e.target.value)}>
            <option value="" disabled>
              Vælg model
            </option>
            <option value="Model A">Model A</option>
            <option value="Model B">Model B</option>
            <option value="Model C">Model C</option>
          </select>
          {brand && model ? (
            <Link
              to="booking-section"
              smooth={true}
              duration={500}
              offset={-50}
              className="navigate-button"
            >
              Se estimeret pris
            </Link>
          ) : (
            <button
              onClick={() => alert("Vælg både bilmærke og model")}
              className="navigate-button"
            >
              Se estimeret pris
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Mainframe;

// const [brand, setBrand] = useState("");
// const [model, setModel] = useState("");

// {
//   /* Video Section */
// }
// <div className="mainframe">
//   <video autoPlay muted loop className="background-video">
//     <source src="/bilag/mercedes-video.mp4" type="video/mp4" />
//     Your browser does not support the video tag.
//   </video>
//   <div className="content-overlay">
//     <h1>Book din tid hos Ly's Bilpleje</h1>
//     <h2>Få en gratis prisvurdering</h2>
//     <div className="dropdowns">
//       <select value={brand} onChange={(e) => setBrand(e.target.value)}>
//         <option value="" disabled>
//           Vælg bilmærke
//         </option>
//         <option value="Toyota">Toyota</option>
//         <option value="BMW">BMW</option>
//         <option value="Audi">Audi</option>
//       </select>
//       <select value={model} onChange={(e) => setModel(e.target.value)}>
//         <option value="" disabled>
//           Vælg model
//         </option>
//         <option value="Model A">Model A</option>
//         <option value="Model B">Model B</option>
//         <option value="Model C">Model C</option>
//       </select>
//       {brand && model ? (
//         <Link
//           to="booking-section"
//           smooth={true}
//           duration={500}
//           offset={-50}
//           className="navigate-button"
//         >
//           Se estimeret pris
//         </Link>
//       ) : (
//         <button
//           onClick={() => alert("Vælg både bilmærke og model")}
//           className="navigate-button"
//         >
//           Se estimeret pris
//         </button>
//       )}
//     </div>
//   </div>
// </div>;

// {
//   /* Booking Section */
// }
// <Booking brand={brand} model={model} />;
