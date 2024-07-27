import { FC } from "react";
import { Base } from "../Base";
import { Email as Icon } from "@common/Icon";
import { CommonProps } from "../Base";
import { IconWrapper } from "./Email.styles";

export interface EmailProps extends CommonProps {
  type: "email";
}

const Email: FC<EmailProps> = (props) => {
  return (
    <Base
      {...props}
      type="email"
      innerLeft={
        <IconWrapper>
          <Icon />
        </IconWrapper>
      }
    />
  );
};

export default Email;
