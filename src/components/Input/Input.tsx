import styled from "styled-components";
import { InputProps } from "./types";

const Input = styled.input<InputProps>`
  min-width: 0;
  width: ${({ width }) => width ?? "100%"};
  margin: 0;
  padding: ${({ padding }) => padding ?? "6px 12px"};
  background: ${({ theme, background }) =>
    background ?? theme.input.background};
  outline: none;
  border: ${({ theme, border }) => border ?? theme.input.border};
  font-size: ${({ fontSize }) => fontSize ?? "12px"};
  color: ${({ theme }) => theme.text.subColor};

  border-radius: ${({ theme }) => theme.borderRadius}px;
`;

export default Input;
