import WalletConnect from "@walletconnect/client";
import { CONNECTORS } from "components/WalletProviderModal/constant";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { Toast } from "util/toastify";
import { Connector } from "wallet-core/Connector/Connector";
import { WALLET_ERROR_MESSAGES } from "wallet-core/Connector/constant";
import {
  ConnectError,
  ConnectorListEnum,
  WCPayloadPropOnEvent,
} from "wallet-core/Connector/types";
import { getWCInfoParams } from "wallet-core/Connector/util";
import { getStoredAccount, setStoredAccount } from "wallet-core/util";

interface ConnectContext {
  address: string;
  error: Error;
  connect: (connector: Connector, options?: any) => Promise<string>;
  logout: () => void;
  connector: Connector<any>;
}

export const WalletContext = createContext<ConnectContext>({
  connect: null,
  address: "",
  connector: null,
  logout: () => {},
  error: null,
});

const WalletContextProvider: React.FC = ({ children }) => {
  const account = getStoredAccount();

  const [address, setAddress] = useState(account.account);
  const [error, setError] = useState<Error>(null);

  const [connector, setConnector] = useState<Connector>(
    CONNECTORS[account.connector]
  );

  useEffect(() => {
    if (!account || !connector) return;
    const instance: WalletConnect = connector.Instance;
    if (
      account.connector === ConnectorListEnum.WalletConnectAlgo &&
      !instance.connected
    ) {
      connect(connector);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!connector) return;
    if (connector.ConnectorName === ConnectorListEnum.WalletConnectAlgo) {
      subscribeWcEvents(connector);
    }

    return () => {
      if (connector.ConnectorName === ConnectorListEnum.WalletConnectAlgo) {
        const instance: WalletConnect = connector.Instance;
        instance.off("session_update");
        instance.off("disconnect");
      }
    };
    // eslint-disable-next-line
  }, [connector, address]);

  const connect = useCallback(
    async (_connector: Connector, options?: any) => {
      try {
        const address = await _connector.connect(options);
        setAddress(address);
        setConnector(_connector);
        return address;
      } catch (e: any) {
        setError(e);
        console.log(e);
        Toast.error(WALLET_ERROR_MESSAGES[e.message as ConnectError]);
        return null;
      }
    },
    [setAddress, setConnector]
  );

  const logout = useCallback(async () => {
    setAddress("");
    setConnector(null);
    setStoredAccount(null);
  }, []);

  const subscribeWcEvents = (connector: Connector) => {
    const instance = connector.Instance;
    return new Promise((resolve, reject) => {
      if (!instance) return reject(null);

      instance.on(
        "session_update",
        async (error: any, payload: WCPayloadPropOnEvent) => {
          try {
            if (error) {
              Toast.error(
                WALLET_ERROR_MESSAGES[ConnectError.AccountWalletConnectExpire]
              );
              logout();
            }

            const data = getWCInfoParams(payload);
            setAddress(data.address);
          } catch (catchErr) {}
        }
      );

      instance.on("disconnect", (error: any) => {
        try {
          logout();
        } catch (catchErr) {}
      });
    });
  };

  return (
    <WalletContext.Provider
      value={{
        connect,
        address,
        connector,
        logout,
        error,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export default WalletContextProvider;
