import { ToggleOpen } from "@common/ToggleOpen";
import {
  FC,
  KeyboardEvent,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { Input } from "@components/Input";
import { useOpen, useControls, Arrow, Menu, Item } from "../Base";
import { Selected } from "../Base/Base.styles";

interface MultiselectProps {
  options: (ReactElement | string)[];
  value?: (ReactElement | string)[];
  onChange?: (value: (ReactElement | string)[]) => void;
}

const Multiselect: FC<MultiselectProps> = ({ value, options, onChange }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useOpen(ref);
  const [selected, setSelected] = useState(value || []);

  const toggleOption = (option: ReactElement | string) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((o) => o !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  const [highlighted, controls] = useControls(options, (option) => {
    toggleOption(option);
  });

  const handleClick = (option: ReactElement | string) => {
    toggleOption(option);
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
          break;
      }
    }
  };

  useEffect(() => {
    if (onChange) onChange(selected);
  }, [selected, onChange]);

  return (
    <div ref={ref} onKeyDown={handleKeyDown}>
      <ToggleOpen
        open={open}
        onChange={setOpen}
        trigger={
          <Input
            readOnly
            innerLeft={<Selected>{selected.length} elements selected</Selected>}
            innerRight={<Arrow />}
          />
        }
      >
        <Menu>
          {options.map((option) => (
            <Item
              highlighted={option === highlighted}
              selected={selected.includes(option)}
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

export default Multiselect;
