/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { TypeSecondWrapper } from "../TypeSecondWrapper";
import "./style.css";

export const Footer = ({ adaptivity, className }) => {
  return (
    <div className={`footer ${className}`}>
      <div className="overlap-group-2">
        <div className="frame">
          <div className="col">
            <div className="text-wrapper-3">СВЯЗАТЬСЯ СО МНОЙ:</div>
            <div className="frame-2">
              <TypeSecondWrapper
                adaptivity="desktop"
                className="button-instance"
                counter="off"
                divClassName="design-component-instance-node"
                state="default"
                text="Вконтакте"
                type="third"
              />
              <TypeSecondWrapper
                adaptivity="desktop"
                className="button-instance"
                counter="off"
                divClassName="button-7"
                state="default"
                text="Телеграм"
                type="third"
              />
            </div>
          </div>
        </div>
        <div className="group-2">
          <div className="text-wrapper-4">torrilalu</div>
          <div className="text-wrapper-5">Copyright © 2023, Torrilalu</div>
          <img className="group-3" alt="Group" src="https://c.animaapp.com/M1WYoM5H/img/group-8-1@2x.png" />
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  adaptivity: PropTypes.oneOf(["desktop"]),
};
