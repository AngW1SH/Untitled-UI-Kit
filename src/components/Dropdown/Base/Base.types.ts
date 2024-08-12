import { ReactElement } from "react";

export interface Controls {
  moveUp: () => void;
  moveDown: () => void;
  reset: () => void;
  select: (option?: ReactElement | string) => void;
}

interface BaseGenericProps<T> {
  options: T[];
  value?: T | null;
  onChange?: (value: T) => void;
  type?: "input" | "block";
  className?: string;
}

export type BaseProps =
  | BaseGenericProps<ReactElement>
  | BaseGenericProps<string>;
