import { currencyFormatter } from "config";
import React from "react";
import styled from "styled-components";
import { dumbBtcPrice } from "./constants";
import PriceChart from "components/Chart/PriceChart";
import theme from "theme";

type CalcProfitFn = (price: number) => number;

export interface ProfitChartProps {
  calcProfit: CalcProfitFn;
  setHoverValue: any;
  hoverValue?: number;
  currentExpectedProfitAndLoss: number;
  breakEven: number;
  price: number;
}

const ChartTooltipContent = ({ data }: any) => {
  const price = data.price;

  return (
    <span style={{ color: theme.text.subColor, fontSize: 10 }}>
      BTC Price at Exp: {currencyFormatter.format(price)}
    </span>
  );
};

const generateProfitData = (calcProfit: CalcProfitFn): any[] => {
  const step = (dumbBtcPrice * 1.5) / 500;
  let currentPrice = 0;
  const data = [];

  for (let index = 0; index < 500; index++) {
    currentPrice += step;
    data.push({
      price: currentPrice,
      profit: calcProfit(currentPrice),
    });
  }

  return data;
};
const ProfitChart: React.FC<ProfitChartProps> = ({
  calcProfit,
  setHoverValue,
  hoverValue,
  price,
  currentExpectedProfitAndLoss,
}) => {
  const expectedProfitAndLoss = hoverValue || currentExpectedProfitAndLoss;
  const data = generateProfitData(calcProfit);

  const isChangePositive = expectedProfitAndLoss > 0;
  const smallestLoss = data.find(
    (item, index) => item.profit <= 0 && data[index + 1].profit > 0
  );
  const nearestCurrentPrice = data.find(
    (item, index) => item.price <= price && data[index + 1].price > price
  );

  return (
    <StyledWrapper>
      <div style={{ height: 100, width: "100%", marginTop: 6 }}>
        <PriceChart
          refLineYValue={smallestLoss.profit}
          refLineXValue={hoverValue ? null : nearestCurrentPrice.price}
          disableChartBackground
          data={data}
          setHoverValueY={setHoverValue}
          xKey="price"
          yKey="profit"
          TooltipContent={ChartTooltipContent}
          isChangePositive={isChangePositive}
          refLineXLabel={`BTC Price Now: ${currencyFormatter.format(price)}`}
        />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: relative;
  justify-content: space-between;
`;

export default ProfitChart;
