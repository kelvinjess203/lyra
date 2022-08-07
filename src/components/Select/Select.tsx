import { CollapsibleIconButton } from "components/Styled";
import React, { useCallback, useState } from "react";
import { StyledSelect } from "./StyledSelect";
import { SelectProps } from "./types";

const Select: React.FC<SelectProps> = ({ border, title, ...props }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOpen = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [setIsExpanded, isExpanded]);

  return (
    <>
      <StyledSelect {...props} onClick={handleOpen}>
        <span>Expiring May 27th, 2022, 11:00 AM</span>
        <CollapsibleIconButton
          name="caret_down.svg"
          height="15px"
          className={isExpanded ? "expanded" : ""}
        />
      </StyledSelect>
    </>
  );
};
export default Select;
