import { FC, SVGProps } from "react";
import Generic from "./Generic";

interface ErrorProps extends SVGProps<SVGSVGElement> {}

const Error: FC<ErrorProps> = (props) => {
  return (
    <Generic viewBox="0 0 16 16" {...props}>
      <path
        d="M8.00016 5.33325V7.99992M8.00016 10.6666H8.00683M14.6668 7.99992C14.6668 11.6818 11.6821 14.6666 8.00016 14.6666C4.31826 14.6666 1.3335 11.6818 1.3335 7.99992C1.3335 4.31802 4.31826 1.33325 8.00016 1.33325C11.6821 1.33325 14.6668 4.31802 14.6668 7.99992Z"
        stroke="#F04438"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#ffffff"
      />
    </Generic>
  );
};

export default Error;
