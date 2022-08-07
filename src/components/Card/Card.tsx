import React, { useCallback, useState } from "react";
import CardHeader from "./CardHeader";
import { StyledCardContent, StyledCardInner } from "./StyledCard";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({
  children,
  background,
  border,
  title,
  isCollapsible,
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleCollapsible = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [setIsExpanded, isExpanded]);

  return (
    <StyledCardInner background={background} border={border} {...props}>
      <CardHeader
        title={title}
        isCollapsible={isCollapsible}
        isExpanded={isExpanded}
        handleCollapsible={handleCollapsible}
      />
      <StyledCardContent className={isExpanded ? "expanded" : ""}>
        {children}
      </StyledCardContent>
    </StyledCardInner>
  );
};
export default Card;
