import React, { useEffect, Dispatch, SetStateAction } from "react";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  ReferenceLine,
} from "recharts";
import styled from "styled-components";
import theme from "theme";
import { LineChartLoader } from "./ChartLoader";
import { getChartColors } from "./util";

export type PriceChartProps = {
  data: any[];
  setHoverValueX?: Dispatch<SetStateAction<any>>; // used for value on hover
  setHoverValueY?: Dispatch<SetStateAction<any>>; // used for value on hover
  xKey: string;
  yKey: string;
  refLineYValue?: any;
  refLineXValue?: any;
  refLineXLabel?: string;
  isChangePositive?: boolean;
  TooltipContent?: React.FC<{ data: any }>;
  disableChartBackground?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const Updater = ({
  active,
  payload,
  setHoverValueY,
  yKey,
  TooltipContent,
}: any) => {
  const data = payload.length ? payload[0].payload : null;

  useEffect(() => {
    if (data) {
      setHoverValueY(data[yKey]);
    }
  }, [data, setHoverValueY, yKey]);

  if (active && payload && payload.length) {
    return <TooltipContent data={data} />;
  }
  return null;
};

const PriceChart = ({
  data,
  setHoverValueX,
  xKey,
  yKey,
  setHoverValueY,
  isChangePositive,
  TooltipContent,
  refLineYValue,
  refLineXValue,
  refLineXLabel,
  disableChartBackground = false,
}: PriceChartProps) => {
  const colors = getChartColors({ isChangePositive });

  if (!data || data.length === 0) {
    return <LineChartLoader />;
  }

  const refXposition =
    (data.findIndex((item) => item[xKey] === refLineXValue) * 100) /
    data.length;

  return (
    <StyledContainer>
      {(refLineXValue || refLineXValue === 0) && (
        <>
          <StyledRefX style={{ left: `${refXposition}%` }} />
          <StyledRefXLabel style={{ left: `${refXposition}%` }}>
            {refLineXLabel}
          </StyledRefXLabel>
        </>
      )}

      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
          onMouseLeave={() => {
            if (setHoverValueX) setHoverValueX(undefined);
            if (setHoverValueY) setHoverValueY(undefined);
          }}
        >
          {!disableChartBackground && (
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={colors.gradient1}
                  stopOpacity={0.34}
                />
                <stop
                  offset="100%"
                  stopColor={colors.gradient2}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
          )}

          <XAxis dataKey={xKey} axisLine={false} tickLine={false} hide />
          <YAxis
            dataKey={yKey}
            axisLine={false}
            tickLine={false}
            domain={["auto", "auto"]}
            hide
          />
          <Tooltip
            cursor={{ stroke: theme.text.subColor }}
            content={
              <Updater
                yKey={yKey}
                setHoverValueY={setHoverValueY}
                TooltipContent={TooltipContent}
              />
            }
            position={{
              y: 0,
            }}
            isAnimationActive={false}
          />
          {(refLineYValue || refLineYValue === 0) && (
            <ReferenceLine
              y={refLineYValue}
              stroke={theme.text.subColor}
              strokeWidth={0.2}
            />
          )}

          <Area
            dataKey={yKey}
            type="linear"
            stroke={colors.stroke}
            fill={!disableChartBackground ? "url(#gradient)" : "transparent"}
            strokeWidth={2}
          ></Area>
        </AreaChart>
      </ResponsiveContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const StyledRefX = styled.div`
  position: absolute;
  box-sizing: border-box;
  height: calc(100% - 15px);
  bottom: 0px;
  border-right: 1px solid ${({ theme }) => theme.text.subColor};
  opacity: 0.2;
`;

const StyledRefXLabel = styled.div`
  position: absolute;
  transform: translateX(-50%);
  opacity: 0.4;
  white-space: nowrap;
  font-size: 10px;
  color: ${({ theme }) => theme.text.subColor};
  top: 0px;
`;

export default PriceChart;
