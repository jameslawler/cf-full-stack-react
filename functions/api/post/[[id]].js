export async function onRequestGet({ env, params }) {
  const id = Number(params.id);

  if (!id) {
    return new Response('Not found', { status: 404});
  }

  const result = await env.DB.prepare("SELECT * FROM posts WHERE id = ?").bind(id).first();

  if (!result) {
    return new Response('Not found', { status: 404});
  }

  return Response.json({
    ...result,
    published_at: new Date(result.published_at),
  });
};