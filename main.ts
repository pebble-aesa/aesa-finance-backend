import { router } from 'rutt';
import Data from './data.ts';

const data = new Data();

await Deno.serve(
  router({
    '/data/:symbol/:timeframe': async (_req, _, { symbol, timeframe }) => {
      const result = await data.get(symbol, timeframe).catch((err) => err);

      if (result instanceof Error) {
        return new Response(
          JSON.stringify({ status: 500, error: result.message }),
          {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          }
        );
      }

      return new Response(JSON.stringify(result), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    },
  })
).finished;
