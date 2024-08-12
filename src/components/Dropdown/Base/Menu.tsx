import { FC, ReactElement } from "react";
import { Menu as MenuStyled } from "./Base.styles";
import Item from "./Item";

interface MenuProps {
  id?: string;
  options: (ReactElement | string)[];
  highlighted?: ReactElement | string | null;
  selected?: ReactElement | string | null;
  onClick: (value: ReactElement | string) => void;
}

const Menu: FC<MenuProps> = ({
  options,
  highlighted,
  selected,
  onClick,
  id,
}) => {
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
