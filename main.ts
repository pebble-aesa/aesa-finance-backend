import { Application } from 'abc';
import Data from './data.ts';

const data = new Data();
const app = new Application();

app
  .get('/data/:symbol/:timeframe', async (ctx) => {
    ctx.json(await data.get(ctx.params.symbol, ctx.params.timeframe));
  })
  .start({ port: 8080 });

console.log('Listening on http://localhost:8080');
