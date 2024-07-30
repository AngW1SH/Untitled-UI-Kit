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
  $hasOuterLeft?: boolean;
  $hasOuterRight?: boolean;
}

export const InnerContainer = styled.div<InnerContainerProps>`
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 14px;
  border: 1px solid var(--color-gray-300);
  background-color: var(--color-white);
  border-radius: 8px;

  &:focus-within {
    box-shadow: var(--shadow-xs-brand-100);
  }

  ${({ error }) => error && errorStyles}

  ${({ disabled }) => disabled && disabledStyles}

  ${({ $hasOuterLeft }) =>
    $hasOuterLeft &&
    css`
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    `}

  ${({ $hasOuterRight }) =>
    $hasOuterRight &&
    css`
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    `}
`;

export const Label = styled.label`
  ${fontSizeStyles["sm"]}
  font-weight: 500;
`;

export const OuterContainer = styled.div`
  display: flex;
`;

interface OuterElementProps {
  side: "left" | "right";
}
export const OuterElement = styled.div<OuterElementProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-gray-300);

  ${({ side }) => {
    if (side === "left") {
      return css`
        padding-left: 14px;
        padding-right: 12px;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        border-right: none;
      `;
    }

    return css`
      padding-left: 12px;
      padding-right: 14px;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      border-left: none;
    `;
  }}
`;

interface InnerElementProps {
  side: "left" | "right";
}
export const InnerElement = styled.div<InnerElementProps>`
  display: flex;
  width: max-content;
  max-width: 70%;
  align-items: center;
  justify-content: center;

  ${({ side }) => {
    if (side === "left") {
      return css`
        padding-right: 8px;
      `;
    }

    return css`
      padding-left: 8px;
    `;
  }}
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
