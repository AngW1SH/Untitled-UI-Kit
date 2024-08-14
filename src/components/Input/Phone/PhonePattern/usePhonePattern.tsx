import { ChangeEvent, useRef } from "react";
import { useControls } from "./useControls";

export type Country = "US" | "CA" | "RU";

export const usePhonePattern = (country: Country) => {
  const selectionRef = useRef<{ start: number | null; end: number | null }>({
    start: 0,
    end: 0,
  });

  const { value, controls } = useControls(country);

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    selectionRef.current = {
      start: e.target.selectionStart,
      end: e.target.selectionEnd,
    };
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isSelection =
      selectionRef.current.start !== null &&
      selectionRef.current.end !== null &&
      selectionRef.current.start !== selectionRef.current.end;

    const isOneSymbolDeleted = value.length - e.target.value.length == 1;

    // Backspace pressed
    if (!isSelection && isOneSymbolDeleted) {
      controls.pop();
      return;
    }

    controls.set(e.target.value);
  };

  return { value, handleChange, handleSelect };
};
