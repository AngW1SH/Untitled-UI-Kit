import { Button } from "./Button";
import { StyleProps } from "./Button.types";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      description: "Button variant",
      control: { type: "inline-radio" },
    },
    size: {
      control: { type: "inline-radio" },
      description: "Button size",
    },
    fontSize: {
      control: { type: "inline-radio" },
      description: "Font size",
    },
    danger: {
      control: { type: "boolean" },
      description: "Button variant",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Button variant",
    },
  },
};

export const Default = (arg: Required<StyleProps>) => (
  <Button {...arg}>Button CTA</Button>
);
Default.args = {
  size: "md",
  fontSize: "md",
  variant: "primary",
};
