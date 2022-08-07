import styled, { DefaultTheme } from "styled-components";
import { BaseButtonProps } from "./types";

interface ThemedButtonProps extends BaseButtonProps {
  theme: DefaultTheme;
}

interface TransientButtonProps extends ThemedButtonProps {
  $isLoading?: boolean;
}

const getDisabledStyles = ({ $isLoading, theme }: TransientButtonProps) => {
  if ($isLoading === true) {
    return `
      &:disabled,
      &.button--disabled {
        cursor: not-allowed;
      }
    `;
  }

  return `
    &:disabled,
    &.button--disabled {
      box-shadow: none;
      cursor: not-allowed;
    }
  `;
};

/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */

const StyledButton = styled.button<BaseButtonProps>`
  cursor: pointer;
  padding: 10px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: unset;
  transition: 0.5s;

  background: ${({ theme, background }) =>
    background ?? theme.button.backgroundColor};
  width: ${({ width }) => width ?? "auto"};
  color: ${(props) => props.theme.button.textColor};
  border-radius: ${(props) => props.theme.borderRadius}px;
  font-size: 14px;

  &:hover:not(:disabled):not(.button--disabled):not(.button--disabled):not(:active) {
    opacity: 0.65;
  }

  &:active:not(:disabled):not(.button--disabled):not(.button--disabled) {
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
  }

  ${getDisabledStyles}
`;

export default StyledButton;
