import { FC } from "react";
import { Base } from "../Base";
import CountrySelect from "./CountrySelect";

interface PhoneProps {}

const Phone: FC<PhoneProps> = () => {
  return <Base innerLeft={<CountrySelect />} placeholder="+1 (555) 555-5555" />;
};

export default Phone;
