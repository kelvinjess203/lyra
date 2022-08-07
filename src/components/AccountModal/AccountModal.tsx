import React from "react";
import styled from "styled-components";

import Modal, { ModalProps } from "components/Modal";
import {
  StyledModalTitle,
  StyledModalContent,
} from "contexts/Modals/StyledModal";
import { useWeb3 } from "wallet-core/hooks/useWeb3";
import Button from "components/Button";

const AccountModal: React.FC<ModalProps> = ({ onDismiss }) => {
  const { address, logout } = useWeb3();

  return (
    <Modal onDismiss={onDismiss}>
      <StyledModalTitle>Your wallet</StyledModalTitle>
      <StyledModalContent>
        <StyledWrapper>
          <StyledTitle>Your address</StyledTitle>
          <StyledText>{address}</StyledText>
          <Button
            onClick={() => {
              logout();
              onDismiss();
            }}
          >
            Sign Out
          </Button>
        </StyledWrapper>
      </StyledModalContent>
    </Modal>
  );
};

const StyledWrapper = styled.div`
  color: ${({ theme }) => theme.text.subColor};
  font-size: 12px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledText = styled.div`
  color: ${({ theme }) => theme.text.subColor};
  font-size: 12px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 24px;
`;

const StyledTitle = styled.div`
  color: ${({ theme }) => theme.text.headingColor};
  font-size: 14px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 12px;
`;

export default AccountModal;
