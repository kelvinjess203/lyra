import React, { useState } from "react";
import styled from "styled-components";

import WalletCard from "./WalletCard";
import { CONNECTORS, WALLETS } from "./constant";
import Modal, { ModalProps } from "components/Modal";
import {
  StyledModalTitle,
  StyledModalContent,
} from "contexts/Modals/StyledModal";
import { useWeb3 } from "wallet-core/hooks/useWeb3";
import { Connector } from "wallet-core/Connector/Connector";
import AccountItem from "./AccountItem";

import { ReactComponent as BackArrowSvg } from "svg/back-arrow.svg";
import Button from "components/Button";
import { ConnectorListEnum } from "wallet-core/Connector/types";

const WalletProviderModal: React.FC<ModalProps> = ({ onDismiss }) => {
  const { active, logout } = useWeb3();

  const [accounts, setAccounts] = useState([]);

  const handleConnect = async (
    connector: Connector,
    connectorName: ConnectorListEnum
  ) => {
    const address = await active(connector);
    if (address) {
      onDismiss();
    }

    if (address === "" && connectorName === ConnectorListEnum.AlgoSigner) {
      const accounts = await connector.accounts();
      setAccounts(accounts);
    }
  };

  const algoSignerConnectWithAddress = async (address: string) => {
    const _address = await active(CONNECTORS[ConnectorListEnum.AlgoSigner], {
      address,
    });
    if (_address) {
      onDismiss();
    }
  };

  return (
    <Modal onDismiss={onDismiss}>
      <StyledModalTitle>Connect Wallet</StyledModalTitle>
      <StyledModalContent>
        {accounts.length > 1 ? (
          <StyledAccountWrapper>
            <StyledAccountItemTitle>
              <Button
                startIcon={<BackArrowSvg />}
                onClick={() => {
                  logout();
                  setAccounts([]);
                }}
                style={{
                  padding: "6px 0",
                  paddingLeft: 6,
                  marginRight: 12,
                }}
                background="rgba(255,255,255,0.02)"
              />
              Select Your address
            </StyledAccountItemTitle>
            {accounts.map((address) => (
              <AccountItem
                title={`${address.substring(0, 6)}...${address.substring(
                  address.length - 4,
                  address.length
                )}`}
                key={address}
                onConnect={() => {
                  algoSignerConnectWithAddress(address);
                }}
              />
            ))}
          </StyledAccountWrapper>
        ) : (
          <StyledWalletsWrapper>
            {WALLETS.map((item) => (
              <WalletCard
                icon={
                  <img
                    alt={item.title}
                    src={item.logo}
                    style={{ height: 32 }}
                  />
                }
                title={item.title}
                key={item.code}
                onConnect={() => {
                  handleConnect(item.connector, item.code);
                }}
              />
            ))}
          </StyledWalletsWrapper>
        )}
      </StyledModalContent>
    </Modal>
  );
};

const StyledWalletsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledAccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledAccountItemTitle = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  margin-bottom: 24px;
`;

export default WalletProviderModal;
