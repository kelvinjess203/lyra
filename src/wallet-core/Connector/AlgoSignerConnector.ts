import { Connector } from "./Connector";
import { ConnectError, ConnectorListEnum } from "./types";

export class AlgoSignerConnector extends Connector {

  constructor() {
    super();
    this._instance = window.AlgoSigner;
    this._connectorName = ConnectorListEnum.AlgoSigner;
  }

  protected _connect = async (options: { address: string }): Promise<string> => {
    if (typeof this._instance === 'undefined') {
      window.open('https://www.purestake.com/technology/algosigner/')
      throw new Error(ConnectError.AlgoSignerUndefined);
    }
    try {
      await this._instance.connect();
      const address = options?.address;

      if (address) {
        const accounts = await this.accounts();
        if (accounts.includes(address)) {
          return address
        } else
          throw new Error(ConnectError.UserCancel);
      }
      return '';
    } catch (e: any) {
      if (e.code === 4001) {
        throw new Error(ConnectError.UserCancel);
      }
      throw new Error(e.message);
    }
  }

  public accounts: () => Promise<string[]> = async () => {
    try {
      const accounts: any[] = await this._instance.accounts({ ledger: 'MainNet' });
      return accounts ? accounts.map(item => item.address) : [];
    } catch (e: any) {
      if (e.message === "Operation cancelled") {
        throw new Error(ConnectError.UserCancel);
      }
    }

  }
}