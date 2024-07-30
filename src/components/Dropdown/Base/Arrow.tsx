import { FC } from "react";
import { Arrow as ArrowStyled } from "./Base.styles";
import { ChevronDown } from "@common/Icon";

interface ArrowProps {
  open?: boolean;
}

const Arrow: FC<ArrowProps> = ({ open }) => {
  return (
    <ArrowStyled $rotate={open}>
      <ChevronDown />
    </ArrowStyled>
  );
};

export default Arrow;
