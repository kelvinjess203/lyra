import AccountModal from "components/AccountModal";
import Button from "components/Button";
import LogoWithText from "components/LogoWithText";
import WalletProviderModal from "components/WalletProviderModal";
import useModal from "hooks/useModal";
import React from "react";
import styled from "styled-components";
import { useWeb3 } from "wallet-core/hooks/useWeb3";

const Header: React.FC = () => {
  const { address } = useWeb3();

  const [onPresentWalletProviderModal] = useModal(
    <WalletProviderModal onDismiss={() => {}} />
  );

  const [onPresentAccountModal] = useModal(
    <AccountModal onDismiss={() => {}} />
  );

  return (
    <StyledWraper>
      <LogoWithText />
      {address ? (
        <Button onClick={onPresentAccountModal}>
          {`${address.substring(0, 6)}...${address.substring(
            address.length - 4,
            address.length
          )}`}
        </Button>
      ) : (
        <Button onClick={onPresentWalletProviderModal}>Connect wallet</Button>
      )}
    </StyledWraper>
  );
};

const StyledWraper = styled.div`
  height: 76px;
  border-bottom: 1px solid #232531;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
`;

export default Header;
