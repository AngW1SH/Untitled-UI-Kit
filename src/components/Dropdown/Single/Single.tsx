import { ToggleVisibility } from "@common/ToggleVisibility";
import { ReactElement, useId, useRef } from "react";
import { useDropdown } from "./useDropdown";
import Menu from "../Base/Menu";
import Trigger from "./Trigger";
import { BaseProps } from "../Base/Base.types";

const Base = <T extends string | ReactElement>({
  value,
  options,
  type = "input",
  className,
}: BaseProps<T>) => {
  const ref = useRef<HTMLDivElement>(null);

  const menuId = useId();

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
      <ToggleVisibility
        open={open}
        onChange={setOpen}
        trigger={
          <Trigger
            type={type}
            selected={selected}
            menuId={menuId}
            open={open}
          />
        }
      >
        <Menu
          id={menuId}
          options={options}
          highlighted={highlighted}
          selected={selected}
          onClick={handleClickItem}
        />
      </ToggleVisibility>
    </div>
  );
};

export default Base;
