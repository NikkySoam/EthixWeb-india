# AI_CONTEXT.md — EthixWeb India

> **IMPORTANT — READ BEFORE MAKING ANY CHANGES**
> This document reflects the *actual* state of the codebase as inspected on 2026-10-13.
> Do not rely on this file alone — always inspect the relevant source files before editing.
> Update this file whenever implementation status, architecture, routes, schemas, configuration,
> or known issues change.

---

## 1. Project Overview and Assessment Requirements

EthixWeb India is a full-stack developer assessment project.

The assessment requires building a production-ready web application with:
- A public-facing website for a company called "EthixWeb India"
- An enquiry/contact form that saves submissions to a database
- An admin dashboard for viewing and managing enquiries
- Authentication protecting the admin area
- MongoDB Atlas as the database
- Deployment on Vercel (frontend) and Render (backend)

**No requirement documents, wireframes, or design specifications have been provided to or
discovered in this codebase.** The above requirements are derived from the project README only.

---

## 2. Current Project Status and Implementation Stage

**Stage: Scaffold Only — No Application Features Implemented**

This project is at the earliest possible stage. Only the tooling configuration and folder
structure have been created. No pages, components, routes, database models, authentication,
or business logic exist.

| Area | Status |
|---|---|
| Project scaffold and folder structure | IMPLEMENTED AND VERIFIED |
| Frontend dev/build pipeline (Vite + TS + Tailwind) | IMPLEMENTED AND VERIFIED |
| Backend dev/build pipeline (Express + TS) | IMPLEMENTED AND VERIFIED |
| Health check API endpoint (`GET /api/health`) | IMPLEMENTED AND VERIFIED |
| MongoDB connection | NOT IMPLEMENTED |
| Enquiry form (frontend) | NOT IMPLEMENTED |
| Enquiry API route (backend) | NOT IMPLEMENTED |
| Enquiry Mongoose model | NOT IMPLEMENTED |
| Admin dashboard | NOT IMPLEMENTED |
| Authentication (admin login) | NOT IMPLEMENTED |
| Homepage / public-facing pages | NOT IMPLEMENTED |
| Navigation / layout components | NOT IMPLEMENTED |
| Vercel deployment | NOT IMPLEMENTED |
| Render deployment | NOT IMPLEMENTED |
| Git repository initialized | NOT IMPLEMENTED |

---

## 3. Confirmed Technology Stack and Versions

All versions are the declared ranges from `package.json`. Installed versions can be
confirmed from the respective `package-lock.json` files.

### Frontend
| Package | Declared Range | Role |
|---|---|---|
| `react` | `^18.3.1` | UI library |
| `react-dom` | `^18.3.1` | React DOM renderer |
| `vite` | `^5.4.8` | Build tool and dev server |
| `@vitejs/plugin-react` | `^4.3.1` | Vite plugin for React (Babel-based HMR) |
| `typescript` | `^5.5.3` | TypeScript compiler |
| `tailwindcss` | `^3.4.13` | Utility-first CSS — v3, NOT v4 |
| `postcss` | `^8.4.47` | CSS processing pipeline |
| `autoprefixer` | `^10.4.20` | CSS vendor prefixing |
| `@types/react` | `^18.3.5` | React type definitions |
| `@types/react-dom` | `^18.3.0` | React DOM type definitions |
| `@types/node` | `^26.6.5` | Node.js type definitions (needed by vite.config.ts) |

### Backend
| Package | Declared Range | Role |
|---|---|---|
| `express` | `^4.21.1` | HTTP server framework |
| `mongoose` | `^8.7.1` | MongoDB ODM (installed, NOT yet used in code) |
| `dotenv` | `^16.4.5` | `.env` loader |
| `cors` | `^2.8.5` | CORS middleware |
| `typescript` | `^5.6.3` | TypeScript compiler |
| `ts-node-dev` | `^2.0.0` | Dev server with TS transpilation + auto-restart |
| `@types/node` | `^22.7.5` | Node.js type definitions |
| `@types/express` | `^5.0.0` | Express type definitions |
| `@types/cors` | `^2.8.17` | CORS type definitions |

**IMPORTANT:** `mongoose` is installed but is **never imported or referenced anywhere in source
code**. No database connection has been configured.

---

## 4. Actual Folder Structure and File Purposes

```
ethixweb-india/                       <- Project root
├── .gitignore                        <- Covers node_modules, dist, .env, *.tsbuildinfo
├── README.md                         <- Recruiter-facing project readme
├── AI_CONTEXT.md                     <- This file
├── AGENTS.md                         <- Coding rules for AI agents
│
├── frontend/                         <- React/Vite application
│   ├── .env                          <- Local dev env (PLACEHOLDER VALUES ONLY — no real secrets)
│   ├── .env.example                  <- Committed placeholder template
│   ├── .gitignore                    <- Covers node_modules, dist, .env, *.tsbuildinfo, .vscode
│   ├── index.html                    <- Vite entry HTML; mounts React at <div id="root">
│   ├── package.json                  <- Scripts: dev, build, preview, typecheck
│   ├── postcss.config.js             <- Registers tailwindcss + autoprefixer
│   ├── tailwind.config.js            <- Content globs: index.html + src/**/*.{ts,tsx}
│   ├── tsconfig.json                 <- Main TS config (strict, bundler, @/* alias, noEmit)
│   ├── tsconfig.node.json            <- TS config for vite.config.ts (composite, emitDeclarationOnly)
│   ├── vite.config.ts                <- Vite config: @vitejs/plugin-react + @/* alias
│   │
│   [GENERATED — not source code, not to be edited manually]
│   ├── vite.config.d.ts              <- Generated by tsc -b (emitDeclarationOnly)
│   ├── vite.config.js                <- Generated by tsc -b (composite)
│   ├── tsconfig.tsbuildinfo          <- TS incremental build cache
│   └── tsconfig.node.tsbuildinfo     <- TS incremental build cache
│   │
│   └── src/
│       ├── App.tsx                   <- Root component (placeholder heading only — NOT real UI)
│       ├── main.tsx                  <- React entry: ReactDOM.createRoot -> <App />
│       ├── index.css                 <- Tailwind directives only
│       ├── vite-env.d.ts             <- /// <reference types="vite/client" />
│       ├── assets/                   <- .gitkeep only — EMPTY
│       ├── components/
│       │   ├── layout/               <- .gitkeep only — EMPTY
│       │   ├── ui/                   <- .gitkeep only — EMPTY
│       │   └── sections/             <- .gitkeep only — EMPTY
│       ├── pages/                    <- .gitkeep only — EMPTY
│       ├── hooks/                    <- .gitkeep only — EMPTY
│       ├── lib/                      <- .gitkeep only — EMPTY
│       └── types/                    <- .gitkeep only — EMPTY
│
└── backend/                          <- Node.js/Express application
    ├── .env                          <- Local dev env (PLACEHOLDER VALUES ONLY — no real secrets)
    ├── .env.example                  <- Committed placeholder template
    ├── .gitignore                    <- Covers node_modules, dist, .env, *.tsbuildinfo, .vscode
    ├── package.json                  <- Scripts: dev, build, start, typecheck
    ├── tsconfig.json                 <- TS config (CommonJS, strict, ES2020, outDir: dist)
    ├── dist/                         <- Compiled JS output — generated, do not edit manually
    │   ├── index.js
    │   └── index.js.map
    └── src/
        ├── index.ts                  <- Express entry: dotenv, CORS, JSON, /api/health, listen
        ├── config/                   <- .gitkeep only — EMPTY
        ├── controllers/              <- .gitkeep only — EMPTY
        ├── middleware/               <- .gitkeep only — EMPTY
        ├── models/                   <- .gitkeep only — EMPTY
        ├── routes/                   <- .gitkeep only — EMPTY
        ├── services/                 <- .gitkeep only — EMPTY
        └── utils/                   <- .gitkeep only — EMPTY
```

---

## 5. Current Application Architecture and Data Flow

### Frontend
- **Entry:** `index.html` -> `src/main.tsx` -> `<App />`
- **Routing:** NOT IMPLEMENTED. No router library is installed.
- **State management:** NOT IMPLEMENTED. No state library installed.
- **API client:** NOT IMPLEMENTED. `src/lib/` is empty.
- **Current rendered output:** A single `<h1>` reading "EthixWeb India — Setup Complete"

### Backend
- **Entry:** `backend/src/index.ts`
- **Middleware chain (verified):** `express.json()` -> `cors()` -> route handlers
- **Database connection:** NOT IMPLEMENTED. `mongoose` package is installed but not imported.
- **Authentication:** NOT IMPLEMENTED.
- **Router modules:** NOT IMPLEMENTED. The one route is inline in `index.ts`.

### CORS (verified in `src/index.ts`)
- `origin`: `process.env.CORS_ORIGIN ?? 'http://localhost:5173'`
- `credentials: true`

---

## 6. Existing Pages, Components and Implemented Features

### Pages
NONE. `src/pages/` contains only `.gitkeep`.

### Components
NONE. All three component directories (`layout/`, `ui/`, `sections/`) contain only `.gitkeep`.

### What `App.tsx` currently renders
```tsx
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <h1 className="text-2xl font-semibold text-gray-800">
        EthixWeb India — Setup Complete
      </h1>
    </div>
  )
}
```
This is a placeholder only. Replace entirely when building the real UI.

---

## 7. Actual API Endpoints

### IMPLEMENTED AND VERIFIED

| Method | Path | Auth Required | Response | Source File |
|---|---|---|---|---|
| `GET` | `/api/health` | None | `200 { "status": "ok" }` | `backend/src/index.ts:30` |

### NOT IMPLEMENTED
- `POST /api/enquiries` — enquiry form submission
- `GET /api/admin/enquiries` — admin: list all enquiries
- `PATCH /api/admin/enquiries/:id` — admin: update enquiry status
- `POST /api/auth/login` — admin authentication
- Any other routes

---

## 8. Database Configuration, Models and Schemas

### Connection: NOT IMPLEMENTED
- `mongoose` package installed at `^8.7.1` but never imported in any source file.
- `backend/src/config/` is empty — no DB connection function exists.
- `MONGO_URI` in `backend/.env` is the placeholder string from `.env.example`.

### Models: NOT IMPLEMENTED
- `backend/src/models/` contains only `.gitkeep`.
- No Mongoose schemas or models exist.

---

## 9. Environment Variables

### Frontend

| Variable | Purpose | Value in current `.env` | Access in code |
|---|---|---|---|
| `VITE_API_BASE_URL` | Backend API base URL | `http://localhost:5000/api` (placeholder) | `import.meta.env.VITE_API_BASE_URL` |

The current `frontend/.env` is identical to `frontend/.env.example`. No real secrets present.

Only variables prefixed `VITE_` are exposed to the browser bundle by Vite.

### Backend

| Variable | Purpose | Value in current `.env` | Used in code |
|---|---|---|---|
| `PORT` | Server listen port | `5000` | YES — `index.ts:9` |
| `MONGO_URI` | MongoDB Atlas connection string | placeholder | NO — no DB connection code |
| `NODE_ENV` | Environment flag | `development` | NO — unused in any conditional |
| `CORS_ORIGIN` | Allowed frontend origin for CORS | `http://localhost:5173` | YES — `index.ts:19` |

The current `backend/.env` is identical to `backend/.env.example`. No real secrets present.

---

## 10. Authentication, Validation and Spam Protection

### Authentication: NOT IMPLEMENTED
- No JWT, session, or cookie logic exists anywhere.
- No user model, login route, or auth middleware exists.
- No password hashing library (`bcrypt`, `argon2`) is installed.

### Input Validation: NOT IMPLEMENTED
- No validation library (`zod`, `express-validator`, `joi`) is installed.
- No sanitisation middleware exists.

### Rate Limiting / Spam Protection: NOT IMPLEMENTED
- No `express-rate-limit` or CAPTCHA integration is installed.

---

## 11. Local Development and Build Commands

```bash
# Install dependencies (run once in each directory)
cd frontend && npm install
cd ../backend && npm install
```

### Frontend
```bash
npm run dev        # Vite dev server -> http://localhost:5173
npm run build      # tsc -b && vite build -> produces dist/
npm run preview    # Preview dist/ build locally
npm run typecheck  # tsc --noEmit
```

### Backend
```bash
npm run dev        # ts-node-dev --respawn --transpile-only -> http://localhost:5000
npm run build      # tsc -> compiles src/ to dist/
npm run start      # node dist/index.js (production entry point)
npm run typecheck  # tsc --noEmit
```

### Verified Build Results (2026-10-13)
| Command | Result |
|---|---|
| `frontend: npm run typecheck` | PASS — zero TypeScript errors |
| `frontend: npm run build` | PASS — 31 modules, dist/ produced in 1.76s |
| `backend: npm run typecheck` | PASS — zero TypeScript errors |
| `backend: npm run build` | PASS — dist/index.js and dist/index.js.map produced |

`npm run dev` for both apps has NOT been verified interactively in this session.

---

## 12. Deployment Architecture and Configuration

### Frontend — Vercel
- Status: NOT CONFIGURED
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable to set: `VITE_API_BASE_URL` (Render backend URL)
- Production URL: UNKNOWN — not deployed

### Backend — Render
- Status: NOT CONFIGURED
- Build command: `npm run build`
- Start command: `npm run start`
- Environment variables to set: `PORT`, `MONGO_URI`, `NODE_ENV=production`, `CORS_ORIGIN` (Vercel URL)
- Production URL: UNKNOWN — not deployed

---

## 13. Completed Tasks

1. Root `.gitignore` created
2. `frontend/` scaffolded: Vite 5 + React 18 + TypeScript + Tailwind CSS v3
3. `backend/` scaffolded: Express 4 + TypeScript + Mongoose (installed, not connected)
4. All required subdirectory folders created with `.gitkeep` stubs
5. TypeScript configurations verified (strict mode, project references working)
6. `frontend/.env.example` and `backend/.env.example` created with placeholder values
7. `GET /api/health` implemented and verified in source and compiled output
8. `frontend: npm run build` verified passing
9. `backend: npm run build` verified passing
10. `frontend: npm run typecheck` verified passing
11. `backend: npm run typecheck` verified passing
12. Root `README.md` written
13. `AI_CONTEXT.md` created (this file)
14. `AGENTS.md` created

---

## 14. Pending Tasks (Priority Order)

1. **Initialize Git repository** at project root (`git init`)
2. **Fix `.gitignore` before first commit** — add `vite.config.js` and `vite.config.d.ts` to `frontend/.gitignore`
3. **MongoDB connection** — create `backend/src/config/db.ts`, call in `index.ts`
4. **Enquiry Mongoose model** — `backend/src/models/Enquiry.ts`
5. **Enquiry API route** — `POST /api/enquiries` with server-side validation
6. **Admin auth** — user model, bcrypt, JWT, auth middleware, login route
7. **Admin enquiry routes** — protected `GET /api/admin/enquiries`, `PATCH /api/admin/enquiries/:id`
8. **Install `react-router-dom`** in frontend and configure routes
9. **Homepage** — layout, hero, services section, enquiry form
10. **Nav/Header component** — responsive navigation
11. **Admin dashboard page** — login form + enquiry management table
12. **Input validation** — `zod` on backend, form validation on frontend
13. **Rate limiting** — `express-rate-limit` on enquiry endpoint
14. **Vercel deployment** — connect frontend, set env vars
15. **Render deployment** — connect backend, set env vars

---

## 15. Known Issues and Unverified Assumptions

### Verified Issues

**Issue 1: Generated build artefacts not in `.gitignore`**
- `frontend/vite.config.d.ts` and `frontend/vite.config.js` are generated by `tsc -b`
  because `tsconfig.node.json` has `composite: true` + `emitDeclarationOnly: true`.
- These are NOT excluded by any current `.gitignore` rule.
- Risk: they would be committed to Git on `git init` + first commit.
- Fix: add `vite.config.js` and `vite.config.d.ts` to `frontend/.gitignore`.

**Issue 2: `frontend/.gitignore` has duplicate entries**
- Lines 1–7 and lines 9–26 contain overlapping rules.
- Functionally harmless; cosmetically confusing.

**Issue 3: No Git repository initialized**
- `git status` returns `fatal: not a git repository`. No commits exist.
- `.gitignore` rules untested against actual tracked files.

**Issue 4: `@types/express: ^5.0.0` vs `express: ^4.21.1`**
- Express 5 types are installed for an Express 4 runtime.
- No TypeScript errors observed, but minor API surface mismatches may surface later.

### UNKNOWN

**Item 5: `npm run dev` behaviour** — not tested interactively this session. Build success is a strong proxy for correctness but does not confirm dev server HMR or hot reload work.

**Item 6: Tailwind CSS purging accuracy** — cannot confirm correct class scanning without running in a browser.

**Item 7: CORS in production** — `CORS_ORIGIN` must be set to the real Vercel URL on Render. Not tested.

---

## 16. Important Technical Decisions and Reasons

| Decision | Reason |
|---|---|
| Tailwind CSS v3 (not v4) | v4 is alpha with breaking config changes; v3 is stable with Vite |
| `ts-node-dev` for backend dev | Single tool for TS transpilation + auto-restart; lighter than nodemon+ts-node |
| `tsc` (no bundler) for backend build | Node.js CommonJS has no need for a bundler; plain `tsc` is transparent and simple |
| `fileURLToPath(import.meta.url)` in vite.config.ts | `package.json` is `"type": "module"` so CJS `__dirname` is unavailable |
| `composite: true` + `emitDeclarationOnly: true` in tsconfig.node.json | TypeScript project references require `composite`; `emitDeclarationOnly` satisfies `allowImportingTsExtensions` without full emit |
| `skipLibCheck: true` in tsconfig.node.json | Vite's bundled types reference DOM globals absent in Node-only config; standard Vite template fix |
| No monorepo tooling | Keeps setup explainable; avoids unnecessary complexity for assessment scale |
| Separate `package.json` per app | Independent installation and deployment for each tier |
| `@/*` path alias | Maps to `src/*` in both tsconfig and vite.config; avoids deep relative import paths |

---

## 17. Next Recommended Step

**Initialize Git, then fix the `.gitignore`, then implement the MongoDB connection.**

### Step-by-step

```bash
# 1. Initialize Git at the project root
cd ethixweb-india
git init
```

Before making the first commit, add these two lines to `frontend/.gitignore`:
```
vite.config.js
vite.config.d.ts
```

```bash
# 2. Make the initial commit
git add .
git commit -m "chore: initial project scaffold"
```

**Then implement the MongoDB connection:**

Create `backend/src/config/db.ts`:
```ts
import mongoose from 'mongoose'

export const connectDB = async (): Promise<void> => {
  const uri = process.env.MONGO_URI
  if (!uri) throw new Error('MONGO_URI environment variable is not set')
  await mongoose.connect(uri)
  console.log('[database] MongoDB connected')
}
```

Import and call it in `backend/src/index.ts` (before `app.listen`):
```ts
import { connectDB } from './config/db'
// ...
connectDB().catch(console.error)
```

Add a real MongoDB Atlas URI to `backend/.env` (never commit this file).
Verify `npm run dev` starts without a connection error.

**After that:** create the Enquiry model in `backend/src/models/Enquiry.ts`.
