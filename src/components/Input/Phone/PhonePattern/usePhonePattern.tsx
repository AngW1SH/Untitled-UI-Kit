import { ChangeEvent, useRef, useState } from "react";

type Country = "US" | "CA" | "RU";

const countryPatterns: Record<Country, string> = {
  US: "+ (###) ###-####",
  CA: "(###) ###-####",
  RU: "(###) ###-####",
};

// Turns number-only string into formatted string
const formatValue = (value: string, pattern: string) => {
  if (value.length === 0) return "";

  let result = pattern;

  // replace '#' and find the last replaced number's index in the 'result' string
  let currentPosition = 0;
  for (let i = 0; i < result.length && currentPosition < value.length; i++) {
    if (result[i] === "#") {
      result =
        result.slice(0, i) + value[currentPosition] + result.slice(i + 1);
      currentPosition++;
    }
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] === "#") return result.slice(0, i);
  }

  return result;
};

// turn a string into a number-only string
const getNumberValue = (value: string) =>
  value
    .split("")
    .filter((char) => !isNaN(+char) && char != " ")
    .join("");

const sliceFormattedValue = (value: string, targetNumberCount: number) => {
  let counter = 0;
  for (let i = 0; i < value.length; i++) {
    if (!isNaN(+value[i]) && value[i] !== " ") {
      counter++;
    }

    if (counter == targetNumberCount) {
      return value.slice(0, i + 1);
    }
  }

  return value;
};

export const usePhonePattern = (country: Country) => {
  const [value, setValue] = useState("");
  const selectionRef = useRef<{ start: number | null; end: number | null }>({
    start: 0,
    end: 0,
  });

  const pattern = countryPatterns[country];

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

    const isOneSymbolDeleted =
      formatValue(value, pattern).length - e.target.value.length == 1;

    // Backspace pressed
    if (!isSelection && isOneSymbolDeleted) {
      const numberCount = value.length - 1;
      setValue(getNumberValue(sliceFormattedValue(value, numberCount)));
    }

    setValue(getNumberValue(e.target.value));
  };

  return { value: formatValue(value, pattern), handleChange, handleSelect };
};
