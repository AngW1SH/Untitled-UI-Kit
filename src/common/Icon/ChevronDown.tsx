import { FC, SVGProps } from "react";
import Generic from "./Generic";

interface ChevronDownProps extends SVGProps<SVGSVGElement> {}

const ChevronDown: FC<ChevronDownProps> = (props) => {
  return (
    <Generic hasStroke={false} viewBox="0 0 12 8" {...props}>
      <path
        d="M1 1.5L6 6.5L11 1.5"
        stroke="#667085"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
      />
    </Generic>
  );
};

export default ChevronDown;
