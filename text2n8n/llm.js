export async function promptLLM(prompt) {
  const res = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "mistral",
      prompt: `${prompt}\nReturn only n8n workflow JSON.`,
      stream: false
    })
  });
  const data = await res.json();
  return JSON.parse(data.response);
}
