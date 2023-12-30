import { router } from 'rutt';
import Data from './data.ts';

const data = new Data();

await Deno.serve(
  router({
    '/data/:symbol/:timeframe': async (_req, _, { symbol, timeframe }) =>
      new Response(JSON.stringify(await data.get(symbol, timeframe)), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
  })
).finished;
