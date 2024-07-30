import { ToggleOpen } from "@common/ToggleOpen";
import { FC, KeyboardEvent, ReactElement, useRef, useState } from "react";
import { Input } from "@components/Input";
import { useOpen, useControls, Arrow, Menu, Item } from "../Base";
import { Selected } from "../Base/Base.styles";

interface BaseProps {
  options: (ReactElement | string)[];
  value?: ReactElement | string | null;
  onChange?: (value: ReactElement | string) => void;
}

const Base: FC<BaseProps> = ({ value, options }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useOpen(ref);
  const [selected, setSelected] = useState(value || null);

  const [highlighted, controls] = useControls(options, (option) => {
    setSelected(option);
  });

  const handleClick = (option: ReactElement | string) => {
    setSelected(option);
    setOpen(false);
    controls.reset();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!open) {
      switch (e.key) {
        case "Enter":
          setOpen(true);
          break;
      }
    } else {
      switch (e.key) {
        case "ArrowUp":
          controls.moveUp();
          break;
        case "ArrowDown":
          controls.moveDown();
          break;
        case "Enter":
          controls.select();
          setOpen(false);
          break;
      }
    }
  };

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
        <Menu>
          {options.map((option) => (
            <Item
              highlighted={option === highlighted}
              selected={option === selected}
              key={option.toString()}
              onClick={() => handleClick(option)}
            >
              {option}
            </Item>
          ))}
        </Menu>
      </ToggleOpen>
    </div>
  );
};

export default Base;
