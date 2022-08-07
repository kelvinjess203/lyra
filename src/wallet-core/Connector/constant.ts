import { ConnectError } from "./types";

export const WALLET_ERROR_MESSAGES = {
  [ConnectError.AccountNotExist]: "Your address not exist!",
  [ConnectError.AlgoSignerUndefined]: "AlgoSigner do not install.",
  [ConnectError.UserCancel]: "Connect canceled",
  [ConnectError.AccountWalletConnectExpire]: "Connect wallet Connect expire",
};
