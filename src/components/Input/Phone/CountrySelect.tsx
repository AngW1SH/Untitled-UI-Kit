import { FC, useState } from "react";
import { CountryDropdown } from "./Phone.styles";

interface CountrySelectProps {}

type Country = "US" | "CA" | "RU";

const CountrySelect: FC<CountrySelectProps> = () => {
  const [value, setValue] = useState<Country>("US");

  const options: Country[] = ["US", "CA", "RU"];

  return (
    <CountryDropdown
      type="block"
      value={value}
      onChange={setValue}
      options={options}
    />
  );
};

export default CountrySelect;
