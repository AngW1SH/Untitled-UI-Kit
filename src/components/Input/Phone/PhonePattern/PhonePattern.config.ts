import { CountrySettings, Country, Filter } from "./PhonePattern.types";

export const addCountryCode = (
  _: string,
  next: string,
  country: CountrySettings
) => {
  if (next === "") return "";

  if (!next.startsWith(country.code)) return country.code + next;

  return next;
};

export const limitLength = (
  _: string,
  next: string,
  country: CountrySettings
) => {
  const numberCount = country.pattern.match(/#/g)?.length || 0;

  return next.slice(0, numberCount);
};

export const countrySettings: Record<Country, CountrySettings> = {
  US: {
    code: "1",
    pattern: "+# (###) ###-####",
    example: "+1 (123) 456 7890",
  },
  RU: {
    code: "7",
    pattern: "+# (###) ### ##-##",
    example: "+7 (900) 000 00-00",
    filters: [
      (prev, next) => {
        if (prev.length === 0 && next[0] === "8") {
          return "7" + next.slice(1);
        }

        return next;
      },
    ],
  },
};

export const commonFilters: Filter[] = [addCountryCode, limitLength];
