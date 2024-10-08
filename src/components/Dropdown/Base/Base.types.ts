export interface Controls<T> {
  moveUp: () => void;
  moveDown: () => void;
  reset: () => void;
  select: (option?: T) => void;
}

export interface BaseProps<T> {
  options: T[];
  value?: T | null;
  onChange?: (value: T) => void;
  type?: "input" | "block";
  className?: string;
}
