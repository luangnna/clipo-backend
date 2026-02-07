import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Permite chamadas externas (Lovable depois)
app.use(cors());
app.use(express.json());

// Endpoint de teste
app.get("/", (req, res) => {
  res.json({ status: "CLIPO backend online 🚀" });
});

// Endpoint principal (placeholder por enquanto)
app.post("/process-video", async (req, res) => {
  const { youtube_url } = req.body;

  if (!youtube_url) {
    return res.status(400).json({ error: "youtube_url é obrigatório" });
  }

  // Por enquanto só responde OK
  res.json({
    status: "success",
    message: "Processamento iniciado (MVP)",
    clips: []
  });
});

app.listen(PORT, () => {
  console.log(`CLIPO backend rodando na porta ${PORT}`);
});
