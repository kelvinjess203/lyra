import ButtonGroup from "components/ButtonGroup";
import Card from "components/Card";
import React, { useMemo, useState } from "react";
import styled from "styled-components";
import theme from "theme";
import { LabelValue } from "types/select";
import OpenPositionTable from "./Components/OpenPositionTable";
import ExpiredPositionTable from "./Components/ExpiredPositionTable";
import { StyledCardHeaderWrapper } from "components/Card/StyledCard";
import PortfolioBalance from "./Components/PortfolioBalance";

export enum PortfolioViewEnum {
  OpenPositions,
  ExpiredPositions,
}

const Portfolio: React.FC = () => {
  const [selectedView, selectView] = useState<PortfolioViewEnum>(
    PortfolioViewEnum.OpenPositions
  );

  const portfolioViews: LabelValue<PortfolioViewEnum>[] = useMemo(
    () => [
      {
        label: "Open Positions (2)",
        value: PortfolioViewEnum.OpenPositions,
      },
      {
        label: "Expired Positions",
        value: PortfolioViewEnum.ExpiredPositions,
      },
    ],
    []
  );

  return (
    <StyledWrapper>
      <StyledBalanceContainer padding="0px">
        <StyledCardHeaderWrapper>
          <StyledTitle>Balances</StyledTitle>
        </StyledCardHeaderWrapper>

        <PortfolioBalance />
      </StyledBalanceContainer>
      <StyledContent>
        <Card padding="0px">
          <StyledSection style={{ borderBottom: ` ${theme.card.border}` }}>
            <StyledText>Portfolio Value</StyledText>
            <StyledBalance>$1,000.00</StyledBalance>
          </StyledSection>
          <StyledSection style={{ borderBottom: ` ${theme.card.border}` }}>
            <ButtonGroup
              buttonStyle={{ marginRight: 0 }}
              defaultBackground="transparent"
              activeBackground="#160920a1"
              items={portfolioViews}
              value={selectedView}
              onChange={selectView}
            />
          </StyledSection>
          <StyledSection>
            {selectedView === PortfolioViewEnum.OpenPositions && (
              <OpenPositionTable />
            )}

            {selectedView === PortfolioViewEnum.ExpiredPositions && (
              <ExpiredPositionTable />
            )}
          </StyledSection>
        </Card>
      </StyledContent>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  td {
    font-size: 14px !important;
  }
`;

const StyledBalanceContainer = styled(Card)`
  position: absolute;
  border: none;
  width: 250px;
  max-width: 250px;
  min-width: 250px;
  right: 20px;
`;

const StyledSection = styled.div`
  padding: 24px;
`;

const StyledContent = styled.div`
  margin-right: 270px;
  position: relative;
`;

const StyledText = styled.div`
  color: ${({ theme }) => theme.text.subColor};
  font-size: 14px;
`;

const StyledBalance = styled.div`
  margin-top: 8px;
  font-weight: 700;
  font-size: 28px;
  background: ${({ theme }) => theme.text.gradientColor};

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const StyledTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.text.headingColor};
`;
export default Portfolio;
