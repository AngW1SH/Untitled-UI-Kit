export type Company =
  | "google"
  | "facebook"
  | "apple"
  | "twitter"
  | "x"
  | "figma"
  | "dribbble";

export type Variant = "brand" | "color" | "gray";

export interface SocialProps {
  company: Company;
  variant: Variant;
  iconOnly?: boolean;
}
