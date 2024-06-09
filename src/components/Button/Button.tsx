import { ButtonHTMLAttributes, FC } from "react";
import { DotProps, IconProps, StyleProps } from "./Button.types";
import { ButtonStyled, Dot } from "./Button.styles";
import IconWrapper from "./IconWrapper";
import { sizeToFontSize } from "./Button.utils";

export type ButtonProps = StyleProps &
  IconProps &
  DotProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  children,
  size = "md",
  variant = "primary",
  danger = false,
  isSquare = false,
  hasDot = false,
  iconStart,
  iconEnd,
  fontSize,
  ...props
}) => {
  return (
    <ButtonStyled
      size={size}
      fontSize={fontSize ? fontSize : sizeToFontSize(size)}
      variant={variant}
      danger={danger}
      isSquare={isSquare}
      {...props}
    >
      {hasDot && <Dot />}
      {iconStart && <IconWrapper size={size}>{iconStart}</IconWrapper>}
      {children}
      {iconEnd && <IconWrapper size={size}>{iconEnd}</IconWrapper>}
    </ButtonStyled>
  );
};
