import { FontSize } from "@common/font";

export const sizeToFontSize = (size: string): FontSize => {
  switch (size) {
    case "sm":
      return "sm";
    case "md":
      return "sm";
    case "lg":
      return "md";
    case "xl":
      return "md";
    case "2xl":
      return "lg";
    default:
      return "md";
  }
};
