import React from "react";

export default function InsuranceButton(props) {
  return (
    <div
      onClick={props.insuranceSelectHandler}
      className={`button-container ${
        props.disable
          ? props.disabledButtonClassName
          : props.enabledButtonClassName
      }`}
    >
      <img
        className="insurance-icon-size"
        src={props.img}
        alt="insurance-icon"
      />
      <small>{props.insuranceTitle}</small>
    </div>
  );
}
