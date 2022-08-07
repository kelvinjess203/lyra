import styled, { DefaultTheme } from "styled-components";
import { CardProps } from "./types";

interface StyledCardProps extends CardProps {
  theme: DefaultTheme;
}

export const StyledCardInner = styled.div<StyledCardProps>`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  background: ${({ theme, background }) => background ?? theme.card.background};
  padding: ${({ theme, padding }) => padding ?? theme.card.padding};
  border: ${({ theme, border }) => border ?? theme.card.border};
  box-sizing: border-box;

  color: ${({ theme }) => theme.card.textColor};
  position: relative;
  transition: 0.2s;
`;

export const StyledCardContent = styled.div`
  overflow: hidden;
  height: 0px;

  &.expanded {
    height: 100%;
    overflow: unset;
  }
`;

export const StyledCardHeader = styled.div<StyledCardProps>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 12px;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  margin-bottom: 8px;

  cursor: pointer;
  span {
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    color: ${({ theme }) => theme.card.headingColor};
  }

  &:hover {
    background: rgba(225, 225, 225, 0.1);
  }
`;

export const StyledCardHeaderWrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: ${({ theme }) => theme.card.border};
`;
