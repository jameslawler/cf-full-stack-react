export async function onRequestGet({ env }) {
  const response = await env.AI.run('@cf/meta/llama-2-7b-chat-int8', {
    messages: [
      { role: 'system', content: 'You are a teacher of European Portuguese. Provide Feedback on the sentences to be a helpful teacher. Identify grammar and spelling issues.' },
      { role: 'user', content: "a minha mãe e Sofia e ela tinha 45 anos." },
    ],
  });

  return new Response(JSON.stringify(response), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function onRequestPost({ request, env }) {
  const data = await request.json(); // or formData/text based on content-type

  const response = await env.AI.run('@cf/meta/llama-2-7b-chat-int8', {
    messages: [
      { role: 'system', content: 'Analyse my European Portuguese writing and correct any grammar or spelling mistakes.'},
      { role: 'user', content: data.question}
    ]
  });

  return new Response(JSON.stringify(response), {
    headers: { 'Content-Type': 'application/json' },
  });
}
