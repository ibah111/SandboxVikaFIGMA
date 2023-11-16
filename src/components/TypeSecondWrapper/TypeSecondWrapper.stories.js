import { TypeSecondWrapper } from ".";

export default {
  title: "Components/TypeSecondWrapper",
  component: TypeSecondWrapper,
  argTypes: {
    type: {
      options: ["first", "fouth", "third", "five", "second"],
      control: { type: "select" },
    },
    adaptivity: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
    state: {
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
    state: "disable",
    counter: "off",
    className: {},
    divClassName: {},
    text: "Button",
  },
};
