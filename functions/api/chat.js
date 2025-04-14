export async function onRequestGet({ env }) {
  const ai = new Ai(env.AI);

  const { prompt } = await request.json();

  const response = await ai.run('@cf/meta/llama-2-7b-chat-int8', {
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: "what is the capital of Portugal?" },
    ],
  });

  return new Response(JSON.stringify(response), {
    headers: { 'Content-Type': 'application/json' },
  });
}