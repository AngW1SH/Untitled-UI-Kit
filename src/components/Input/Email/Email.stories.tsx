import Email, { EmailProps } from "./Email";

export default {
  title: "Email Input",
  component: Email,
};

export const Default = (arg: EmailProps) => (
  <Email {...arg} placeholder="olivia@untitledui.com" label={"Email"} />
);
