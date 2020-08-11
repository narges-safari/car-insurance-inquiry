import React from "react";
import "./Background.scss";

import GreenCar from "../../assets/icons/car-green.svg";

export default function Background() {
  return (
    <div>
      <div className="pink-column" />
      <div className="car-background">
        <img className="car-image" src={GreenCar} alt="background" />
      </div>
    </div>
  );
}
