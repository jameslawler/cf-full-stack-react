export async function onRequestGet({ env }) {
  const result = await env.DB.prepare("SELECT * FROM posts").all();

  const posts = result.results.map((post) => ({
    ...post,
    published_at: new Date(post.published_at)
  }));

  return Response.json(posts);
};