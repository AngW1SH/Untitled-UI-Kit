import { FC, ReactNode } from "react";
import type { Size } from "../Base";
import styled, { RuleSet, css } from "styled-components";

const sizeStyles: { [key in Size]: RuleSet<object> } = {
  sm: css`
    height: 20px;
    width: 20px;
  `,
  md: css`
    height: 20px;
    width: 20px;
  `,
  lg: css`
    height: 20px;
    width: 20px;
  `,
  xl: css`
    height: 20px;
    width: 20px;
  `,
  "2xl": css`
    height: 24px;
    width: 24px;
  `,
};

interface IconWrapperProps {
  size: Size;
  children: ReactNode;
}

const SizedIconWrapper = styled.span<IconWrapperProps>`
  ${(props) => sizeStyles[props.size]}
`;

const IconWrapper: FC<IconWrapperProps> = ({ size, children, ...props }) => {
  return (
    <SizedIconWrapper size={size} {...props}>
      {children}
    </SizedIconWrapper>
  );
};

export default IconWrapper;
