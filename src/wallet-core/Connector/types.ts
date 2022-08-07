export interface StoredWalletData {
  account: string;
  connector: ConnectorListEnum;
}

export enum ConnectError {
  AlgoSignerUndefined = "AlgoSignerUndefined",
  UserCancel = "UserCancel",
  AccountNotExist = "AccountNotExist",
  AccountWalletConnectExpire = "AccountWalletConnectExpire",
}

export enum ConnectorListEnum {
  MyAlgo = "MY_ALGO",
  AlgoSigner = "ALGO_SIGNER",
  WalletConnectAlgo = "WALLET_CONNECT_ALGO",
}

export enum StoreInfoConnectWallet {
  walletconnect = "walletconnect",
  account = "account",
}

export type WCPayloadPropOnEvent = {
  params?: [
    {
      accounts?: string[];
      chainId?: number;
    }
  ];
};
