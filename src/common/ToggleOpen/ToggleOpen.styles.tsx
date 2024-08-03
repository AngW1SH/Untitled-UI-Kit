import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Trigger = styled.div``;

interface ContentBoxProps {
  open: boolean;
  position: "top" | "bottom";
}

export const ContentBox = styled.div<ContentBoxProps>`
  position: absolute;
  transition: opacity 0.3s;
  width: max-content;

  ${({ open }) => (open ? "opacity: 1;" : "opacity: 0;")}
  ${({ position }) => {
    if (position == "top")
      return css`
        bottom: 100%;
        padding-bottom: 10px;
      `;

    return css`
      top: 100%;
      padding-top: 10px;
    `;
  }}
`;

export const Content = styled.div``;
