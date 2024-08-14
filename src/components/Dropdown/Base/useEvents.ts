import { KeyboardEvent } from "react";
import { Controls } from "./Base.types";

export const useEvents = <T>(
  controls: Controls<T>,
  open: boolean,
  setOpen: (open: boolean) => void
) => {
  const handleClickItem = (option: T) => {
    controls.select(option);
    setOpen(false);
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
          break;
        case "Escape":
          setOpen(false);
          break;
      }
    }
  };

  return [handleClickItem, handleKeyDown] as const;
};
