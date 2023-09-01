import React from "react";
import img from "../../image/smaple.jpg";
import "../Hero/Style.css";

const Hero = () => {
  return (
    <div className="hero" id="Home">
      <div className="hero-Box" style={{backgroundImage: `url(${img})`}}>
        <div className="hero-title">
          <p>licensed</p>
          <p>to win</p>
        </div>

        <div className="hero-quary">
          <span></span>
          <p>
            The new Forta headset is official licensed for the PS5 <sup>TM</sup>
            consoles
          </p>
          <button>Discover more</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
