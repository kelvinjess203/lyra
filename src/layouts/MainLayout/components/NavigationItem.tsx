import React from "react";
import { NavItem } from "types/nav";
import { checkPage } from "util/location";
import {
  StyledNavItemWraper,
  StyledNavItemInnerWraper,
  StyledNavItemText,
} from "./StyledNavItem";

const NavigationItem: React.FC<{ item: NavItem }> = ({ item }) => {
  return (
    <StyledNavItemWraper
      to={item.code}
      className={checkPage(item.code) ? "active" : ""}
    >
      <StyledNavItemInnerWraper>
        {item.icon}
        <StyledNavItemText>{item.name}</StyledNavItemText>
      </StyledNavItemInnerWraper>
    </StyledNavItemWraper>
  );
};

export default NavigationItem;
