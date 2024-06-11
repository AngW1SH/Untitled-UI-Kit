import { FC, SVGProps } from "react";
import Generic from "./Generic";

interface GoogleProps extends SVGProps<SVGSVGElement> {
  variant?: "brand" | "color" | "gray";
}

const Google: FC<GoogleProps> = ({ variant = "brand", ...props }) => {
  return (
    <Generic hasStroke={false} viewBox="0 0 24 24" {...props}>
      <g clipPath="url(#clip0_1256_130935)">
        <path
          d="M23.7663 12.2764C23.7663 11.4607 23.7001 10.6406 23.559 9.83807H12.2402V14.4591H18.722C18.453 15.9494 17.5888 17.2678 16.3233 18.1056V21.1039H20.1903C22.4611 19.0139 23.7663 15.9274 23.7663 12.2764Z"
          fill={variant === "gray" ? "var(--color-gray-400)" : "#4285F4"}
        />
        <path
          d="M12.24 24.0008C15.4764 24.0008 18.2058 22.9382 20.1944 21.1039L16.3274 18.1055C15.2516 18.8375 13.8626 19.252 12.2444 19.252C9.11376 19.252 6.45934 17.1399 5.50693 14.3003H1.51648V17.3912C3.55359 21.4434 7.70278 24.0008 12.24 24.0008Z"
          fill={variant === "gray" ? "var(--color-gray-400)" : "#34A853"}
        />
        <path
          d="M5.50277 14.3003C5.00011 12.8099 5.00011 11.1961 5.50277 9.70575V6.61481H1.51674C-0.185266 10.0056 -0.185266 14.0004 1.51674 17.3912L5.50277 14.3003Z"
          fill={variant === "gray" ? "var(--color-gray-400)" : "#FBBC04"}
        />
        <path
          d="M12.24 4.74966C13.9508 4.7232 15.6043 5.36697 16.8433 6.54867L20.2694 3.12262C18.1 1.0855 15.2207 -0.034466 12.24 0.000808666C7.70277 0.000808666 3.55359 2.55822 1.51648 6.61481L5.50252 9.70575C6.45052 6.86173 9.10935 4.74966 12.24 4.74966Z"
          fill={variant === "gray" ? "var(--color-gray-400)" : "#EA4335"}
        />
      </g>
      <defs>
        <clipPath id="clip0_1256_130935">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Generic>
  );
};

export default Google;
