import { useControls } from "./useControls";
import { useEvents } from "./useEvents";

export type Country = "US" | "CA" | "RU";

export const usePhonePattern = (country: Country) => {
  const { value, controls } = useControls(country);

  const { handleChange, handleSelect } = useEvents(controls, value);

  return { value, handleChange, handleSelect };
};
