import { FontSize } from "@common/font";
import { ReactNode } from "react";

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

export interface IconProps {
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
}
