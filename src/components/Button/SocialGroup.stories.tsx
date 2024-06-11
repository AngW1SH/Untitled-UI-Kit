import { Social } from "./Social";
import SocialGroup from "./SocialGroup";
import { SocialGroupProps } from "./SocialGroup.types";

export default {
  title: "Social Button Group",
  component: Social,
  argTypes: {
    variant: {
      description: "Button variant",
      control: { type: "inline-radio" },
    },
    direction: {
      control: { type: "inline-radio" },
      description: "Button direction",
      options: ["row", "column"],
    },
    company: {
      table: {
        disable: true,
      },
    },
  },
};

export const Default = (arg: SocialGroupProps) => <SocialGroup {...arg} />;
Default.args = {
  variant: "brand",
  companies: ["google", "facebook", "apple"],
  direction: "column",
  iconOnly: false,
};
