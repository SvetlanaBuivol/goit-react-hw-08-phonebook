import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavLinkStyled = styled(NavLink)`
  
  &:hover {
    color: #f15a24;
  }

  &.active {
    color: #f15a24;
    font-weight: bold;
  }
`;