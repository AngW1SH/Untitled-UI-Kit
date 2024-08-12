import { ReactElement, useEffect, useState } from "react";

export const useControls = (
  options: (ReactElement | string)[],
  onConfirm?: (value: ReactElement | string) => void
) => {
  const [highlighted, setHighlighted] = useState<number | null>(null);

  const [highlightedElement, setHighlightedElement] = useState<
    ReactElement | string | null
  >(null);

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

    select: (option?: ReactElement | string) => {
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
