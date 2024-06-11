import { FC, SVGProps } from "react";
import Generic from "./Generic";

interface FigmaProps extends SVGProps<SVGSVGElement> {
  variant?: "brand" | "color" | "gray";
}

const Figma: FC<FigmaProps> = ({ variant = "brand", ...props }) => {
  return (
    <Generic hasStroke={false} viewBox="0 0 24 24" {...props}>
      <g clipPath="url(#clip0_1256_132144)">
        <path
          d="M8.00006 24.0001C10.2081 24.0001 12.0001 22.208 12.0001 20V16H8.00006C5.79205 16 4 17.792 4 20C4 22.208 5.79205 24.0001 8.00006 24.0001Z"
          fill={variant === "gray" ? "var(--color-gray-400)" : "#0ACF83"}
        />
        <path
          d="M4 12C4 9.79203 5.79205 8 8.00006 8H12.0001V16H8.00006C5.79205 16.0001 4 14.208 4 12Z"
          fill={variant === "gray" ? "var(--color-gray-400)" : "#A259FF"}
        />
        <path
          d="M4 4.00003C4 1.79203 5.79205 0 8.00006 0H12.0001V7.99997H8.00006C5.79205 7.99997 4 6.20803 4 4.00003Z"
          fill={variant === "gray" ? "var(--color-gray-400)" : "#F24E1E"}
        />
        <path
          d="M12 0H16.0001C18.2081 0 20.0001 1.79203 20.0001 4.00003C20.0001 6.20803 18.2081 7.99997 16.0001 7.99997H12V0Z"
          fill={variant === "gray" ? "var(--color-gray-400)" : "#FF7262"}
        />
        <path
          d="M20.0001 12C20.0001 14.208 18.2081 16.0001 16.0001 16.0001C13.792 16.0001 12 14.208 12 12C12 9.79203 13.792 8 16.0001 8C18.2081 8 20.0001 9.79203 20.0001 12Z"
          fill={variant === "gray" ? "var(--color-gray-400)" : "#1ABCFE"}
        />
      </g>
      <defs>
        <clipPath id="clip0_1256_132144">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Generic>
  );
};

export default Figma;
