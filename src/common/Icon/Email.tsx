import { FC, SVGProps } from "react";
import Generic from "./Generic";

interface EmailProps extends SVGProps<SVGSVGElement> {}

const Email: FC<EmailProps> = (props) => {
  return (
    <Generic hasStroke={false} viewBox="0 0 20 16" {...props}>
      <path
        d="M18.3334 2.99998C18.3334 2.08331 17.5834 1.33331 16.6667 1.33331H3.33341C2.41675 1.33331 1.66675 2.08331 1.66675 2.99998M18.3334 2.99998V13C18.3334 13.9166 17.5834 14.6666 16.6667 14.6666H3.33341C2.41675 14.6666 1.66675 13.9166 1.66675 13V2.99998M18.3334 2.99998L10.0001 8.83331L1.66675 2.99998"
        stroke="#667085"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
      />
    </Generic>
  );
};

export default Email;
