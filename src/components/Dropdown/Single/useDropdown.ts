import { KeyboardEvent, ReactElement, RefObject, useState } from "react";
import { useControls, useOpen } from "../Base";

export const useDropdown = (
  ref: RefObject<HTMLDivElement>,
  options: (ReactElement | string)[],
  value?: ReactElement | string | null
) => {
  const [open, setOpen] = useOpen(ref);
  const [selected, setSelected] = useState(value || null);

  const [highlighted, controls] = useControls(options, (option) => {
    setSelected(option);
  });

  const handleClickItem = (option: ReactElement | string) => {
    setSelected(option);
    setOpen(false);
    controls.reset();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!open) {
      switch (e.key) {
        case "Enter":
        case " ":
          setOpen(true);
          break;
      }
    } else {
      switch (e.key) {
        case "ArrowUp":
          controls.moveUp();
          break;
        case "ArrowDown":
          controls.moveDown();
          break;
        case "Enter":
        case " ":
          controls.select();
          setOpen(false);
          break;
        case "Escape":
          setOpen(false);
          break;
      }
    }
  };

  return {
    open,
    setOpen,
    selected,
    highlighted,
    handleClickItem,
    handleKeyDown,
  };
};
