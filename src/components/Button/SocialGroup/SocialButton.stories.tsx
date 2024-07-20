import { Social } from "../Social";
import type { SocialProps } from "../Social";

export default {
  title: "Social Button",
  component: Social,
  argTypes: {
    variant: {
      description: "Button variant",
      control: { type: "inline-radio" },
    },
    company: {
      control: { type: "inline-radio" },
      description: "Button size",
    },
  },
};

export const SocialButton = (arg: SocialProps) => <Social {...arg} />;
SocialButton.args = {
  variant: "brand",
  company: "google",
  iconOnly: false,
};
