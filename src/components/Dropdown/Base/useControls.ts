import { useEffect, useState } from "react";

export const useControls = <T>(
  options: T[],
  onConfirm?: (value: T) => void
) => {
  const [highlighted, setHighlighted] = useState<number | null>(null);

  const [highlightedElement, setHighlightedElement] = useState<T | null>(null);

  useEffect(() => {
    if (highlighted !== null) {
      setHighlightedElement(options[highlighted]);
    } else {
      setHighlightedElement(null);
    }
  }, [highlighted, options]);

  const controls = {
    moveDown: () => {
      const newHighlighted = highlighted === null ? 0 : highlighted + 1;

      if (newHighlighted >= options.length) {
        setHighlighted(options.length - 1);
      } else {
        setHighlighted(newHighlighted);
      }
    },

    moveUp: () => {
      const newHighlighted = highlighted === null ? 0 : highlighted - 1;

      if (newHighlighted < 0) {
        setHighlighted(0);
      } else {
        setHighlighted(newHighlighted);
      }
    },

    reset: () => setHighlighted(null),

    select: (option?: T) => {
      if (onConfirm) {
        if (option && options.includes(option)) {
          onConfirm(option);
        } else if (highlighted !== null) {
          onConfirm(options[highlighted]);
        }
      }

      setHighlighted(null);
    },
  };

  return [highlightedElement, controls] as const;
};
