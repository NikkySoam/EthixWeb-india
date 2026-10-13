# EthixWeb India — Full-Stack Developer Assessment

A full-stack web application built as part of the EthixWeb India developer assessment.
The project demonstrates a clean, maintainable architecture using modern tooling across
a separate React frontend and a Node.js/Express backend, backed by MongoDB Atlas.

---

## Features

### Implemented
- Project scaffold with strict TypeScript configuration
- Vite 5 + React 18 development server with Hot Module Replacement
- Tailwind CSS v3 design system with PostCSS pipeline
- Express 4 API server with JSON body parsing and CORS configuration
- Health check endpoint: `GET /api/health`
- Modular folder structure (components, pages, hooks, controllers, models, services, etc.)
- Separate `.env.example` files documenting all required environment variables

### Planned (Not Yet Implemented)
- Public-facing homepage with company information
- Enquiry / contact form (name, email, phone, message)
- Server-side form validation and spam protection
- MongoDB Atlas database connection
- Enquiry submission API and Mongoose model
- Admin dashboard for managing enquiries
- Authentication protecting the admin area (JWT-based)
- Vercel deployment (frontend)
- Render deployment (backend)

---

## Technology Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, TypeScript, Vite 5, Tailwind CSS v3 |
| **Backend** | Node.js, Express 4, TypeScript |
| **Database** | MongoDB Atlas + Mongoose 8 |
| **Frontend deployment** | Vercel |
| **Backend deployment** | Render |

---

## Architecture Overview

```
Browser
  │
  ▼
Vercel (frontend/dist/)              ← Static React bundle
  │  HTTPS API calls
  ▼
Render (backend/dist/index.js)       ← Express REST API
  │  Mongoose ODM
  ▼
MongoDB Atlas                        ← Managed database
```

The frontend and backend are entirely independent applications. They communicate only
through HTTP — there is no shared code or shared `node_modules` between them.

---

## Folder Structure

```
ethixweb-india/
├── AI_CONTEXT.md              ← Project context for AI coding agents
├── AGENTS.md                  ← Coding rules for AI agents
├── README.md                  ← This file
│
├── frontend/                  ← React / Vite application
│   ├── src/
│   │   ├── assets/            ← Static assets (images, fonts, icons)
│   │   ├── components/
│   │   │   ├── layout/        ← Page-level layout components (Header, Footer)
│   │   │   ├── ui/            ← Reusable primitive UI components (Button, Input, Card)
│   │   │   └── sections/      ← Full-page section components
│   │   ├── pages/             ← Route-level page components
│   │   ├── hooks/             ← Custom React hooks
│   │   ├── lib/               ← API client helpers and utility functions
│   │   └── types/             ← Shared TypeScript type definitions
│   ├── index.html
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── tsconfig.json
│
└── backend/                   ← Node.js / Express API server
    └── src/
        ├── config/            ← Database connection configuration
        ├── controllers/       ← Route handler logic
        ├── middleware/        ← Custom Express middleware (auth, error handling)
        ├── models/            ← Mongoose schema and model definitions
        ├── routes/            ← Express router files
        ├── services/          ← Business logic layer
        ├── utils/             ← Shared helper functions
        └── index.ts           ← Application entry point
```

---

## Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9
- A **MongoDB Atlas** account (required for database features, which are not yet implemented)

---

## Local Setup

Install dependencies for each application separately.

```bash
# 1. Frontend
cd frontend
npm install

# 2. Backend
cd ../backend
npm install
```

Copy the environment example files and fill in the real values:

```bash
# Frontend
copy frontend\.env.example frontend\.env

# Backend
copy backend\.env.example backend\.env
```

---

## Environment Variables

### Frontend (`frontend/.env`)

| Variable | Purpose | Default |
|---|---|---|
| `VITE_API_BASE_URL` | Backend API base URL (no trailing slash) | `http://localhost:5000/api` |

### Backend (`backend/.env`)

| Variable | Purpose | Default |
|---|---|---|
| `PORT` | Port the Express server listens on | `5000` |
| `MONGO_URI` | MongoDB Atlas connection string | — (required, no default) |
| `NODE_ENV` | Environment flag | `development` |
| `CORS_ORIGIN` | Allowed frontend origin for CORS | `http://localhost:5173` |

> **Never commit `.env` files.** They are listed in `.gitignore`. Only `.env.example`
> files (with placeholder values) are committed.

---

## Development Commands

Open two terminals from the `ethixweb-india/` directory.

### Terminal 1 — Frontend

```bash
cd frontend
npm run dev          # Starts Vite dev server at http://localhost:5173
```

### Terminal 2 — Backend

```bash
cd backend
npm run dev          # Starts ts-node-dev server at http://localhost:5000
```

### Additional Scripts

#### Frontend
| Script | Command | Description |
|---|---|---|
| `dev` | `vite` | Development server with HMR |
| `build` | `tsc -b && vite build` | Type-check and produce `dist/` |
| `preview` | `vite preview` | Preview the production build locally |
| `typecheck` | `tsc --noEmit` | Type-check without emitting |

#### Backend
| Script | Command | Description |
|---|---|---|
| `dev` | `ts-node-dev --respawn --transpile-only src/index.ts` | Dev server with auto-restart |
| `build` | `tsc` | Compile TypeScript to `dist/` |
| `start` | `node dist/index.js` | Run compiled output (production) |
| `typecheck` | `tsc --noEmit` | Type-check without emitting |

---

## API Documentation

### Implemented Endpoints

#### `GET /api/health`
Confirms the server is running.

**Authentication:** None

**Response:**
```json
{
  "status": "ok"
}
```

### Planned Endpoints (Not Yet Implemented)

| Method | Path | Auth | Description |
|---|---|---|---|
| `POST` | `/api/enquiries` | None | Submit a new enquiry |
| `POST` | `/api/auth/login` | None | Admin login |
| `GET` | `/api/admin/enquiries` | Admin JWT | List all enquiries |
| `PATCH` | `/api/admin/enquiries/:id` | Admin JWT | Update enquiry status |

---

## Database Setup

> **MongoDB is installed but not yet connected.** The database integration has not been
> implemented at this stage.

When ready to implement:

1. Create a [MongoDB Atlas](https://www.mongodb.com/atlas) account and cluster.
2. Obtain your connection string (`mongodb+srv://...`).
3. Add it to `backend/.env` as `MONGO_URI`.
4. The `mongoose` package is already installed — no additional installation needed.

---

## Production Build

```bash
# Frontend — produces dist/
cd frontend
npm run build

# Backend — produces dist/
cd backend
npm run build
```

---

## Deployment

> **Neither application has been deployed yet.** The instructions below describe the planned
> configuration. Deployment URLs are pending.

### Frontend → Vercel

1. Connect the `ethixweb-india/frontend` folder to a Vercel project.
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Add environment variable: `VITE_API_BASE_URL=<your Render backend URL>/api`

**Production URL:** PENDING

### Backend → Render

1. Connect the `ethixweb-india/backend` folder to a Render Web Service.
2. Set build command: `npm run build`
3. Set start command: `npm run start`
4. Add environment variables: `MONGO_URI`, `NODE_ENV=production`, `CORS_ORIGIN=<your Vercel URL>`, `PORT=10000`

**Production URL:** PENDING

---

## Security Considerations

- **CORS** is configured to accept requests only from the configured `CORS_ORIGIN`.
- **Environment secrets** are loaded from `.env` files that are excluded from version control.
- **Input validation** will be added to all API endpoints accepting user input (planned).
- **Authentication** for admin routes will use JWT tokens (planned).
- **Rate limiting** will be applied to the enquiry submission endpoint (planned).

---

## Performance Considerations

- Vite produces an optimised, code-split production bundle with gzip compression.
- Tailwind CSS purges unused utility classes in the production build, keeping CSS minimal.
- The Express backend uses `express.json()` only (no unnecessary middleware).

---

## Testing

> No test suite has been configured at this stage.

When tests are added, they will be run with:

```bash
# Frontend
cd frontend && npm test

# Backend
cd backend && npm test
```

---

## India-Specific Design Rationale

The application is designed for an Indian business audience:

- **Multilingual readiness:** folder structure supports adding localised content to `src/lib/`
- **Mobile-first:** Tailwind CSS's responsive utilities will be used from the start, reflecting India's predominantly mobile internet usage
- **Low-bandwidth consideration:** Vite's production bundle splitting and image optimization will be applied to keep initial load sizes small

---

## Project Context for Developers

This project includes two special files for developer and AI agent onboarding:

- **[AI_CONTEXT.md](./AI_CONTEXT.md)** — detailed, verified technical context including
  implementation status, architecture, known issues, and next steps
- **[AGENTS.md](./AGENTS.md)** — coding rules and conventions to follow when contributing
