import Icon from "components/Icon";
import React from "react";
import { Option } from "types/option";
import {
  StyledNavItemWraper,
  StyledNavItemInnerWraper,
  StyledNavItemText,
} from "./StyledNavItem";

const TokenOption: React.FC<{ option: Option }> = ({ option }) => {
  return (
    <StyledNavItemWraper to={"trade/" + option.code}>
      <StyledNavItemInnerWraper>
        <Icon name={option.logoName} height="22px" />
        <StyledNavItemText>{option.name}</StyledNavItemText>
      </StyledNavItemInnerWraper>
    </StyledNavItemWraper>
  );
};

export default TokenOption;
