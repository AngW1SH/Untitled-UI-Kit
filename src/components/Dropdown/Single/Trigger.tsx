import { Input } from "@components/Input";
import { FC, ReactElement } from "react";
import { Selected } from "../Base/Base.styles";
import { Arrow } from "../Base";
import { Block } from "./Single.styles";

interface TriggerProps {
  type: "input" | "block";
  selected: ReactElement | string | null;
  open?: boolean;
}

const Trigger: FC<TriggerProps> = ({ type, selected, open }) => {
  switch (type) {
    case "input":
      return (
        <Input
          readOnly
          placeholder={selected ? "" : "Select an option"}
          innerLeft={<Selected>{selected}</Selected>}
          innerRight={<Arrow open={open} />}
        />
      );
    case "block":
      return (
        <Block>
          <div>{selected}</div>
          <Arrow open={open} />
        </Block>
      );
    default:
      throw new Error("Unsupported type");
  }
};

export default Trigger;
