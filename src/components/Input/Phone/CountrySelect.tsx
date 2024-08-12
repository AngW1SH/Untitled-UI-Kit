import { FC, useState } from "react";
import { CountryDropdown } from "./Phone.styles";

interface CountrySelectProps {}

const CountrySelect: FC<CountrySelectProps> = () => {
  const [value, setValue] = useState("US");

  const options = ["US", "CA", "RU"];

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
