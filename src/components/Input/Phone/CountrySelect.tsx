import { FC, ReactElement, useState } from "react";
import { CountryDropdown } from "./Phone.styles";

interface CountrySelectProps {}

const CountrySelect: FC<CountrySelectProps> = () => {
  const [value, setValue] = useState("US");

  const options = ["US", "CA", "RU"];

  const handleChange = (element: ReactElement | string) => [
    setValue(element.toString()),
  ];

  return (
    <CountryDropdown
      type="block"
      value={value}
      onChange={handleChange}
      options={options}
    />
  );
};

export default CountrySelect;
