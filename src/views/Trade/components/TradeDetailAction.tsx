import Button from "components/Button";
import Input from "components/Input";
import { currencyFormatter } from "config";
import React, { useState } from "react";
import styled from "styled-components";
import { dumbBtcPrice } from "./constants";
import ProfitChart from "./ProfitChart";

const TradeDetailAction: React.FC = () => {
  // dump data
  const maxLoss = 489.18;
  const breakEven = 31489.17;
  const btcPrice = dumbBtcPrice;

  const calcBuyCallProfit = (price: number) => {
    const profit = price - breakEven;
    return profit > -maxLoss ? profit : -maxLoss;
  };

  const currentExpectedProfitAndLoss =
    btcPrice - breakEven > -maxLoss ? btcPrice - breakEven : -maxLoss;

  const [expectedProfitAndLoss, setExpectedProfitAndLoss] = useState<number>();

  return (
    <>
      <StyledWrapper>
        <StyledContainer>
          <StyledTitle>Size</StyledTitle>
          <Input
            placeholder="1.0"
            type="number"
            width="50%"
            style={{ textAlign: "right" }}
          />
        </StyledContainer>
        <StyledStroke />

        <StyledContainer>
          <StyledTitle>Total Cost</StyledTitle>
          <StyledHighlight>$25.02 SUSD</StyledHighlight>
        </StyledContainer>

        <StyledContainer style={{ marginTop: 15 }}>
          <StyledText>Price per option</StyledText>
          <StyledText>$25.01 SUSD</StyledText>
        </StyledContainer>

        <StyledContainer style={{ marginTop: 10 }}>
          <StyledText>Base</StyledText>
          <StyledText>$22.83</StyledText>
        </StyledContainer>

        <StyledContainer style={{ marginTop: 10 }}>
          <StyledText>Fees</StyledText>
          <StyledText>$2.176</StyledText>
        </StyledContainer>
        <StyledStroke />
        <StyledContainer>
          <StyledText>Balance</StyledText>
          <StyledText>$0.00 sUSD</StyledText>
        </StyledContainer>
        <StyledStroke />

        <StyledText style={{ fontSize: 10 }}>
          You need sUSD to open a long call.
        </StyledText>
        <Button style={{ width: "100%", marginTop: 5 }}>Connect Wallet</Button>
        <StyledStroke />
        <StyledContainer style={{ marginBottom: 12 }}>
          <StyledText>Expected Profit and Loss</StyledText>
          <StyledHighlight
            className={
              (expectedProfitAndLoss || currentExpectedProfitAndLoss) > 0
                ? "green"
                : ""
            }
          >
            {expectedProfitAndLoss
              ? currencyFormatter.format(expectedProfitAndLoss)
              : currencyFormatter.format(currentExpectedProfitAndLoss)}
          </StyledHighlight>
        </StyledContainer>

        <ProfitChart
          breakEven={0}
          price={btcPrice}
          calcProfit={calcBuyCallProfit}
          setHoverValue={setExpectedProfitAndLoss}
          hoverValue={expectedProfitAndLoss}
          currentExpectedProfitAndLoss={currentExpectedProfitAndLoss}
        />

        <StyledContainer style={{ marginTop: 15 }}>
          <StyledText>
            <StyledDot
              style={{
                background: "linear-gradient(90deg, #02AAB0 0%, #00CDAC 100%)",
              }}
            />
            Max Profit
          </StyledText>
          <StyledText>Infinite</StyledText>
        </StyledContainer>

        <StyledContainer style={{ marginTop: 15 }}>
          <StyledText>
            <StyledDot
              style={{
                background: "linear-gradient(90deg, #EB9633 0%, #F4B143 100%)",
              }}
            />
            Break Even
          </StyledText>
          <StyledText>{currencyFormatter.format(breakEven)}</StyledText>
        </StyledContainer>

        <StyledContainer style={{ marginTop: 15 }}>
          <StyledText>
            <StyledDot
              style={{
                background: "linear-gradient(90deg, #EB3349 0%, #F45C43 100%)",
              }}
            />
            Max Loss
          </StyledText>
          <StyledText>{currencyFormatter.format(maxLoss)}</StyledText>
        </StyledContainer>
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledTitle = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text.headingColor};
`;

const StyledStroke = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin: 15px 0px;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledHighlight = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.color.red};
  font-weight: bold;

  &.green {
    color: ${({ theme }) => theme.color.green};
  }
`;

const StyledText = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${({ theme }) => theme.text.subColor};
`;

const StyledDot = styled.span`
  height: 5px;
  width: 5px;
  margin-right: 8px;
  border-radius: 50%;
`;

export default TradeDetailAction;
