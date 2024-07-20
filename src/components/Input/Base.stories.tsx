import Base, { BaseProps } from "./Base";

export default {
  title: "Base Input",
  component: Base,
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

export const Default = (arg: BaseProps) => (
  <Base {...arg} placeholder="olivia@untitledui.com" label={"Email"} />
);

export const Hinted = (arg: BaseProps) => (
  <Base
    {...arg}
    placeholder="olivia@untitledui.com"
    label={"Email"}
    hint={"This is a hint text to help user."}
  />
);

export const Error = (arg: BaseProps) => (
  <Base
    {...arg}
    placeholder="olivia@untitledui.com"
    label="Email"
    error={true}
    errorMessage="This is an error message"
  />
);

export const Disabled = (arg: BaseProps) => (
  <Base
    {...arg}
    placeholder="olivia@untitledui.com"
    label="Email"
    disabled={true}
  />
);

export const Additional = (arg: BaseProps) => (
  <Base
    {...arg}
    placeholder="1,000.00"
    label="Email"
    innerLeft={<span>$</span>}
    innerRight={<div>USD</div>}
    outerLeft={<div>http://</div>}
  />
);
