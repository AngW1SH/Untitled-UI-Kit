import { FC } from "react";
import { SocialGroupProps } from "./SocialGroup.types";
import { Social } from "./Social";
import { SocialGroupStyled } from "./SocialGroup.styles";

const SocialGroup: FC<SocialGroupProps> = ({
  companies,
  direction = "row",
  ...buttonProps
}) => {
  return (
    <SocialGroupStyled direction={direction}>
      {companies.map((company) => (
        <Social key={company} {...buttonProps} company={company} />
      ))}
    </SocialGroupStyled>
  );
};

export default SocialGroup;
