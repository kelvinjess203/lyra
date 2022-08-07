import Icon from "components/Icon";
import React from "react";
import styled from "styled-components";

const PortfolioBalance: React.FC = () => {
  return (
    <>
      <StyledWrapper>
        <StyledBalanceContainer>
          <Icon name="btc.png" height="36px" />
          <StyledTextContainer>
            <StyledBalanceNumber>1.233 sUSD</StyledBalanceNumber>
            <StyledBalanceInUsdNumber>$1.233</StyledBalanceInUsdNumber>
          </StyledTextContainer>
        </StyledBalanceContainer>

        <StyledBalanceContainer>
          <Icon name="btc.png" height="36px" />
          <StyledTextContainer>
            <StyledBalanceNumber>0.2 sBTC</StyledBalanceNumber>
            <StyledBalanceInUsdNumber>$6,000.00</StyledBalanceInUsdNumber>
          </StyledTextContainer>
        </StyledBalanceContainer>

        <StyledBalanceContainer>
          <Icon name="eth.png" height="36px" />
          <StyledTextContainer>
            <StyledBalanceNumber>1.00 sETH</StyledBalanceNumber>
            <StyledBalanceInUsdNumber>$1,800.00</StyledBalanceInUsdNumber>
          </StyledTextContainer>
        </StyledBalanceContainer>

        <StyledBalanceContainer>
          <Icon name="link.png" height="36px" />
          <StyledTextContainer>
            <StyledBalanceNumber>0.00 sLINK</StyledBalanceNumber>
            <StyledBalanceInUsdNumber>$0.00</StyledBalanceInUsdNumber>
          </StyledTextContainer>
        </StyledBalanceContainer>

        <StyledBalanceContainer>
          <Icon name="sol.png" height="36px" />
          <StyledTextContainer>
            <StyledBalanceNumber>0.00 sSOL</StyledBalanceNumber>
            <StyledBalanceInUsdNumber>$0.00</StyledBalanceInUsdNumber>
          </StyledTextContainer>
        </StyledBalanceContainer>
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledBalanceContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 16px 20px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

const StyledBalanceNumber = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text.headingColor};
`;

const StyledBalanceInUsdNumber = styled.div`
  font-size: 14px;
  margin-top: 6px;
  color: ${({ theme }) => theme.text.subColor};
`;

export default PortfolioBalance;
