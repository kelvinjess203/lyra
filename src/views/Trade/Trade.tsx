import Card from "components/Card";
import { StyledCardHeaderWrapper } from "components/Card/StyledCard";
import Icon from "components/Icon";
import { currencyFormatter, TradeActions } from "config";
import React, { useMemo, useState } from "react";
import styled from "styled-components";
import theme from "theme";
import { dumbBtcPrice } from "./components/constants";
import TradeChart from "./components/TradeChart";
import TradeDetailAction from "./components/TradeDetailAction";
import TradeTable from "./components/TradeTable";
import TradeTableHeader from "./components/TradeTableHeader";

const Home: React.FC = () => {
  const [selectedOptionTrade, setSelectedOptionTrade] = useState(
    TradeActions.PUT
  );
  const [selectedOptionAction, setSelectedOptionAction] = useState(
    TradeActions.BUY
  );

  const activeColor = useMemo(() => {
    if (selectedOptionAction === TradeActions.SELL) {
      return selectedOptionTrade === TradeActions.CALL
        ? theme.color.red
        : theme.color.green;
    }
    if (selectedOptionAction === TradeActions.BUY) {
      return selectedOptionTrade === TradeActions.CALL
        ? theme.color.green
        : theme.color.red;
    }
  }, [selectedOptionTrade, selectedOptionAction]);

  const chartTitle = (
    <>
      <Icon name="btc.png" height="40px" style={{ marginRight: 12 }} />
      {`${selectedOptionAction === TradeActions.BUY ? "Buy" : "Sell"} `}
      BTC
      {` ${selectedOptionTrade === TradeActions.CALL ? "Call" : "Put"}`}
    </>
  );

  return (
    <StyledWrapper>
      <StyledDetailCard padding="0px">
        <StyledCardHeaderWrapper>
          <StyledTitle>
            BTC {currencyFormatter.format(dumbBtcPrice)} Put
          </StyledTitle>
        </StyledCardHeaderWrapper>
        <TradeDetailAction />
      </StyledDetailCard>
      <StyledContent>
        <Card padding="20px">
          <TradeChart chartTitle={chartTitle} />
        </Card>
        <Card padding="0px" style={{ marginTop: 20 }}>
          <TradeTableHeader
            selectedOptionTrade={selectedOptionTrade}
            setSelectedOptionTrade={setSelectedOptionTrade}
            selectedOptionAction={selectedOptionAction}
            setSelectedOptionAction={setSelectedOptionAction}
            activeColor={activeColor}
          />
          <TradeTable activeColor={activeColor} />
        </Card>
      </StyledContent>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div``;

const StyledDetailCard = styled(Card)`
  position: fixed;
  border: none;
  width: 250px;
  max-width: 250px;
  min-width: 250px;
  right: 20px;
`;

const StyledContent = styled.div`
  margin-right: 270px;
  position: relative;
`;

const StyledTitle = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text.headingColor};
`;

export default Home;
