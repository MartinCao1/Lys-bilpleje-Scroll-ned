import React from 'react';

function FindOs() {
  return (
    <div >
      <h2>Find Os</h2>
      <p>Besøg os på vores adresse:</p>
      <div className="map-container">
        <iframe
          title="Google Map Info"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2259.973611352032!2d10.390558100000007!3d55.39798510000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b23d109901b17%3A0x2c23477e07fe007d!2sHavnegade%2057%2C%205000%20Odense%20C!5e0!3m2!1sda!2sdk!4v1743709532481!5m2!1sda!2sdk"
          width="250"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default FindOs;