import ButtonGroup from "components/ButtonGroup";
import Card from "components/Card";
import { StyledCardHeaderWrapper } from "components/Card/StyledCard";
import Icon from "components/Icon";
import { ValueLabel } from "components/ValueLabel";
import { TradeActions } from "config";
import { OPTIONS_ACTIONS } from "config/options";
import React, { useState } from "react";
import styled from "styled-components";
import TradeChart from "views/Trade/components/TradeChart";
import TradeDetailAction from "views/Trade/components/TradeDetailAction";

import { ReactComponent as BackArrowSvg } from "svg/back-arrow.svg";
import Button from "components/Button";
import { Link } from "react-router-dom";

const TradeDetails: React.FC = () => {
  const [selectedOptionAction, setSelectedOptionAction] = useState(
    TradeActions.BUY
  );

  return (
    <StyledWrapper>
      <StyledDetailCard padding="0px">
        <StyledCardHeaderWrapper style={{ padding: "12px 20px" }}>
          <ButtonGroup
            style={{ width: "100%", justifyContent: "space-between" }}
            buttonStyle={{ width: "47%", marginRight: 0 }}
            items={OPTIONS_ACTIONS}
            value={selectedOptionAction}
            onChange={setSelectedOptionAction}
            defaultBackground="transparent"
            activeBackground="#160920a1"
          />
        </StyledCardHeaderWrapper>
        <TradeDetailAction />
      </StyledDetailCard>
      <StyledContent>
        <Card padding="20px">
          <TradeChart
            chartTitle={
              <>
                <Link to="/">
                  <Button
                    startIcon={<BackArrowSvg />}
                    style={{
                      padding: "12px 0",
                      paddingLeft: 6,
                      marginRight: 12,
                    }}
                    background="rgba(255,255,255,0.02)"
                  />
                </Link>
                <Icon
                  name="btc.png"
                  height="40px"
                  style={{ marginRight: 12 }}
                />{" "}
                BTC $33,000.00 Call
              </>
            }
            hideChart
          />
        </Card>

        <Card padding="20px" style={{ marginTop: 20 }}>
          <b>History</b>
          <StyledTextContainer>No trading history</StyledTextContainer>
        </Card>
        <Card padding="20px" style={{ marginTop: 20 }}>
          <b>Details</b>

          <StyledTextContainer>
            <StyledValueContainer>
              <ValueLabel label="Asset" desc="" value="BTC" />
              <ValueLabel
                label="Strike"
                desc="The price at which the underlying asset can be bought or sold when the option expires."
                value="$33,000.00"
              />
              <ValueLabel
                label="Type"
                desc="A call gives the holder the right, but not the obligation, to purchase the underlying asset for the strike price on expiry."
                value="Call"
              />
            </StyledValueContainer>
          </StyledTextContainer>
          <StyledTextContainer style={{ marginTop: 0 }}>
            <StyledValueContainer>
              <ValueLabel
                label="Expires at"
                desc="The expiry is the time at which the options are settled."
                value="Jun 10th, 2022, 3:00 PM"
              />
              <ValueLabel
                label="Trading close"
                desc="The last time at which the Lyra AMM will trade these options, after which only settlement will occur."
                value="Jun 9th, 2022, 3:00 PM"
              />
              <ValueLabel
                label="Closes in"
                desc="The last time at which the Lyra AMM will trade these options, after which only settlement will occur."
                value="2d 21h 25m"
              />
            </StyledValueContainer>
          </StyledTextContainer>
        </Card>
        <Card padding="20px" style={{ marginTop: 20 }}>
          <b>Stats</b>

          <StyledTextContainer>
            <StyledValueContainer>
              <ValueLabel
                label="Implied volatility"
                desc="Implied volatility is the market’s expectation of the volatility of the underlying asset until expiry, it is a large determinant of the value of an option."
                value="+48.80%"
              />
              <ValueLabel
                label="Delta"
                desc="Delta refers to how much the price of the option changes if the underlying asset moves by $1."
                value="0.17924"
              />
              <ValueLabel
                label="Gamma"
                desc="Gamma refers to how much the delta of the option changes if the underlying asset moves by $1."
                value="0.00016"
              />
            </StyledValueContainer>
          </StyledTextContainer>
          <StyledTextContainer style={{ marginTop: 0 }}>
            <StyledValueContainer>
              <ValueLabel
                label="Theta"
                desc="Theta refers to how much the price of the option decreases per day."
                value="+48.80%"
              />
              <ValueLabel
                label="Vega"
                desc="How much the price of the option changes if the implied volatility moves by $1."
                value="8.55272"
              />
              <ValueLabel
                label="Rho"
                desc="Rho refers to how much the price of the option changes for a 1% change in the risk-free interest rate."
                value="0.59221"
              />
            </StyledValueContainer>
          </StyledTextContainer>
        </Card>
      </StyledContent>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div``;

const StyledDetailCard = styled(Card)`
  position: absolute;
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

const StyledTextContainer = styled.div`
  margin-top: 24px;
  color: ${({ theme }) => theme.text.subColor};
`;

const StyledValueContainer = styled.div`
  display: flex;

  & > * {
    width: 33%;
  }
`;
export default TradeDetails;
