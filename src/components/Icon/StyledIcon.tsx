import styled from "styled-components";
import { IconProps } from "./types";

export const StyledIcon = styled.img<IconProps>`
  height: ${({ height }) => height ?? "100%"};
  width: ${({ height }) => height ?? "100%"};
`;
