import Card from "components/Card";
import React from "react";
import styled from "styled-components";
import theme from "theme";
import HistoryTable from "./Components/HistoryTable";

const History: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledContent>
        <Card padding="0px">
          <StyledSection style={{ borderBottom: ` ${theme.card.border}` }}>
            <StyledTitle>History</StyledTitle>
          </StyledSection>
          <StyledSection>
            <HistoryTable />
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

const StyledSection = styled.div`
  padding: 24px;
`;

const StyledContent = styled.div`
  position: relative;
`;

const StyledTitle = styled.div`
  margin-top: 8px;
  font-weight: 700;
  font-size: 28px;
  color: ${({ theme }) => theme.text.headingColor};
`;

export default History;
