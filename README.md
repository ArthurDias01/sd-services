# sd-services

This project was created with [Better-T-Stack](https://github.com/AmanVarshney01/create-better-t-stack), a modern TypeScript stack that combines Next.js, Elysia, ORPC, and more.

## Features

- **TypeScript** - For type safety and improved developer experience
- **Next.js** - Full-stack React framework
- **TailwindCSS** - Utility-first CSS for rapid UI development
- **shadcn/ui** - Reusable UI components
- **Elysia** - Type-safe, high-performance framework
- **oRPC** - End-to-end type-safe APIs with OpenAPI integration
- **Bun** - Runtime environment
- **Drizzle** - TypeScript-first ORM
- **PostgreSQL** - Database engine
- **Authentication** - Better-Auth
- **Oxlint** - Oxlint + Oxfmt (linting & formatting)
- **Turborepo** - Optimized monorepo build system

## Getting Started

First, install the dependencies:

```bash
bun install
```

## Database Setup

This project uses PostgreSQL with Drizzle ORM.

1. Make sure you have a PostgreSQL database set up.
2. Create `apps/server/.env` with at least: `DATABASE_URL`, `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`, `CORS_ORIGIN`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`. See the Authentication section below for Google OAuth. Optional: `CMS_ALLOWED_EMAILS` (comma-separated emails allowed to access the CMS).
3. Apply the schema to your database:

```bash
bun run db:push
```

## Authentication (Google OAuth for CMS)

CMS access uses Google sign-in only (no passwords).

1. In [Google Cloud Console](https://console.cloud.google.com/apis/credentials), create OAuth 2.0 Client ID credentials (Web application).
2. Set the authorized redirect URI to `{BETTER_AUTH_URL}/api/auth/callback/google` (e.g. `http://localhost:3000/api/auth/callback/google` for local dev).
3. Set `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` in `apps/server/.env`.
4. Optional: set `CMS_ALLOWED_EMAILS` to a comma-separated list of emails that may access the CMS. If unset, any signed-in Google user can access it.

Then, run the development server:

```bash
bun run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser to see the web application.
The API is running at [http://localhost:3000](http://localhost:3000).

## Git Hooks and Formatting

- Format and lint fix: `bun run check`

## Project Structure

```
sd-services/
├── apps/
│   ├── web/         # Frontend application (Next.js)
│   └── server/      # Backend API (Elysia, ORPC)
├── packages/
│   ├── api/         # API layer / business logic
│   ├── auth/        # Authentication configuration & logic
│   └── db/          # Database schema & queries
```

## Available Scripts

- `bun run dev`: Start all applications in development mode
- `bun run build`: Build all applications
- `bun run dev:web`: Start only the web application
- `bun run dev:server`: Start only the server
- `bun run check-types`: Check TypeScript types across all apps
- `bun run db:push`: Push schema changes to database
- `bun run db:generate`: Generate database client/types
- `bun run db:migrate`: Run database migrations
- `bun run db:studio`: Open database studio UI
- `bun run check`: Run Oxlint and Oxfmt

## Deploying to Vercel (Turborepo)

Per [Vercel’s Turborepo docs](https://vercel.com/docs/monorepos/turborepo):

1. **Set Root Directory** in the Vercel project: [Dashboard](https://vercel.com) → your project → **Settings** → **Build and Deployment** → **Root Directory** → `apps/web` → **Save**.
2. Deploy from the **repository root** (so the full monorepo is used):
   ```bash
   vercel deploy --prod --scope <your-team-slug>
   ```
   Or connect the repo in Vercel and push to your main branch for automatic deploys.

### Deploy the API (Elysia) on Vercel

Use a **second Vercel project** for the backend so the Next.js app can call it:

1. In Vercel: [New Project](https://vercel.com/new) → import the **same** Git repo (`sd-services`).
2. Set **Root Directory** to `apps/server` (Settings → Build and Deployment).
3. Add **Environment Variables** (Production and Preview):
   - `BETTER_AUTH_URL` = **your server’s production URL** (e.g. `https://sd-services-server.vercel.app` — you’ll get this after the first deploy).
   - `CORS_ORIGIN` = **your web app URL** (e.g. `https://web-theta-seven-99.vercel.app`).
   - Plus all other server env vars: `DATABASE_URL`, `BETTER_AUTH_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, and optionally `CMS_ALLOWED_EMAILS`, R2 vars, etc.
4. Deploy. Copy the **production URL** of the server (e.g. `https://sd-services-server.vercel.app`).

### Connect web app to the API

In the **web** Vercel project (Settings → Environment Variables):

- **`NEXT_PUBLIC_SERVER_URL`** = the **server** project’s URL (e.g. `https://sd-services-server.vercel.app`).

Redeploy the web app after setting this so the frontend uses the correct API URL.
