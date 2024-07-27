import React, { ReactNode } from "react";

export interface AdditionalElementsProps {
  outerLeft?: ReactNode;
  outerRight?: ReactNode;
  innerLeft?: ReactNode;
  innerRight?: ReactNode;
}

export interface InputProps {
  type?: "text" | "password" | "email" | "number";
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface LabelProps {
  label?: string;
}

export interface TooltipProps {
  tooltip?: ReactNode;
  hint?: string;
  error?: boolean;
  errorMessage?: string;
}

export type CommonProps = InputProps & LabelProps & TooltipProps;
