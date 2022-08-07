import { StoredWalletData, StoreInfoConnectWallet } from "./Connector/types";

export const getStoredAccount = (): StoredWalletData => {
  const rawData = window.localStorage.getItem(StoreInfoConnectWallet.account);
  const account: StoredWalletData = JSON.parse(rawData);
  if (account && account.account && account.connector) {
    return account;
  }

  window.localStorage.removeItem(StoreInfoConnectWallet.account);
  return {
    account: "",
    connector: null,
  };
};

export const setStoredAccount = (data: StoredWalletData): void => {
  if (!data) {
    localStorage.removeItem(StoreInfoConnectWallet.walletconnect);
    window.localStorage.removeItem(StoreInfoConnectWallet.account);
    return;
  }
  window.localStorage.setItem(
    StoreInfoConnectWallet.account,
    JSON.stringify(data)
  );
};
