import TradingView from 'tradingview';

export default class Data {
  public get(symbol: string, timeframe: string): Promise<SymbolData[] | Error> {
    return new Promise((resolve, reject) => {
      const client = new TradingView.Client();
      const chart = new client.Session.Chart();

      chart.setMarket(symbol, {
        timeframe,
      });

      chart.onUpdate(() => {
        resolve(chart.periods);
        chart.delete();
        client.end();
      });

      setTimeout(() => {
        reject(new Error('Timeout'));
        chart.delete();
        client.end();
      }, 3000);
    });
  }
}

export interface SymbolData {
  time: number;
  open: number;
  close: number;
  max: number;
  min: number;
  volume: number;
}
