import { ToggleOpen } from "@common/ToggleOpen";
import { FC, ReactElement, useRef } from "react";
import { Input } from "@components/Input";
import { Arrow } from "../Base";
import { Selected } from "../Base/Base.styles";
import { useDropdown } from "./useDropdown";
import Menu from "../Base/Menu";

interface BaseProps {
  options: (ReactElement | string)[];
  value?: ReactElement | string | null;
  onChange?: (value: ReactElement | string) => void;
}

const Base: FC<BaseProps> = ({ value, options }) => {
  const ref = useRef<HTMLDivElement>(null);

  const {
    open,
    setOpen,
    selected,
    highlighted,
    handleClickItem,
    handleKeyDown,
  } = useDropdown(ref, options, value);

  return (
    <div ref={ref} onKeyDown={handleKeyDown}>
      <ToggleOpen
        open={open}
        onChange={setOpen}
        trigger={
          <Input
            readOnly
            placeholder={selected ? "" : "Select an option"}
            innerLeft={<Selected>{selected}</Selected>}
            innerRight={<Arrow />}
          />
        }
      >
        <Menu
          options={options}
          highlighted={highlighted}
          selected={selected}
          onClick={handleClickItem}
        />
      </ToggleOpen>
    </div>
  );
};

export default Base;
