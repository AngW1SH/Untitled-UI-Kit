import { Company, SocialProps } from "./Social.types";

export interface SocialGroupProps extends Omit<SocialProps, "company"> {
  companies: Company[];
  direction?: "row" | "column";
}
