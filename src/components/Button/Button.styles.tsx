import styled, { RuleSet, css } from "styled-components";
import { Size, StyleProps, Variant } from "./Button.types";
import { fontSizeStyles } from "@common/font";

export const sizeStyles: { [key in Size]: RuleSet<object> } = {
  sm: css`
    padding: 8px 14px;
  `,
  md: css`
    padding: 10px 16px;
  `,
  lg: css`
    padding: 11px 18px;
  `,
  xl: css`
    padding: 12px 20px;
  `,
  "2xl": css`
    padding: 13px 28px;
  `,
};

export const variantStyles: { [key in Variant]: RuleSet<object> } = {
  primary: css`
    color: var(--color-white);
    background-color: var(--color-brand-600);
    border-color: var(--color-brand-600);

    &:hover:not(:active, :disabled) {
      background-color: var(--color-brand-700);
      border-color: var(--color-brand-700);
    }

    &:focus {
      box-shadow: var(--shadow-xs-brand-100);
    }

    &:disabled {
      background-color: var(--color-brand-200);
      border-color: var(--color-brand-200);
    }
  `,
  secondary: css`
    color: var(--color-brand-700);
    background-color: var(--color-brand-50);
    border-color: var(--color-brand-50);

    &:hover:not(:active, :disabled) {
      background-color: var(--color-brand-100);
      border-color: var(--color-brand-100);
    }

    &:focus {
      box-shadow: var(--shadow-xs-brand-100);
    }

    &:disabled {
      color: var(--color-brand-300);
      background-color: var(--color-brand-25);
      border-color: var(--color-brand-25);
    }
  `,
  "secondary-gray": css`
    color: var(--color-gray-700);
    background-color: var(--color-white);
    border-color: var(--color-gray-300);

    &:hover:not(:active, :disabled) {
      color: var(--color-gray-800);
      background-color: var(--color-gray-50);
      border-color: var(--color-gray-300);
    }

    &:focus {
      box-shadow: var(--shadow-xs-gray-100);
    }

    &:disabled {
      color: var(--color-gray-300);
      background-color: var(--color-white);
      border-color: var(--color-gray-200);
    }
  `,
  tertiary: css`
    color: var(--color-brand-700);
    background-color: transparent;
    border-color: transparent;

    &:hover:not(:active, :disabled) {
      background-color: var(--color-brand-50);
      border-color: var(--color-brand-50);
    }

    &:disabled {
      color: var(--color-gray-300);
      background-color: transparent;
      border-color: transparent;
    }
  `,
  "tertiary-gray": css`
    color: var(--color-gray-600);
    background-color: transparent;
    border-color: transparent;

    &:hover:not(:active, :disabled) {
      color: var(--color-gray-700);
      background-color: var(--color-gray-50);
      border-color: var(--color-gray-50);
    }

    &:disabled {
      color: var(--color-gray-300);
      background-color: transparent;
      border-color: transparent;
    }
  `,
};

export const dangerVariantStyles: { [key in Variant]: RuleSet<object> } = {
  primary: css`
    color: var(--color-white);
    background-color: var(--color-error-600);
    border-color: var(--color-error-600);

    &:hover:not(:active, :disabled) {
      background-color: var(--color-error-700);
      border-color: var(--color-error-700);
    }

    &:focus {
      box-shadow: var(--shadow-xs-error-100);
    }

    &:disabled {
      background-color: var(--color-error-200);
      border-color: var(--color-error-200);
    }
  `,
  secondary: css`
    color: var(--color-error-700);
    background-color: var(--color-error-50);
    border-color: var(--color-error-50);

    &:hover:not(:active, :disabled) {
      background-color: var(--color-error-100);
      border-color: var(--color-error-100);
    }

    &:focus {
      box-shadow: var(--shadow-xs-error-100);
    }

    &:disabled {
      color: var(--color-error-300);
      background-color: var(--color-error-25);
      border-color: var(--color-error-25);
    }
  `,
  "secondary-gray": css`
    color: var(--color-error-700);
    background-color: var(--color-white);
    border-color: var(--color-error-300);

    &:hover:not(:active, :disabled) {
      color: var(--color-error-800);
      background-color: var(--color-error-50);
      border-color: var(--color-error-300);
    }

    &:focus {
      box-shadow: var(--shadow-xs-error-100);
    }

    &:disabled {
      color: var(--color-error-300);
      background-color: var(--color-white);
      border-color: var(--color-error-200);
    }
  `,
  tertiary: css`
    color: var(--color-error-700);
    background-color: transparent;
    border-color: transparent;

    &:hover:not(:active, :disabled) {
      background-color: var(--color-error-50);
      border-color: var(--color-error-50);
    }

    &:disabled {
      color: var(--color-error-700);
      background-color: transparent;
      border-color: transparent;
    }
  `,
  "tertiary-gray": css`
    color: var(--color-error-700);
    background-color: transparent;
    border-color: transparent;

    &:hover:not(:active, :disabled) {
      color: var(--color-error-800);
      background-color: var(--color-error-50);
      border-color: var(--color-error-50);
    }

    &:disabled {
      color: var(--color-error-300);
      background-color: transparent;
      border-color: transparent;
    }
  `,
};

export const ButtonBase = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-weight: 600;
  border-width: 1px;
  border: none;
  cursor: pointer;
  outline: none;

  transition:
    background-color 0.1s ease-in-out,
    color 0.1s ease-in-out,
    border-color 0.1s ease-in-out;
`;

export const ButtonStyled = styled(ButtonBase)<Required<StyleProps>>`
  ${(props) => sizeStyles[props.size]};
  ${(props) => fontSizeStyles[props.fontSize]};
  ${(props) =>
    props.danger
      ? dangerVariantStyles[props.variant]
      : variantStyles[props.variant]};
`;