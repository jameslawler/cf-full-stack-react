export async function onRequestGet({ env }) {
  const response = await env.AI.run('@cf/meta/llama-2-7b-chat-int8', {
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: "what is the capital of Portugal?" },
    ],
  });

  return new Response(JSON.stringify(response), {
    headers: { 'Content-Type': 'application/json' },
  });
}