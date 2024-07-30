import { ReactElement, useState } from "react";
import MultiselectComponent from "./Multiselect";

export default {
  title: "Dropdown",
};

export const Multiselect = () => {
  const [selected, setSelected] = useState<(ReactElement | string)[]>([]);

  return (
    <MultiselectComponent
      value={selected}
      onChange={setSelected}
      options={["Option 1", "Option 2", "Option 3"]}
    />
  );
};
