import { ButtonHTMLAttributes, FC } from "react";
import { IconProps, StyleProps } from "./Button.types";
import { ButtonStyled } from "./Button.styles";
import IconWrapper from "./IconWrapper";

export type ButtonProps = StyleProps &
  IconProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  children,
  size = "md",
  fontSize = "md",
  variant = "primary",
  danger = false,
  isSquare = false,
  iconStart,
  iconEnd,
  ...props
}) => {
  return (
    <ButtonStyled
      size={size}
      fontSize={fontSize}
      variant={variant}
      danger={danger}
      isSquare={isSquare}
      {...props}
    >
      {iconStart && <IconWrapper size={size}>{iconStart}</IconWrapper>}
      {children}
      {iconEnd && <IconWrapper size={size}>{iconEnd}</IconWrapper>}
    </ButtonStyled>
  );
};
