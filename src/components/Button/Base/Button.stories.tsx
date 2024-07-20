import { Gear } from "@common/Icon";
import { Button } from "./Button";
import { StyleProps } from "./Button.types";
import IconButton from "../Icon/IconButton";

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
  <Button {...arg} iconStart={<Gear />}>
    Button CTA
  </Button>
);
Default.args = {
  size: "md",
  fontSize: "md",
  variant: "primary",
};

export const Icon = (arg: Required<StyleProps>) => (
  <IconButton {...arg} icon={<Gear />} />
);
Icon.args = {
  size: "md",
  variant: "primary",
};

export const Dot = (arg: Required<StyleProps>) => (
  <Button {...arg} hasDot={true}>
    Button CTA
  </Button>
);
Dot.args = {
  size: "md",
  variant: "primary",
};
