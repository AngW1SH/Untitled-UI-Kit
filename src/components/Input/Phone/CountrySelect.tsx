import { FC } from "react";
import { CountryDropdown } from "./Phone.styles";
import { Country } from "./PhonePattern/PhonePattern.types";

interface CountrySelectProps {
  value: Country;
  onChange: (value: Country) => void;
}

const CountrySelect: FC<CountrySelectProps> = ({ value, onChange }) => {
  const options: Country[] = ["US", "RU"];

  return (
    <CountryDropdown
      type="block"
      value={value}
      onChange={onChange}
      options={options}
    />
  );
};

export default CountrySelect;
