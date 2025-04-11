export function onRequestGet(context) {
  const { id } = context.params;

  if (!id) {
    return new Response('Not found', { status: 404});
  }

  return Response.json({
    id: 1,
    title: "My First Post",
    text: "Hello, this is my first post",
    published_at: new Date("2025-04-10"),
  });
};