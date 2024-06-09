import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { StyleProps } from "./Button.types";
import { Button } from "./Button";

type IconButtonProps = StyleProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: ReactNode;
  };

const IconButton: FC<IconButtonProps> = ({ icon, ...props }) => {
  return <Button {...props} isSquare={true} iconStart={icon} />;
};

export default IconButton;
