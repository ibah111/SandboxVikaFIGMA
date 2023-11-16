/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const BigButton = ({ type, adaptivity, stateProp, counter, className, buttonClassName, text = "BUTTON" }) => {
  const [state, dispatch] = useReducer(reducer, {
    type: type || "second",
    adaptivity: adaptivity || "desktop",
    state: stateProp || "default",
    counter: counter || "off",
  });

  return (
    <div
      className={`big-button ${state.state} ${state.type} adaptivity-${state.adaptivity} ${state.counter} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.counter === "off" && ["first", "second", "third"].includes(state.type) && (
        <button
          className={`div ${
            (state.adaptivity === "desktop" && state.state === "active" && state.type === "second") ||
            (state.adaptivity === "desktop" && state.state === "active" && state.type === "third") ||
            (state.adaptivity === "desktop" && state.type === "first") ||
            (state.adaptivity === "mobile" && state.state === "active") ||
            (state.adaptivity === "mobile" && state.state === "default" && state.type === "first") ||
            (state.adaptivity === "mobile" && state.state === "disable" && state.type === "first") ||
            (state.adaptivity === "mobile" && state.state === "disable" && state.type === "third") ||
            (state.adaptivity === "mobile" && state.state === "hover" && state.type === "first") ||
            (state.state === "default" && state.type === "second") ||
            (state.state === "default" && state.type === "third") ||
            (state.state === "hover" && state.type === "second") ||
            (state.state === "hover" && state.type === "third")
              ? buttonClassName
              : undefined
          }`}
        >
          {text}
        </button>
      )}

      {((state.counter === "off" && state.type === "five") ||
        (state.counter === "off" && state.type === "fouth") ||
        (state.counter === "on" && state.type === "first") ||
        (state.counter === "on" && state.type === "second") ||
        (state.counter === "on" && state.type === "third")) && (
        <div className="button-2">
          {["first", "fouth", "second", "third"].includes(state.type) && <>{text}</>}

          {state.type === "five" && (
            <img className="union" alt="Union" src="https://c.animaapp.com/M1WYoM5H/img/union-62.svg" />
          )}
        </div>
      )}

      {state.counter === "on" && ["five", "fouth"].includes(state.type) && (
        <>
          <div className="button-3">
            {state.type === "fouth" && <>{text}</>}

            {state.type === "five" && (
              <img className="img" alt="Union" src="https://c.animaapp.com/M1WYoM5H/img/union-60.svg" />
            )}
          </div>
          <div className="element">
            {state.type === "fouth" && <>1</>}

            {state.type === "five" && <>{text}</>}
          </div>
        </>
      )}

      {((state.counter === "on" && state.type === "first") ||
        (state.counter === "on" && state.type === "second") ||
        (state.counter === "on" && state.type === "third") ||
        state.type === "five" ||
        state.type === "fouth") && (
        <div className="element-2">
          {(state.type === "first" ||
            state.type === "second" ||
            state.type === "third" ||
            (state.counter === "on" && state.type === "five")) && <>1</>}

          {state.type === "fouth" && (
            <img className="union-2" alt="Union" src="https://c.animaapp.com/M1WYoM5H/img/union-63.svg" />
          )}

          {state.counter === "off" && state.type === "five" && <>{text}</>}
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

BigButton.propTypes = {
  type: PropTypes.oneOf(["first", "fouth", "third", "five", "second"]),
  adaptivity: PropTypes.oneOf(["desktop", "mobile"]),
  stateProp: PropTypes.oneOf(["disable", "hover", "active", "default"]),
  counter: PropTypes.oneOf(["off", "on"]),
  text: PropTypes.string,
};
