import { ButtonHTMLAttributes, FC } from "react";
import { StyleProps } from "./Button.types";
import { ButtonStyled } from "./Button.styles";

export type ButtonProps = StyleProps & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  children,
  size = "md",
  fontSize = "md",
  variant = "primary",
  danger = false,
  ...props
}) => {
  return (
    <ButtonStyled
      size={size}
      fontSize={fontSize}
      variant={variant}
      danger={danger}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
};
