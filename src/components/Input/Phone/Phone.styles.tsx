import { Dropdown, DropdownTriggerBlock } from "@components/Dropdown";
import styled from "styled-components";

export const CountryDropdown = styled(Dropdown)`
  height: 100%;
  display: flex;
  align-items: center;

  & ${DropdownTriggerBlock} {
    padding-left: 14px;
    justify-content: flex-start;
  }
`;
