import { fontSizeStyles } from "@common/font";
import styled, { css } from "styled-components";

export const BaseStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  row-gap: 6px;
`;

const errorStyles = css`
  border-color: var(--color-error-300);

  &:focus-within {
    box-shadow: var(--shadow-xs-error-100);
  }
`;

const disabledStyles = css`
  color: var(--color-gray-500);
  background-color: var(--color-gray-50);
`;

interface InnerContainerProps {
  error?: boolean;
  disabled?: boolean;
}

export const InnerContainer = styled.div<InnerContainerProps>`
  width: 100%;
  display: flex;
  padding: 10px 14px;
  border: 1px solid var(--color-gray-300);
  background-color: var(--color-white);
  border-radius: 8px;

  &:focus-within {
    box-shadow: var(--shadow-xs-brand-100);
  }

  ${({ error }) => error && errorStyles}

  ${({ disabled }) => disabled && disabledStyles}
`;

export const Label = styled.label`
  ${fontSizeStyles["sm"]}
  font-weight: 500;
`;

export const OuterContainer = styled.div`
  display: flex;
`;

export const BaseInput = styled.input`
  ${fontSizeStyles["md"]}
  color: var(--color-gray-900);
  border: none;
  outline: none;
  width: 100%;

  &::placeholder {
    color: var(--color-gray-500);
  }
`;

export const Hint = styled.p`
  ${fontSizeStyles["sm"]}
  color: var(--color-gray-600);
`;

export const ErrorMessage = styled.p`
  ${fontSizeStyles["sm"]}
  color: var(--color-error-500);
`;

export const ErrorContainer = styled.div`
  display: flex;
  height: 16px;
  width: 16px;
  align-self: center;
`;
