import { useState } from "react";
import { Country } from "./usePhonePattern";
import { Controls } from "./PhonePattern.types";

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
const serializeValue = (value: string) =>
  value
    .split("")
    .filter((char) => !isNaN(+char) && char != " ")
    .join("");

export const useControls = (country: Country) => {
  const [serialized, setSerialized] = useState("");

  const controls: Controls = {
    set: (input: string) => {
      setSerialized(serializeValue(input));
    },
    pop: () => {
      setSerialized((value) => value.slice(0, -1));
    },
  };

  return {
    value: formatValue(serialized, countryPatterns[country]),
    controls,
  };
};
