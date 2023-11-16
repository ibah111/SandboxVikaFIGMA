/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Button = ({ className }) => {
  return (
    <button className={`button ${className}`}>
      <div className="group">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="text-wrapper">свяжитесь со мной</div>
        </div>
      </div>
    </button>
  );
};
