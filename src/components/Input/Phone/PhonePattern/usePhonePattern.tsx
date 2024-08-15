import { Country } from "./PhonePattern.types";
import { useControls } from "./useControls";
import { useEvents } from "./useEvents";

export const usePhonePattern = (country: Country) => {
  const { value, controls } = useControls(country);

  const { handleChange, handleSelect } = useEvents(controls, value);

  return { value, handleChange, handleSelect };
};
