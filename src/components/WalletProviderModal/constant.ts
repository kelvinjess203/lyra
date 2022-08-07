import { WalletConnectAlgoConnector } from "wallet-core/Connector/WalletConnectAlgoConnector";
import { AlgoSignerConnector } from "wallet-core/Connector/AlgoSignerConnector";
import { MyAlgoConnector } from "wallet-core/Connector/MyAlgoConnector";
import { ConnectorListEnum } from "wallet-core/Connector/types";


export const CONNECTORS = {
  [ConnectorListEnum.MyAlgo]: new MyAlgoConnector(),
  [ConnectorListEnum.AlgoSigner]: new AlgoSignerConnector(),
  [ConnectorListEnum.WalletConnectAlgo]: new WalletConnectAlgoConnector(),
};

export const WALLETS = [
  {
    logo: "https://seeklogo.com/images/W/walletconnect-logo-EE83B50C97-seeklogo.com.png",
    code: ConnectorListEnum.WalletConnectAlgo,
    title: "Wallet Connect",
    connector: CONNECTORS[ConnectorListEnum.WalletConnectAlgo],
  },
  {
    logo: "https://app.tinyman.org/static/media/MyAlgoLogo.4c21daa4.svg",
    code: ConnectorListEnum.MyAlgo,
    title: "MyAlgo Wallet",
    connector: CONNECTORS[ConnectorListEnum.MyAlgo],
  },
  {
    logo: "https://app.tinyman.org/static/media/AlgoSigner.2ec35000.svg",
    code: ConnectorListEnum.AlgoSigner,
    title: window.AlgoSigner ? "AlgoSigner" : "Install AlgoSigner",
    connector: CONNECTORS[ConnectorListEnum.AlgoSigner],
  },
];
