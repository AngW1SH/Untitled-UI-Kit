import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import type { ButtonStyleProps } from "../Base";
import { Button } from "../Base";

type IconProps = ButtonStyleProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: ReactNode;
  };

const Icon: FC<IconProps> = ({ icon, ...props }) => {
  return <Button {...props} isSquare={true} iconStart={icon} />;
};

export default Icon;
