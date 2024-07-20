import type { Company, SocialProps } from "../Social";

export interface SocialGroupProps extends Omit<SocialProps, "company"> {
  companies: Company[];
  direction?: "row" | "column";
}
