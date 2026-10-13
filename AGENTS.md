# AGENTS.md — Coding Rules for AI Agents

These rules apply to every AI agent working on this project. Read them in full before
making any changes. They are permanent and should not be deleted or overridden.

---

## Before Making Any Changes

1. **Read `AI_CONTEXT.md` first.** It describes the actual state of the codebase, verified
   from source. Do not make assumptions about what is implemented.

2. **Inspect the relevant source files before editing.** `AI_CONTEXT.md` is a starting point,
   not a substitute for reading the code.

3. **Treat the existing source code as the single source of truth.** If `AI_CONTEXT.md`
   contradicts what you see in the code, trust the code and update `AI_CONTEXT.md`.

4. **Never claim a feature is implemented without verifying its source code.** A folder
   existing does not mean its feature is built. A package being installed does not mean
   it is used.

5. **Ask for clarification if a critical requirement cannot be determined from the project.**
   Do not invent missing requirements.

---

## Technology and Architecture Rules

6. **Follow the existing stack and coding conventions.** Do not introduce new frameworks,
   libraries, or patterns without a clear reason. Any new dependency should be justified.

7. **Keep the existing technology versions.** Do not upgrade packages without explicit
   instruction. Check for compatibility before installing anything new.

8. **Avoid unnecessary dependencies.** Do not install a library when the standard library
   or an already-installed package can do the job.

9. **Keep frontend and backend responsibilities separate.**
   - Frontend handles UI, routing, and API calls only.
   - Backend handles business logic, validation, database access, and authentication.
   - Never put server-side secrets or logic in frontend files.

10. **Do not overengineer.** Match the complexity of your solution to the actual requirement.
    This is an assessment project, not a large-scale production system.

11. **Do not refactor unrelated code.** If you are adding a feature, only change the files
    necessary for that feature. Leave unrelated working code alone.

---

## Security Rules

12. **Never expose secrets.** Do not print, log, embed, or commit environment variable values,
    API keys, passwords, tokens, or connection strings.

13. **Never commit `.env` files.** Only `.env.example` files (with placeholder values) should
    be committed. Verify `.gitignore` rules are in place before any `git add`.

14. **Never put backend secrets in frontend variables.** Vite exposes all `VITE_`-prefixed
    variables to the browser bundle. Secrets such as `MONGO_URI` or `JWT_SECRET` must only
    exist in backend environment files.

15. **Validate and sanitise all untrusted input on the server.** Do not rely on frontend
    validation alone. Use a validation library (`zod`, `express-validator`) for all
    API endpoints that accept user input.

16. **Protect all admin endpoints on the backend.** Admin routes must verify authentication
    via middleware before executing any handler logic.

---

## Implementation Quality Rules

17. **Handle loading, success, and error states in every UI interaction.** Any form or
    data-fetching component must render a loading indicator, a success confirmation, and
    a user-readable error message.

18. **Add server-side error handling.** All async route handlers must catch errors and
    return appropriate HTTP status codes and error messages — never let unhandled errors
    crash the server.

19. **Use TypeScript correctly.** Do not use `any` unless absolutely necessary, and document
    why. Prefer explicit types and interfaces. Keep `strict: true` in both `tsconfig.json`
    files.

20. **Use the `@/*` path alias** for imports within `frontend/src/`. Example:
    `import { MyComponent } from '@/components/ui/MyComponent'`. Do not use deep relative
    paths (`../../../`).

---

## Preserve Existing Functionality

21. **Do not break working features.** Before editing any file, note which features
    currently work. Verify they still work after your changes by running the relevant checks.

22. **Do not modify `AI_CONTEXT.md`, `AGENTS.md`, or `README.md` as a side effect of
    feature work** — only update them intentionally when their content changes.

---

## After Making Changes

23. **Run the relevant build checks and tests after every change.**
    - Frontend: `npm run typecheck` and `npm run build`
    - Backend: `npm run typecheck` and `npm run build`

24. **Report exactly what was changed.** After completing work, state:
    - Which files were created, modified, or deleted
    - Which commands were run
    - Which commands passed and which failed
    - Any checks that were NOT run, and why

25. **Clearly disclose any failures or skipped checks.** Do not report a check as passing
    if it was not actually run or if it returned errors.

---

## Keeping Context Up to Date

26. **Update `AI_CONTEXT.md` after any of the following changes:**
    - A feature changes status (e.g., from NOT IMPLEMENTED to IMPLEMENTED AND VERIFIED)
    - A new API endpoint is added
    - A new Mongoose model or schema is created
    - A new environment variable is required
    - A deployment is configured
    - A known bug is fixed or a new one is discovered
    - A significant architectural decision is made

27. **Never replace existing verified context with assumptions or fabricated details.** If
    you are unsure whether something is implemented, mark it UNKNOWN and inspect the code
    to find out.
