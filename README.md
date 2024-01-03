# Aesa Finance Backend

## Documentation

### `GET /data/:symbol/:timeframe`

Returns the data for the given symbol. It times out and returns an error after 3 seconds of TradingView not responding.

Only `D`, `W`, and `M` timeframes are supported.

Successful response:

`200 OK`

- Array of objects
  - `time`: The time of the data point
  - `open`: The opening price of the stock
  - `close`: The closing price of the stock
  - `max`: The maximum price of the stock over the time period
  - `min`: The minimum price of the stock over the time period

Unsuccessful response:

- `status`: The status code (always 500)
- `error`: The error message
