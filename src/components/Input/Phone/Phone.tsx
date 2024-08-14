import { FC } from "react";
import { Base } from "../Base";
import CountrySelect from "./CountrySelect";
import { usePhonePattern } from "./usePhonePattern";

interface PhoneProps {}

const Phone: FC<PhoneProps> = () => {
  const { value, handleChange, handleSelect } = usePhonePattern("US");

  return (
    <Base
      innerLeft={<CountrySelect />}
      value={value}
      onChange={handleChange}
      onSelect={handleSelect}
      placeholder="+1 (555) 555-5555"
    />
  );
};

export default Phone;
