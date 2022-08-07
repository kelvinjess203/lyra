import styled from "styled-components";
import Icon from "./Icon";

export const CollapsibleIconButton = styled(Icon)`
  border-radius: 50%;
  padding: 4px;
  box-sizing: content-box;
  transition: 0.2s;
  transform: rotate(180deg);

  &.expanded {
    transform: rotate(0deg);
  }
`;
