/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TypeSecondWrapper = ({ type, adaptivity, state, counter, className, divClassName, text = "Button" }) => {
  return (
    <div
      className={`type-second-wrapper type-4-${type} state-4-${state} counter-0-${counter} adaptivity-8-${adaptivity} ${className}`}
    >
      {counter === "off" && ["first", "second", "third"].includes(type) && (
        <div
          className={`button-4 ${
            (adaptivity === "desktop" && state === "active" && type === "second") ||
            (adaptivity === "desktop" && state === "active" && type === "third") ||
            (adaptivity === "desktop" && type === "first") ||
            (adaptivity === "mobile" && state === "active") ||
            (adaptivity === "mobile" && state === "default" && type === "first") ||
            (adaptivity === "mobile" && state === "disable" && type === "first") ||
            (adaptivity === "mobile" && state === "disable" && type === "third") ||
            (adaptivity === "mobile" && state === "hover" && type === "first") ||
            (state === "default" && type === "second") ||
            (state === "default" && type === "third") ||
            (state === "hover" && type === "second") ||
            (state === "hover" && type === "third")
              ? divClassName
              : undefined
          }`}
        >
          {text}
        </div>
      )}

      {((counter === "off" && type === "five") ||
        (counter === "off" && type === "fouth") ||
        (counter === "on" && type === "first") ||
        (counter === "on" && type === "second") ||
        (counter === "on" && type === "third")) && (
        <>
          <div className="button-5">
            {["first", "fouth", "second", "third"].includes(type) && <>{text}</>}

            {type === "five" && (
              <img className="union-3" alt="Union" src="https://c.animaapp.com/M1WYoM5H/img/union-62.svg" />
            )}
          </div>
          <div className="element-3">
            {(type === "second" || type === "third" || (adaptivity === "desktop" && type === "first")) && <>1</>}

            {adaptivity === "mobile" && type === "first" && <div className="text-wrapper-2">1</div>}

            {type === "fouth" && (
              <img className="union-4" alt="Union" src="https://c.animaapp.com/M1WYoM5H/img/union-63.svg" />
            )}

            {type === "five" && <>{text}</>}
          </div>
        </>
      )}

      {counter === "on" && ["five", "fouth"].includes(type) && (
        <>
          <div className="button-6">
            {type === "fouth" && <>{text}</>}

            {type === "five" && (
              <img className="union-5" alt="Union" src="https://c.animaapp.com/M1WYoM5H/img/union-60.svg" />
            )}
          </div>
          <div className="element-4">
            {type === "fouth" && <>1</>}

            {type === "five" && <>{text}</>}
          </div>
          <div className="icon-down">
            {type === "fouth" && (
              <img className="union-6" alt="Union" src="https://c.animaapp.com/M1WYoM5H/img/union-63.svg" />
            )}

            {type === "five" && <>1</>}
          </div>
        </>
      )}
    </div>
  );
};

TypeSecondWrapper.propTypes = {
  type: PropTypes.oneOf(["first", "fouth", "third", "five", "second"]),
  adaptivity: PropTypes.oneOf(["desktop", "mobile"]),
  state: PropTypes.oneOf(["disable", "hover", "active", "default"]),
  counter: PropTypes.oneOf(["off", "on"]),
  text: PropTypes.string,
};
