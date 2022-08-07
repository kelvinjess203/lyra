import Button from "components/Button";
import ButtonGroup from "components/ButtonGroup";
import { currencyFormatter } from "config";
import React, { useCallback, useState } from "react";
import styled from "styled-components";

import { ReactComponent as ChartSvg } from "svg/chart.svg";
import { ReactComponent as UpSvg } from "svg/up.svg";

import { ChartDisplayOptionEnum } from "components/Chart/constants";
import { CHART_FILTER_ITEMS, dumbData } from "./constants";
import PriceChart from "components/Chart/PriceChart";
import theme from "theme";

export interface TradeChartProps {
  chartTitle: React.ReactNode;
  hideChart?: boolean;
}

const ChartTooltipContent = ({ data }: any) => {
  const time = data.time.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <span style={{ color: theme.text.subColor, fontSize: 14 }}>{time}</span>
  );
};

const TradeChart: React.FC<TradeChartProps> = ({ chartTitle, hideChart }) => {
  const [isChartHide, setIsChartHide] = useState(hideChart);

  const [selectedChartPeriod, setSelectedChartPeriod] = useState(
    ChartDisplayOptionEnum.DAY
  );

  const [hoverValue, setHoverValue] = useState<number | undefined>();

  const handleToggleDisplayChart = useCallback(() => {
    setIsChartHide(!isChartHide);
  }, [setIsChartHide, isChartHide]);

  const isChangePositive =
    dumbData[0].value < dumbData[dumbData.length - 1].value;
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledTitle>{chartTitle}</StyledTitle>
        <Button
          onClick={handleToggleDisplayChart}
          startIcon={<ChartSvg />}
          background={!isChartHide ? "rgba(255,255,255,0.05)" : undefined}
          style={{ color: "#A6A0BB", height: "32px" }}
        >
          {isChartHide ? <>Show chart</> : <>Hide chart</>}
        </Button>
      </StyledContainer>

      <StyledContainer style={{ marginTop: 12 }}>
        <StyledPrice>
          <UpSvg fill="red" style={{ marginRight: 12 }} />{" "}
          {hoverValue ? currencyFormatter.format(hoverValue) : "$29,751.00"}
          <span className="small">+2.32%</span>
        </StyledPrice>
        {!isChartHide && (
          <ButtonGroup
            buttonStyle={{ marginRight: 0 }}
            items={CHART_FILTER_ITEMS}
            defaultBackground="transparent"
            activeBackground="#160920a1"
            value={selectedChartPeriod}
            onChange={setSelectedChartPeriod}
          />
        )}
      </StyledContainer>
      {!isChartHide && (
        <div style={{ height: 250, width: "100%", marginTop: 24 }}>
          <PriceChart
            disableChartBackground={false}
            data={dumbData}
            setHoverValueY={setHoverValue}
            xKey="time"
            yKey="value"
            TooltipContent={ChartTooltipContent}
            isChangePositive={isChangePositive}
          />
        </div>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 24px;
`;

const StyledPrice = styled.div`
  display: flex;
  color: ${({ theme }) => theme.color.green};
  align-items: center;
  font-weight: 500;
  font-size: 18px;

  .small {
    font-size: 12px;
    margin-left: 12px;
  }
`;

export default TradeChart;
