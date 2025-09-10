import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { promptLLM } from "./llm.js";
import { createWorkflow } from "./n8n.js";

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

app.post("/build", async (req, res) => {
  try {
    const { prompt } = req.body;
    const workflowJson = await promptLLM(prompt);
    const workflow = await createWorkflow(workflowJson);
    res.json({ message: "Workflow created.", workflow });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on ${port}`));
