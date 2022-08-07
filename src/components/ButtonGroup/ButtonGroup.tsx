import Button from "components/Button/Button";
import React from "react";
import { StyledButtonGroup } from "./StyledButtonGroup";
import { ButtonGroupProps } from "./types";

const defaultActiveBackground =
  "linear-gradient(90deg, #02AAB0 0%, #00CDAC 100%)";
const defaultInActiveBackground =
  "linear-gradient(85.73deg, #12131A 0%, #1A1B24 100%), #FFFFFF";

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  items,
  value,
  activeBackground,
  defaultBackground,
  buttonStyle,
  onChange,
  ...props
}) => {
  return (
    <StyledButtonGroup {...props}>
      {items.map((item) => (
        <Button
          onClick={() => {
            onChange(item.value);
          }}
          key={item.value}
          background={
            value === item.value
              ? activeBackground ?? defaultActiveBackground
              : defaultBackground ?? defaultInActiveBackground
          }
          style={{ marginRight: 12, ...buttonStyle }}
        >
          {item.label}
        </Button>
      ))}
    </StyledButtonGroup>
  );
};
export default ButtonGroup;
