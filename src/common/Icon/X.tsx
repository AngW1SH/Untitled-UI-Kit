import { FC, SVGProps } from "react";
import Generic from "./Generic";

interface XProps extends SVGProps<SVGSVGElement> {
  variant?: "brand" | "color" | "gray";
}

const X: FC<XProps> = ({ variant = "brand", ...props }) => {
  return (
    <Generic hasStroke={false} viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9455 23L10.396 15.0901L3.44886 23H0.509766L9.09209 13.2311L0.509766 1H8.05571L13.286 8.45502L19.8393 1H22.7784L14.5943 10.3165L23.4914 23H15.9455ZM19.2185 20.77H17.2398L4.71811 3.23H6.6971L11.7121 10.2532L12.5793 11.4719L19.2185 20.77Z"
        fill={variant === "brand" ? "var(--color-white)" : "#242E36"}
      />
    </Generic>
  );
};

export default X;
