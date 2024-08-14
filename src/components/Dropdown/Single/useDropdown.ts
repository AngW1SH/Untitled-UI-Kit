import { ReactElement, RefObject, useEffect, useState } from "react";
import { useControls, useOpen } from "../Base";
import { useEvents } from "../Base/useEvents";

export const useDropdown = <T extends string | ReactElement>(
  ref: RefObject<HTMLDivElement>,
  options: T[],
  value?: T | null,
  onChange?: (value: T) => void
) => {
  const [open, setOpen] = useOpen(ref);
  const [selected, setSelected] = useState(value || null);

  const [highlighted, controls] = useControls(options, (option) => {
    setSelected(option);
  });

  const [handleClickItem, handleKeyDown] = useEvents(controls, open, setOpen);

  useEffect(() => {
    if (setOpen) setOpen(false);
  }, [selected, setOpen]);

  useEffect(() => {
    if (onChange && selected) onChange(selected);
  }, [selected, onChange]);

  return {
    open,
    setOpen,
    selected,
    highlighted,
    handleClickItem,
    handleKeyDown,
  };
};
