import { ChangeEvent, useRef } from "react";
import { Controls } from "./PhonePattern.types";

export const useEvents = (controls: Controls, value: string) => {
  const selectionRef = useRef<{ start: number | null; end: number | null }>({
    start: 0,
    end: 0,
  });

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

  return { handleChange, handleSelect };
};
