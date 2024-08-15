import { useState } from "react";
import { Controls, Country, CountrySettings } from "./PhonePattern.types";
import { commonFilters, countrySettings } from "./PhonePattern.config";

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

const applyFilters = (
  prev: string,
  next: string,
  settings: CountrySettings
) => {
  const countryFilters = settings.filters || [];
  const filters = [...countryFilters, ...commonFilters];

  return filters.reduce((value, filter) => filter(prev, value, settings), next);
};

export const useControls = (country: Country) => {
  const [serialized, setSerialized] = useState("");
  const settings = countrySettings[country];

  const controls: Controls = {
    set: (input: string) => {
      const serializedInput = serializeValue(input);

      setSerialized(applyFilters(serialized, serializedInput, settings));
    },
    pop: () => {
      setSerialized((value) =>
        applyFilters(serialized, value.slice(0, -1), settings)
      );
    },
  };

  return {
    value: formatValue(serialized, countrySettings[country].pattern),
    controls,
  };
};
