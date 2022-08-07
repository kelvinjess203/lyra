
import { WalletContext } from "contexts/WalletContext"
import { useContext } from "react"
import { Connector } from "wallet-core/Connector/Connector"

export const useWeb3 = () => {
  const { address, connect, connector, logout } = useContext(WalletContext)

  const active = async (connector: Connector, options?: any) => {
    const address = await connect(connector, options);
    return address
  }

  return { address, active, connector, logout }

}