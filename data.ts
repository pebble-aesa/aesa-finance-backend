import TradingView from 'tradingview';

export default class Data {
  private client = new TradingView.Client();

  public get(symbol: string, timeframe: string): Promise<SymbolData[] | null> {
    return new Promise((resolve) => {
      const chart = new this.client.Session.Chart();

      chart.setMarket(symbol, {
        timeframe,
      });

      chart.onUpdate(() => {
        resolve(chart.periods);
        chart.delete();
      });

      setTimeout(() => {
        resolve(null);
        chart.delete();
      }, 1000);
    });
  }

  public end() {
    this.client.end();
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
