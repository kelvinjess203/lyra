import ButtonGroup from "components/ButtonGroup";
import Select from "components/Select";
import { TradeActions } from "config";
import { OPTIONS_ACTIONS, OPTIONS_TRADES } from "config/options";
import React from "react";
import styled from "styled-components";

export interface TradeTableHeaderProps {
  selectedOptionTrade: TradeActions;
  setSelectedOptionTrade: (value: TradeActions) => void;

  selectedOptionAction: TradeActions;
  setSelectedOptionAction: (value: TradeActions) => void;
  activeColor?: string;
}

const TradeTableHeader: React.FC<TradeTableHeaderProps> = ({
  selectedOptionTrade,
  setSelectedOptionTrade,
  selectedOptionAction,
  setSelectedOptionAction,
  activeColor,
}) => {
  return (
    <StyledWrapper>
      <StyledTradeActionContainer>
        <ButtonGroup
          items={OPTIONS_ACTIONS}
          value={selectedOptionAction}
          onChange={setSelectedOptionAction}
          activeBackground={activeColor}
        />
        <ButtonGroup
          items={OPTIONS_TRADES}
          value={selectedOptionTrade}
          style={{ marginLeft: 20 }}
          onChange={setSelectedOptionTrade}
          activeBackground={activeColor}
        />
      </StyledTradeActionContainer>
      <Select width="40%" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: ${({ theme }) => theme.card.border};
`;

const StyledTradeActionContainer = styled.div`
  display: flex;
`;

export default TradeTableHeader;
