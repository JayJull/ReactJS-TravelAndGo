import React from "react";
import foto from "../../assets/foto.jpeg";

const Lounge = () => {
  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div className="imgDiv">
          <img src={foto} alt="" />
        </div>

        <div className="textDiv">
          <h2>Uncompanied Minor Lounge</h2>
          <div className="grids grid">
            <div className="singleGrid">
              <span className="gridTitle">Help through the phone</span>
              <p>
                You can also call travel from yout phone and book a ticket to
                one of your favorite destinations
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">Safety priority</span>
              <p>
                You can also call travel from yout phone and book a ticket to
                one of your favorite destinations
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">Care on the road</span>
              <p>
                You can also call travel from yout phone and book a ticket to
                one of your favorite destinations
              </p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">Chauffeur-drive service</span>
              <p>
                You can also call travel from yout phone and book a ticket to
                one of your favorite destinations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
