import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNavItemWraper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  margin-bottom: 8px;
  box-sizing: border-box;

  border-radius: ${({ theme }) => theme.borderRadius}px;

  &.active {
    background: linear-gradient(
      85.73deg,
      #12131a91 0%,
      #1a1b2496 100%
    ) !important;
  }

  &:hover {
    background: rgba(225, 225, 225, 0.1);
  }
`;

export const StyledNavItemInnerWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledNavItemText = styled.span`
  margin-left: 8px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
`;
