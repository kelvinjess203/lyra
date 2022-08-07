import React from "react";
import styled from "styled-components";
import ReactTooltip, { TooltipProps } from "react-tooltip";

export interface TooltipConfig extends TooltipProps {
  id: string;
  getContent?: any;
}

const Tooltip: React.FC<TooltipConfig> = ({
  id,
  getContent,
  children,
  ...props
}) => {
  return (
    <StyledTooltip {...props} id={id} type="dark" effect="solid">
      {children}
    </StyledTooltip>
  );
};

const StyledTooltip = styled(ReactTooltip)`
  color: ${({ theme }) => theme.card.textColor} !important;
  max-width: max-content;
  font-weight: 300;
  font-size: 12px !important;

  &.__react_component_tooltip {
    transition: all 0.1s ease 0s !important;
    background: ${({ theme }) => theme.input.background} !important;

    border-radius: 5px;
  }

  &.__react_component_tooltip.place-left::after {
    border-left-color: ${({ theme }) => theme.input.background}!important;
    border-left-width: 5px !important;
  }
  &.__react_component_tooltip.place-right::after {
    border-right-color: ${({ theme }) => theme.input.background}!important;
    border-right-width: 5px !important;
  }
  &.__react_component_tooltip.place-top::after {
    border-top-color: ${({ theme }) => theme.input.background}!important;
    border-top-width: 5px !important;
  }
  &.__react_component_tooltip.place-bottom::after {
    border-bottom-color: ${({ theme }) => theme.input.background}!important;
    border-bottom-width: 5px !important;
  }

  &.__react_component_tooltip.show {
    opacity: 1 !important;
  }
`;
export default Tooltip;
