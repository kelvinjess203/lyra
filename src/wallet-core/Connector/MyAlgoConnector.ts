import MyAlgoConnect, { Options } from "@randlabs/myalgo-connect";
import { Connector } from "./Connector";
import { ConnectError, ConnectorListEnum } from "./types";

export class MyAlgoConnector extends Connector<MyAlgoConnect> {

  constructor(options?: Options) {
    super();
    const myAlgoConnector = new MyAlgoConnect(options);
    this._instance = myAlgoConnector;
    this._connectorName = ConnectorListEnum.MyAlgo;
  }

  protected _connect = async (): Promise<string> => {
    try {
      const account = await this._instance.connect({ shouldSelectOneAccount: true });
      const address = account && account[0].address;
      return address;
    } catch (e: any) {
      if (e.message === "Operation cancelled") {
        throw new Error(ConnectError.UserCancel);
      }
    }

  }

  public accounts: () => Promise<string[]> = async () => {
    try {
      const account = await this._instance.connect({ shouldSelectOneAccount: true });
      const address = account && account[0].address;
      return [address];
    } catch (e: any) {
      if (e.message === "Operation cancelled") {
        throw new Error(ConnectError.UserCancel);
      }
    }

  }
}