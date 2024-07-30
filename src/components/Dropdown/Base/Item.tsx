import { Check } from "@common/Icon";
import { FC, ReactElement } from "react";
import { Item as ItemStyled, ItemCheck } from "./Base.styles";

interface ItemProps {
  highlighted?: boolean;
  selected?: boolean;
  children: ReactElement | string;
  onClick?: () => void;
}

const Item: FC<ItemProps> = ({ children, onClick, highlighted, selected }) => {
  return (
    <ItemStyled $highlighted={highlighted || selected} onClick={onClick}>
      {children}
      {selected && (
        <ItemCheck>
          <Check />
        </ItemCheck>
      )}
    </ItemStyled>
  );
};

export default Item;
