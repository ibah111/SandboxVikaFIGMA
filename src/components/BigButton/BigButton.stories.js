import { BigButton } from ".";

export default {
  title: "Components/BigButton",
  component: BigButton,
  argTypes: {
    type: {
      options: ["first", "fouth", "third", "five", "second"],
      control: { type: "select" },
    },
    adaptivity: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["disable", "hover", "active", "default"],
      control: { type: "select" },
    },
    counter: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "first",
    adaptivity: "desktop",
    stateProp: "disable",
    counter: "off",
    className: {},
    buttonClassName: {},
    text: "BUTTON",
  },
};
