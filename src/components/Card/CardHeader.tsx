import { CollapsibleIconButton } from "components/Styled";
import React from "react";
import { StyledCardHeader } from "./StyledCard";
import { CardHeaderProps } from "./types";

const CardHeader: React.FC<CardHeaderProps> = ({
  isCollapsible,
  isExpanded,
  title,
  handleCollapsible,
  ...props
}) => {
  return isCollapsible || title ? (
    <StyledCardHeader {...props} onClick={handleCollapsible}>
      <span>{title}</span>
      <CollapsibleIconButton
        name="caret_down.svg"
        height="15px"
        className={isExpanded ? "expanded" : ""}
      />
    </StyledCardHeader>
  ) : null;
};

export default CardHeader;
