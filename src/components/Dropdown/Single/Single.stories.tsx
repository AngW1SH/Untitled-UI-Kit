import { ReactElement, useState } from "react";
import Base from "./Single";

export default {
  title: "Dropdown",
};

export const Default = () => {
  const [selected, setSelected] = useState<ReactElement | string | null>(null);

  return (
    <Base
      value={selected}
      onChange={setSelected}
      options={["Option 1", "Option 2", "Option 3"]}
    />
  );
};
