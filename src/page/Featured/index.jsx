import React from "react";
import "../Featured/Style.css";
import pro1 from "../../image/pro1.png";
import pro2 from "../../image/pro2.png";
import pro3 from "../../image/pro3.png";
import pro4 from "../../image/pro4.png";
const Featured = () => {
  return (
    <div className="featured-sec">
      <div className="featured-title">
        <p>featured products</p>
      </div>

      <div className="featured-product-list">
        {productData.map((item, index) => {
          return (
            <div className="featured-product-card" key={index}>
              <div className="featured-product-card-image">
                <img src={item.img} alt="img" />
              </div>
              <div className="featured-product-Name-card">
                <p>{item.proName}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;

const productData = [
  {
    img: pro1,
    proName: "GXT 255+ Onyx Professional Microphone With Arm",
  },
  {
    img: pro2,
    proName: "GXT 255+ Onyx Professional Microphone With Arm",
  },
  {
    img: pro3,
    proName: "GXT 255+ Onyx Professional Microphone With Arm",
  },
  {
    img: pro4,
    proName: "GXT 255+ Onyx Professional Microphone With Arm",
  },
];
