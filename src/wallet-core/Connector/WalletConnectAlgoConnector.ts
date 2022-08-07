import WalletConnect from "@walletconnect/client";
import QRCodeModal from "algorand-walletconnect-qrcode-modal";
import { Connector } from "./Connector";
import { ConnectorListEnum, ConnectError, WCPayloadPropOnEvent } from "./types";
import { getWCInfoParams } from "./util";

export class WalletConnectAlgoConnector extends Connector<WalletConnect> {
  public accounts: (options?: any) => Promise<string[]>;
  private _bridge: string;

  constructor(bridge = "https://bridge.walletconnect.org") {
    super();
    this._bridge = bridge;
    this._instance = new WalletConnect({ bridge, qrcodeModal: QRCodeModal });
    this._connectorName = ConnectorListEnum.WalletConnectAlgo;
  }

  public _connect = async () => {
    try {
      await this._instance?.connect();

      const data: any = await this.subscribeToEvents();
      return data?.data?.address || "";
    } catch (e: any) {
      if (e.message === 'User close QRCode Modal') {
        this._instance = new WalletConnect({ bridge: this._bridge, qrcodeModal: QRCodeModal });
        throw new Error(ConnectError.UserCancel);
      }
      throw e;
    }
  };

  subscribeToEvents = () =>
    new Promise((resolve, reject) => {
      if (!this._instance) return reject(null);

      this._instance.on(
        "connect",
        (error: any, payload: WCPayloadPropOnEvent) => {
          if (error) {
            throw new Error(ConnectError.UserCancel);
          }
          resolve({
            key: "connect",
            data: getWCInfoParams(payload),
          });
        }
      );

      if (this._instance.connected) {
        const { accounts = [] } = this._instance;
        return resolve({
          key: "connected",
          data: {
            accounts,
            address: accounts[0],
          },
        });
      }
    });
}
