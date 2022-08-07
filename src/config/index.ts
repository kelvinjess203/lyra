export enum TradeActions {
  CALL = 'call',
  PUT = 'put',
  BUY = 'buy',
  SELL = 'sell'
}

export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
