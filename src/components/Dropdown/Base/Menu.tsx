import { ReactElement } from "react";
import { Menu as MenuStyled } from "./Base.styles";
import Item from "./Item";

interface MenuProps<T> {
  id?: string;
  options: T[];
  highlighted?: T | null;
  selected?: T | null;
  onClick: (value: T) => void;
}

const Menu = <T extends string | ReactElement>({
  options,
  highlighted,
  selected,
  onClick,
  id,
}: MenuProps<T>) => {
  return (
    <MenuStyled role="listbox" id={id}>
      {options.map((option) => (
        <Item
          highlighted={option === highlighted}
          selected={option === selected}
          aria-selected={option === selected}
          key={option.toString()}
          onClick={() => onClick(option)}
        >
          {option}
        </Item>
      ))}
    </MenuStyled>
  );
};

export default Menu;
