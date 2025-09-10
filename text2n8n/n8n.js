const N8N_URL = process.env.N8N_URL || "http://localhost:5678";
const N8N_API_KEY = process.env.N8N_API_KEY;

export async function createWorkflow(workflowJson) {
  const headers = { "Content-Type": "application/json" };
  if (N8N_API_KEY) {
    headers["X-N8N-API-KEY"] = N8N_API_KEY;
  }
  const res = await fetch(`${N8N_URL}/rest/workflows`, {
    method: "POST",
    headers,
    body: JSON.stringify(workflowJson)
  });
  return res.json();
}
