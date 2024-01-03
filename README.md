# Aesa Finance Backend

## Documentation

### `GET /data/:symbols/:timeframe`

Returns the data for the given symbol. It times out and returns an error after 3 seconds of TradingView not responding.

`symbols` is a comma-separated list of symbols without spaces. For example, `AAPL,MSFT`.

Only `D`, `W`, and `M` timeframes are supported.

Successful response:

`200 OK`

- A dictionary
  - The keys are the symbols
  - The values are arrays of objects, or `null` if the request to TradingView timed out (3000ms)
    - `time`: The time of the data point
    - `open`: The opening price of the stock
    - `close`: The closing price of the stock
    - `max`: The maximum price of the stock over the time period
    - `min`: The minimum price of the stock over the time period
