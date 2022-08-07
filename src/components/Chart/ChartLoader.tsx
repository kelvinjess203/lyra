import styled from "styled-components";
import LineChartLoaderSVG from "./ChartLoaderSvg";

export const LineChartLoader: React.FC = () => {
  return (
    <LoadingIndicator>
      <LineChartLoaderSVG />
      <LoadingText>
        <StyledText color="textSubtle">Loading chart data...</StyledText>
      </LoadingText>
    </LoadingIndicator>
  );
};

const LoadingIndicator = styled.div`
  height: 100%;
  position: relative;
`;

const LoadingText = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 50%;
  left: 0;
  right: 0;
  text-align: center;
`;

const StyledText = styled.span`
  color: ${({ theme }) => theme.text.subColor};
  font-size: 14px;
`;
