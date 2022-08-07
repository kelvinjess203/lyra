import React, { useEffect, useMemo, useRef } from "react";

import Card from "components/Card";
import { StyledCardHeaderWrapper } from "components/Card/StyledCard";
import Dropdown from "components/Dropdown";
import Progress from "components/Progress";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "theme";

const TradeRewards: React.FC = () => {
  const refLayout = useRef(null);

  useEffect(() => {
    if (refLayout.current) {
      (window as any).renderMathInElement(document.body, {
        delimiters: [{ left: "$$", right: "$$", display: false }],
      });
    }
  }, []);

  const roundRewards = useMemo(
    () => [
      {
        title: (
          <StyledWrapItemOptionDropdown>
            <FlexCol>
              <StyledText className="value">Round 9</StyledText>
              <StyledText className="value-small">
                May 28th → Jun 17th
              </StyledText>
            </FlexCol>
          </StyledWrapItemOptionDropdown>
        ),
        value: "round-9",
      },
      {
        title: (
          <StyledWrapItemOptionDropdown>
            <FlexCol>
              <StyledText className="value">Round 8</StyledText>
              <StyledText className="value-small">
                May 28th → Jun 17th
              </StyledText>
            </FlexCol>
          </StyledWrapItemOptionDropdown>
        ),
        value: "round-8",
      },
    ],
    []
  );

  return (
    <StyledWrapper ref={refLayout}>
      <ReStyledCardHeaderWrapper>
        <FlexCol>
          <StyledTitle>Trading Rewards</StyledTitle>
          <StyledSubTitle>
            Trade options and lock short collateral to earn rewards
          </StyledSubTitle>
        </FlexCol>
        <StyledWrapDropRound>
          <Dropdown options={roundRewards} selected={roundRewards[0].value} />
        </StyledWrapDropRound>
      </ReStyledCardHeaderWrapper>
      <StyledWrapProgress>
        <Progress />
      </StyledWrapProgress>
      <StyledDetailReward>
        <StyledWrapPartInfo>
          <FlexCol>
            <StyledText className="title">Trading Fees</StyledText>
            <StyledText className="big-value">$0.00</StyledText>
          </FlexCol>
          <FlexCol className="bottom">
            <StyledText className="title">Fee Rewards</StyledText>
            <StyledText className="value" style={{ color: theme.color.green }}>
              0.00
            </StyledText>
          </FlexCol>
        </StyledWrapPartInfo>

        <StyledWrapPartInfo>
          <FlexCol>
            <StyledText className="title">Average Short Collateral</StyledText>
            <StyledText className="big-value">$0.00</StyledText>
          </FlexCol>
          <FlexCol className="bottom">
            <StyledText className="title">Collateral Rewards</StyledText>
            <StyledText className="value" style={{ color: theme.color.green }}>
              0.00
            </StyledText>
          </FlexCol>
        </StyledWrapPartInfo>
        <StyledWrapPartInfo>
          <FlexCol>
            <StyledText className="title">Total Round Rewards</StyledText>
            <StyledText
              className="big-value"
              style={{ color: theme.color.green }}
            >
              0.00
            </StyledText>
          </FlexCol>
          <Link to="#" target="_blank" className="bottom">
            <StyledText className="value" style={{ color: "#FFFFFF" }}>
              Learn More →
            </StyledText>
          </Link>
        </StyledWrapPartInfo>
      </StyledDetailReward>

      <StyledInfoDetailTradingReward>
        <StyledDetailInfo>
          <StyledTitle className="medium">How trading rewards work</StyledTitle>
          <StyledSubTitle>
            To incentivise trading activity, rewards are distributed to traders
            based on trading fees and locked collateral for short positions
            (selling calls and puts). Trading rewards are capped per round and
            per market. If the cap is reached, rewards are scaled back
            proportionately.
          </StyledSubTitle>
          <StyledLearnMore>Learn More →</StyledLearnMore>
        </StyledDetailInfo>

        <StyledDetailInfo>
          <StyledTitle className="medium">Rewards for trading fees</StyledTitle>
          <StyledSubTitle>
            Traders earn rewards proportional to the fees they pay for opening
            long positions (buying a call or put) or short positions (selling a
            call or put). Rewards are based on the following formulae:
          </StyledSubTitle>
          <StyledWrapKatex>
            <p>$$Long \ Position \ Rewards=tradingFees \times 0.8$$</p>
            <p>$$Short \ Position \ Rewards=tradingFees \times 1$$</p>
          </StyledWrapKatex>

          <StyledLearnMore>Learn More →</StyledLearnMore>
        </StyledDetailInfo>

        <StyledDetailInfo>
          <StyledTitle className="medium">
            Rewards for short collateral
          </StyledTitle>
          <StyledSubTitle>
            Traders earn rewards for locking short collateral when they open
            short positions (selling a call or put). Rewards are proportional to
            the locked collateral value and how long the short position is open
            for. Short call collateral value is based on the price of base asset
            at the start of the round. Short put collateral is priced in sUSD.
          </StyledSubTitle>
          <StyledWrapKatex>
            <p>
              {`$$Short \\ Put \\ Rewards=LPRate \\times \\frac{2}{3} \\times timeShortPositionHeld $$`}
            </p>
            <p>
              {`$$Short \\ Call \\ Rewards=LPRate \\times \\frac{2}{3} \\times \\frac{baseAssetPrice}{ \\textit{\\$}1000} \\times timeShortPositionHeld $$`}
            </p>
          </StyledWrapKatex>

          <StyledLearnMore>Learn More →</StyledLearnMore>
        </StyledDetailInfo>

        <StyledDetailInfo>
          <StyledTitle className="medium">Risks</StyledTitle>
          <StyledSubTitle>
            Trading on Lyra carries a number of risks. The Lyra protocol should
            be considered experimental software and you should interact with it
            at your own risk.
          </StyledSubTitle>
          <StyledLearnMore>Learn More →</StyledLearnMore>
        </StyledDetailInfo>
      </StyledInfoDetailTradingReward>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div``;

const ReStyledCardHeaderWrapper = styled(StyledCardHeaderWrapper)`
  padding: 0px !important;
  padding-bottom: 20px !important;
  justify-content: space-between;
  border-bottom: 0;
`;

const StyledTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text.headingColor};

  &.medium {
    line-height: 19px;
    font-size: 15px;
  }
`;

const StyledSubTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text.subColor};
  line-height: 18px;
  letter-spacing: 0.02em;
  margin: 8px 0;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledWrapProgress = styled.div``;

const StyledDetailReward = styled.div`
  padding: 0;
  height: 160px;
  min-width: 800px;
  margin-bottom: 16px;
  margin-top: 8px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  gap: 0 8px;
  width: 100%;
`;

const StyledWrapPartInfo = styled(Card)`
  width: 100%;
  height: 100%;

  padding: 0;

  .expanded {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;

    height: 100%;
    width: 100%;
    padding: 16px;
    .bottom {
      margin-top: auto;
    }
  }
`;

const StyledText = styled.div<{
  className: "title" | "value" | "big-value" | string;
}>`
  font-family: "Poppins";

  &.title {
    font-weight: 400;
    line-height: 18px;
    font-size: 14px;
    margin-bottom: 4px;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.text.subColor};
  }

  &.big-value {
    font-size: 24px;
    font-weight: 600;
    line-height: 30px;
  }

  &.value {
    font-weight: 500;
    line-height: 19px;
    font-size: 15px;
  }

  &.value-small {
    font-weight: 400;
    line-height: 16px;
    font-size: 12px;
  }
`;

const StyledInfoDetailTradingReward = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

const StyledDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0px;
`;

const StyledWrapKatex = styled.div`
  margin: 2px 0 10px;
  p {
    margin: 4px 0;
  }
  .katex {
    font-size: 17px;
    color: ${({ theme }) => theme.text.subColor};
  }
`;

const StyledLearnMore = styled.a`
  width: max-content;
  font-weight: 400;
  line-height: 18px;
  font-size: 13px;
  letter-spacing: 0.02em;
  cursor: pointer;
  text-decoration: none;
  color: #e7e7e7;
  transition: 0.2s all ease-in-out;
  &:hover {
    color: #7143ff;
  }
`;

const StyledWrapDropRound = styled.div``;

const StyledWrapItemOptionDropdown = styled.div`
  display: flex;
  align-items: center;
`;
export default TradeRewards;
