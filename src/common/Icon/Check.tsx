import { FC, SVGProps } from "react";
import Generic from "./Generic";

interface ChevronDownProps extends SVGProps<SVGSVGElement> {}

const ChevronDown: FC<ChevronDownProps> = (props) => {
  return (
    <Generic hasStroke={false} viewBox="0 0 16 11" {...props}>
      <path
        d="M14.6667 1L5.50001 10.1667L1.33334 6"
        stroke="#7F56D9"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
      />
    </Generic>
  );
};

export default ChevronDown;
