import { FC } from "react";
import { Company, SocialProps } from "./Social.types";
import { SocialButtonStyled } from "./Social.styles";
import { IconWrapper } from "../IconWrapper";
import {
  Apple,
  Dribbble,
  Facebook,
  Figma,
  Google,
  Twitter,
  X,
} from "@common/Icon";

export const message = (company: Company): string => {
  switch (company) {
    case "google":
      return "Sign in with Google";
    case "facebook":
      return "Sign in with Facebook";
    case "apple":
      return "Sign in with Apple";
    case "twitter":
      return "Sign in with Twitter";
    case "x":
      return "Sign in with Twitter";
    case "figma":
      return "Sign in with Figma";
    case "dribbble":
      return "Sign in with Dribbble";
    default:
      return "";
  }
};

export const Icon: FC<SocialProps> = ({ company, variant }) => {
  switch (company) {
    case "google":
      return <Google variant={variant} />;
    case "facebook":
      return <Facebook variant={variant} />;
    case "apple":
      return <Apple variant={variant} />;
    case "twitter":
      return <Twitter variant={variant} />;
    case "x":
      return <X variant={variant} />;
    case "figma":
      return <Figma variant={variant} />;
    case "dribbble":
      return <Dribbble variant={variant} />;
    default:
      return <Google variant={variant} />;
  }
};

export const Social: FC<SocialProps> = ({
  company,
  variant,
  iconOnly = false,
}) => {
  return (
    <SocialButtonStyled
      company={company}
      variant={variant}
      size="md"
      fontSize="md"
      danger={false}
      isSquare={iconOnly}
    >
      <IconWrapper size="2xl">
        <Icon company={company} variant={variant} />
      </IconWrapper>
      {!iconOnly && message(company)}
    </SocialButtonStyled>
  );
};
