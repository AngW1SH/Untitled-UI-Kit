import { ReactElement, RefObject, useEffect, useState } from "react";
import { useControls, useOpen } from "../Base";
import { useEvents } from "../Base/useEvents";

export const useDropdown = <T extends string | ReactElement>(
  ref: RefObject<HTMLDivElement>,
  options: T[],
  value?: T | null
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

  return {
    open,
    setOpen,
    selected,
    highlighted,
    handleClickItem,
    handleKeyDown,
  };
};
