import styled from "styled-components";

export const BaseMenu = styled.ul`
  box-shadow:
    0 4px 6px -2px rgba(16, 24, 40, 0.03),
    0 12px 16px -4px rgba(16, 24, 40, 0.08);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--color-gray-100);
  width: 320px;
`;

interface ArrowProps {
  $rotate?: boolean;
}
export const Arrow = styled.div<ArrowProps>`
  height: 12px;
  width: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s;

  ${({ $rotate }) => ($rotate ? "transform: rotate(180deg);" : "")}
`;

interface BaseItemProps {
  selected?: boolean;
}
export const BaseItem = styled.li<BaseItemProps>`
  position: relative;
  padding: 10px 40px 10px 14px;
  background-color: var(--color-white);
  cursor: pointer;

  &:hover {
    background-color: var(--color-gray-50);
  }

  ${({ selected }) =>
    selected ? "background-color: var(--color-gray-50);" : ""}
`;

export const BaseItemCheck = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  width: 16px;
`;

export const Selected = styled.div`
  width: max-content;
  overflow: hidden;
  text-overflow: ellipsis;
`;
