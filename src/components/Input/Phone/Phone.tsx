import { FC, useState } from "react";
import { Base } from "../Base";
import CountrySelect from "./CountrySelect";
import { usePhonePattern } from "./PhonePattern/usePhonePattern";
import { Country } from "./PhonePattern/PhonePattern.types";

interface PhoneProps {}

const Phone: FC<PhoneProps> = () => {
  const [country, setCountry] = useState<Country>("US");
  const { value, handleChange, handleSelect } = usePhonePattern(country);

  return (
    <Base
      innerLeft={<CountrySelect value={country} onChange={setCountry} />}
      value={value}
      onChange={handleChange}
      onSelect={handleSelect}
      placeholder="+1 (555) 555-5555"
    />
  );
};

export default Phone;
