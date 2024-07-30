import { ReactElement, useState } from "react";
import Base from ".";

export default {
  title: "Dropdown",
};

export const Default = () => {
  const [selected, setSelected] = useState<ReactElement | string>("Option 1");

  return (
    <Base
      value={selected}
      onChange={setSelected}
      options={["Option 1", "Option 2", "Option 3"]}
    />
  );
};
