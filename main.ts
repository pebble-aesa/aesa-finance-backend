const port = 8080;

const handler = (_request: Request): Response => {
  const body = 'Hello world';

  return new Response(body, { status: 200 });
};

Deno.serve({ port }, handler);
