import { Footer } from ".";

export default {
  title: "Components/Footer",
  component: Footer,
  argTypes: {
    adaptivity: {
      options: ["desktop"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    adaptivity: "desktop",
    className: {},
  },
};
