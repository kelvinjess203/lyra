import styled from "styled-components";
import { SelectProps } from "./types";

export const StyledSelect = styled.div<SelectProps>`
  width: ${({ width }) => width ?? "100%"};

  border: ${({ border, theme }) => border ?? theme.input.border};
  background: ${({ background, theme }) =>
    background ?? theme.input.background};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 12px;
  padding-top: 7px;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borderRadius}px;

  cursor: pointer;
  span {
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    color: ${({ theme }) => theme.input.color};
  }

  &:hover {
    opacity: 0.9;
  }
`;
