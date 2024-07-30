import { Check } from "@common/Icon";
import { FC, ReactElement } from "react";
import { BaseItem, BaseItemCheck } from "./Base.styles";

interface ItemProps {
  selected?: boolean;
  children: ReactElement | string;
  onClick?: () => void;
}

const Item: FC<ItemProps> = ({ selected, children, onClick }) => {
  return (
    <BaseItem selected={selected} onClick={onClick}>
      {children}
      {selected && (
        <BaseItemCheck>
          <Check />
        </BaseItemCheck>
      )}
    </BaseItem>
  );
};

export default Item;
