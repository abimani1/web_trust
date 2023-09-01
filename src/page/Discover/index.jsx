import React from "react";
import "../Discover/Style.css";
import d1 from "../../image/d1.jpg";
import d2 from "../../image/d2.jpg";
import d3 from "../../image/d3.jpg";
import d4 from "../../image/d4.jpg";
import d5 from "../../image/d5.jpg";
import dt from "../../image/dt.jpg";
import ds1 from "../../image/ds1.jpg";
import ds2 from "../../image/ds2.jpg";

const Discover = () => {
  return (
    <div className="Discover">
      <div className="Discover-title">
        <p>Discover trust</p>
      </div>
      <div className="Discover-gly-box">
        <div className="gly">
          <div className="gly-1">
            <div className="gly-1-1 img-text">
              <img src={d1} alt="img" className="image" />
              <p>business solution</p>
            </div>

            <div className="gly-1-2 img-text">
              <img src={d2} alt="img" />
              <p>sustainability</p>
            </div>
          </div>

          <div className="gly-2">
            <div className="gly-2-1 img-text">
              <img src={d3} alt="img" />
              <p>GXT 834 Callaz TKL Mechanical Keyboard</p>
            </div>
            <div className="gly-2-2">
              <div className="gly-2-2-1 img-text">
                <img src={d4} alt="img" />
                <p>Smart Home WIFI</p>
              </div>

              <div className="gly-2-2-2 img-text">
                <img src={d5} alt="img" />
                <p>Game on,play together</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seaction 2 */}

      <div className="DiscoverTrust">
        <div className="Discover-title">
          <p>Discover trust</p>
        </div>
        <div className="frame">
          <div
            className="Discover-frame"
            style={{backgroundImage: `url(${dt})`}}>
            <div className="Discover-frame-title">
              <p>Lyra Multi-device Wirelesaa</p>
            </div>
            <div className="Discover-frame-title">
              <p>Keyboard Mouse</p>
            </div>
            <div className="Discover-frame-button">
              <button>Discover more</button>
            </div>
          </div>
        </div>
      </div>

    {/* section - 3 */}

      <div className="moreTrust">
        <div className="more-frame">
          <div className="Discover-title">
            <p>More Trust</p>
          </div>
          <div className="moreTrust-box">
            <div className="mt-box-1" style={{backgroundImage: `url(${ds2})`}}>
              <div className="mt-box-1-1">
                <p>Sustaninability</p>
              </div>
              <div className="mt-box-1-2">
                <p>Clever changes can make a green difference</p>
              </div>
            </div>

            <div className="mt-box-1" style={{backgroundImage: `url(${ds1})`}}>
              <div className="mt-box-1-1">
                <p>Smart WIFI</p>
              </div>
              <div className="mt-box-1-2">
                <p>No hub,no hassle, all you need is Trust WIFI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
