export function onRequestGet() {
  return Response.json([{
    id: 1,
    title: "My First Post",
    text: "Hello, this is my first post",
    published_at: new Date("2025-04-10"),
  }, {
    id: 2,
    title: "My Second Post",
    text: "Hello, this is my second post",
    published_at: new Date("2025-04-11"),
  }]);
};