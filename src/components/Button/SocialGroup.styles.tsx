import styled from "styled-components";

interface SocialGroupStyledProps {
  direction: "row" | "column";
}
export const SocialGroupStyled = styled.div<SocialGroupStyledProps>`
  display: flex;
  justify-content: stretch;
  flex-direction: ${(props) =>
    props.direction === "column" ? "column" : "row"};
  gap: 12px;

  & > button {
    flex: 1;
  }
`;
