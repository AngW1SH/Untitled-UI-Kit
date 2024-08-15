export interface Controls {
  set: (value: string) => void;
  pop: () => void;
}

export type Filter = (
  prev: string,
  next: string,
  settings: CountrySettings
) => string;

export interface CountrySettings {
  code: string;
  pattern: string;
  example: string;
  filters?: Filter[];
}

export type Country = "US" | "RU";
