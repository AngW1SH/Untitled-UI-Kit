import { ToggleOpen } from "@common/ToggleOpen";
import { FC, ReactElement, useEffect, useRef, useState } from "react";
import { Arrow, BaseMenu, Selected } from "./Base.styles";
import { Input } from "@components/Input";
import { ChevronDown } from "@common/Icon";
import Item from "./Item";

interface BaseProps {
  options: (ReactElement | string)[];
  value: ReactElement | string;
  onChange: (value: ReactElement | string) => void;
}

const Base: FC<BaseProps> = ({ value, onChange, options }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const [selected, setSelected] = useState(value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    if (onChange) onChange(selected);
  }, [selected, onChange]);

  return (
    <div ref={ref}>
      <ToggleOpen
        open={open}
        onChange={setOpen}
        trigger={
          <Input
            readOnly
            innerLeft={<Selected>{selected}</Selected>}
            innerRight={
              <Arrow $rotate={open}>
                <ChevronDown />
              </Arrow>
            }
          />
        }
      >
        <BaseMenu>
          {options.map((option) => (
            <Item
              selected={option === selected}
              key={option.toString()}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
            >
              {option}
            </Item>
          ))}
        </BaseMenu>
      </ToggleOpen>
    </div>
  );
};

export default Base;
