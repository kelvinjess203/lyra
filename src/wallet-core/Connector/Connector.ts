import { setStoredAccount } from "wallet-core/util";
import { ConnectorListEnum } from "./types";

export abstract class Connector<T = any> {

  protected _instance: T;
  protected _connectorName: ConnectorListEnum;
  protected abstract _connect: (options?: any) => Promise<string>;
  public abstract accounts: (options?: any) => Promise<string[]>;

  public get Instance() {
    return this._instance;
  }

  public get ConnectorName(): ConnectorListEnum {
    return this._connectorName;
  }

  public async connect(options?: any): Promise<string> {
    try {
      const address = await this._connect(options);
      if (address) {
        setStoredAccount({
          account: address,
          connector: this._connectorName
        })
      }
      return address;
    } catch (e) {
      throw e;
    }
  }

}