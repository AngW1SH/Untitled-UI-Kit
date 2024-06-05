import { FontSize } from "@common/font";

export type Size = "sm" | "md" | "lg" | "xl" | "2xl";
export type SizeProps = { size?: Size };

export type Variant =
  | "primary"
  | "secondary"
  | "secondary-gray"
  | "tertiary"
  | "tertiary-gray";

export type FontSizeProps = { fontSize?: FontSize };

export interface StyleProps {
  variant?: Variant;
  fontSize?: FontSize;
  size?: Size;
  danger?: boolean;
}
