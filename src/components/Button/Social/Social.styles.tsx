import styled, { RuleSet, css } from "styled-components";
import { ButtonStyled } from "../Base";
import { Company, SocialProps } from "./Social.types";

export const brandVariantStyles: { [key in Company]: RuleSet<object> } = {
  google: css`
    color: var(--color-gray-700);
    background-color: var(--color-white);
    border-color: var(--color-gray-300);
    box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);

    &:hover:not(:active, :disabled) {
      background-color: var(--color-gray-50);
    }
  `,
  facebook: css`
    color: var(--color-white);
    background-color: #1877f2;
    border-color: #1877f2;

    &:hover:not(:active, :disabled) {
      background-color: #0c63d4;
      border-color: #0c63d4;
    }
  `,
  apple: css`
    color: var(--color-white);
    background-color: var(--color-black);
    border-color: var(--color-black);
  `,
  twitter: css`
    color: var(--color-white);
    background-color: #1da1f2;
    border-color: #1da1f2;

    &:hover:not(:active, :disabled) {
      background-color: #0c8bd9;
    }
  `,
  x: css`
    color: var(--color-white);
    background-color: #242e36;
    border-color: #242e36;
  `,
  figma: css`
    color: var(--color-white);
    background-color: var(--color-black);
  `,
  dribbble: css`
    color: var(--color-white);
    background-color: #ea4c89;
    border-color: #ea4c89;

    &:hover:not(:active, :disabled) {
      background-color: #e62872;
    }
  `,
};

export const colorVariantStyles: RuleSet<object> = css`
  color: var(--color-gray-700);
  background-color: var(--color-white);
  border-color: var(--color-gray-300);
  box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);

  &:hover:not(:active, :disabled) {
    background-color: var(--color-gray-50);
  }
`;

export const grayVariantStyles: RuleSet<object> = css`
  color: var(--color-gray-700);
  background-color: var(--color-white);
  border-color: var(--color-gray-300);
  box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);

  &:hover:not(:active, :disabled) {
    background-color: var(--color-gray-50);
  }
`;

export const SocialButtonStyled = styled(ButtonStyled)<SocialProps>`
  gap: 12px;

  &:focus {
    box-shadow: var(--shadow-xs-gray-100);
  }

  ${(props) => props.variant === "brand" && brandVariantStyles[props.company]}
  ${(props) => props.variant === "color" && colorVariantStyles}
  ${(props) => props.variant === "gray" && grayVariantStyles}
`;
