import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config()

const app = express()
const PORT = process.env.PORT ?? 5000

// ── Middleware ────────────────────────────────────────────────────────────────

// Parse incoming JSON request bodies
app.use(express.json())

// Enable CORS — restrict origin in production via CORS_ORIGIN env var
app.use(
  cors({
    origin: process.env.CORS_ORIGIN ?? 'http://localhost:5173',
    credentials: true,
  }),
)

// ── Routes ────────────────────────────────────────────────────────────────────

/**
 * Health check — confirms the server is running.
 * GET /api/health → { status: "ok" }
 */
app.get('/api/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' })
})

// ── Start server ──────────────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`[server] Running on http://localhost:${PORT}`)
})
