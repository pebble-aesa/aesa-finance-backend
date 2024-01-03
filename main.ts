import { router } from 'rutt';
import Data from './data.ts';

await Deno.serve(
  router({
    '/data/:symbols/:timeframe': async (_req, _, { symbols, timeframe }) => {
      const data = new Data();
      const results = Object.fromEntries(
        await Promise.all(
          symbols
            .split(',')
            .map(async (symbol) => [
              symbol,
              await data.get(symbol, timeframe).catch((err) => err),
            ])
        )
      );

      data.end();

      return new Response(JSON.stringify(results), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    },
  })
).finished;
