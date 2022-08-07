import { TradeActions } from 'config'
import { Option } from 'types/option'
import { LabelValue } from 'types/select';

export const OPTIONS: Option[] = [
  {
    name: 'ETH-USD',
    logoName: 'eth.png',
    code: 'eth'
  },
  {
    name: 'LINK-USD',
    logoName: 'link.png',
    code: 'link'
  },
  {
    name: 'BTC-USD',
    logoName: 'btc.png',
    code: 'btc'
  },
  {
    name: 'SOL-USD',
    logoName: 'sol.png',
    code: 'sol'
  }
]

export const OPTIONS_ACTIONS: LabelValue<TradeActions>[] = [
  {
    label: "Buy",
    value: TradeActions.BUY,
  },
  {
    label: "Sell",
    value: TradeActions.SELL,
  },
];

export const OPTIONS_TRADES: LabelValue<TradeActions>[] = [
  {
    label: "Call",
    value: TradeActions.CALL,
  },
  {
    label: "Put",
    value: TradeActions.PUT,
  },
];