import { FC, ReactElement } from "react";
import { Menu as MenuStyled } from "./Base.styles";
import Item from "./Item";

interface MenuProps {
  options: (ReactElement | string)[];
  highlighted?: ReactElement | string | null;
  selected?: ReactElement | string | null;
  onClick: (value: ReactElement | string) => void;
}

const Menu: FC<MenuProps> = ({ options, highlighted, selected, onClick }) => {
  return (
    <MenuStyled>
      {options.map((option) => (
        <Item
          highlighted={option === highlighted}
          selected={option === selected}
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
