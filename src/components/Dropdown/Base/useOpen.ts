import { RefObject, useEffect, useState } from "react";

export const useOpen = (ref: RefObject<HTMLDivElement>) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => window.removeEventListener("click", handleClickOutside);
  }, [ref]);

  return [open, setOpen] as const;
};
