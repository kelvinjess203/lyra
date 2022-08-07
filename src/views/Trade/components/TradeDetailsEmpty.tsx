import Icon from "components/Icon";
import React from "react";
import styled from "styled-components";

const TradeDetailsEmpty: React.FC = () => {
  return (
    <>
      <StyledHeaderWrapper>
        <StyledTitle>Select Option</StyledTitle>
      </StyledHeaderWrapper>
      <StyledWrapper>
        <Icon height="60px" name="circle_plus.svg" />
        <StyledHint>Select an option to order</StyledHint>
      </StyledWrapper>
    </>
  );
};

const StyledHeaderWrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: ${({ theme }) => theme.card.border};
`;

const StyledWrapper = styled.div`
  padding: 64px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledTitle = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text.headingColor};
`;

const StyledHint = styled.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.1);
  margin-top: 12px;
`;

export default TradeDetailsEmpty;
