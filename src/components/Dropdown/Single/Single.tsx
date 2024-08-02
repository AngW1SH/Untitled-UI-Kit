import { ToggleOpen } from "@common/ToggleOpen";
import { FC, ReactElement, useRef } from "react";
import { useDropdown } from "./useDropdown";
import Menu from "../Base/Menu";
import Trigger from "./Trigger";

interface BaseProps {
  options: (ReactElement | string)[];
  value?: ReactElement | string | null;
  onChange?: (value: ReactElement | string) => void;
  type?: "input" | "block";
  className?: string;
}

const Base: FC<BaseProps> = ({ value, options, type = "input", className }) => {
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
    <div ref={ref} onKeyDown={handleKeyDown} className={className}>
      <ToggleOpen
        open={open}
        onChange={setOpen}
        trigger={<Trigger type={type} selected={selected} open={open} />}
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
