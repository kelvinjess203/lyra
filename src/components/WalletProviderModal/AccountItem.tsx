import React from "react";
import styled from "styled-components";

interface AccountItemProps {
  onConnect: () => void;
  title: string;
}

const AccountItem: React.FC<AccountItemProps> = ({ onConnect, title }) => (
  <StyledCard onClick={onConnect}>
    <StyledTitle>{title}</StyledTitle>
  </StyledCard>
);

const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius}px;

  background: linear-gradient(86.46deg, #d943ff0d 0.52%, #4416db36 70.5%);
  box-sizing: border-box;
  transition: 0.2s;
  margin-bottom: 12px;
  &:hover {
    box-sizing: border-box;
    background: linear-gradient(86.46deg, #d943ff3d 0.52%, #4416db5e 70.5%);
    border-radius: 5px;
    cursor: pointer;
  }
`;

const StyledTitle = styled.div`
  color: ${(props) => props.theme.text.headingColor};
  font-size: 14px;
  font-weight: 500;
  padding: 18px;
  text-align: center;
`;

export default AccountItem;
