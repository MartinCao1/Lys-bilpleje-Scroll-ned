import React from "react";

function Anmeldelser() {
  return (
    <div className="anmeldelser">
      <img src="/bilag/next_icon.svg" alt="" className="next-btn" />
      <img src="/bilag/back_icon.svg" alt="" className="back-btn" />
      <div className="slider">
        <ul>
          <li>
            <div className="slide">
              <img src="/bilag/user1.svg" alt="" />
              <div>
                <h2>Henrik</h2>
              </div>
              <p>
                god service jeg elsker danny rigtig meget jeg vælger ham hver
                gang!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src="/bilag/user1.svg" alt="" />
              <div>
                <h2>Jens</h2>
              </div>
              <p>jeg har bestilt ham til aarhus og alt er perfekt</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src="/bilag/user1.svg" alt="" />
              <div>
                <h2>Ole</h2>
              </div>
              <p>Perfekt service man!</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Anmeldelser;
