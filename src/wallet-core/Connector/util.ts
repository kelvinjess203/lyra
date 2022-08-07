import { WCPayloadPropOnEvent } from "./types";

export const getWCInfoParams = (payload: WCPayloadPropOnEvent) => {
  const { accounts, chainId } = payload?.params[0] || {};
  let address = accounts[0] || "";
  if (!address) return null;

  return {
    address: accounts[0],
    accounts,
    chainId,
  };
};