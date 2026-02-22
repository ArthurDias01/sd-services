# sd-services

A single Next.js app with Better Auth (Google OAuth), oRPC API, Drizzle, and Tailwind/shadcn.

## Features

- **Next.js** – App Router, React 19
- **Better Auth** – Google sign-in for CMS (no passwords)
- **oRPC** – Type-safe API at `/api/rpc`
- **Drizzle** – PostgreSQL (Neon) with schema in `apps/web/src/lib/db`
- **TailwindCSS** + **shadcn/ui**
- **Bun** – runtime and package manager

## Getting started

```bash
cd apps/web && bun install
```

## Environment (apps/web)

Create `apps/web/.env` (or set in Vercel):

- **Required:** `DATABASE_URL`, `BETTER_AUTH_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`
- **Optional:** `BETTER_AUTH_URL` (defaults to `https://$VERCEL_URL` or `http://localhost:3001`), `CMS_ALLOWED_EMAILS` (comma-separated emails for CMS), R2 vars for uploads

For local dev you can omit `BETTER_AUTH_URL`; the app uses `http://localhost:3001` by default.

## Database

```bash
bun run db:push     # from repo root or apps/web
bun run db:studio
bun run db:generate
bun run db:migrate
```

Schema and migrations live in `apps/web/src/lib/db`.

## Auth (Google OAuth)

1. In [Google Cloud Console](https://console.cloud.google.com/apis/credentials), create OAuth 2.0 Client ID (Web application).
2. **Authorized JavaScript origins:** add `http://localhost:3001` (local; app runs on port 3001) and your production URL e.g. `https://web-theta-seven-99.vercel.app`.
3. **Authorized redirect URIs:** add `http://localhost:3001/api/auth/callback/google` and `https://web-theta-seven-99.vercel.app/api/auth/callback/google` (or your production URL + `/api/auth/callback/google`).
4. Set `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` in `apps/web/.env` (and in Vercel env vars).

**Vercel (fix 403 / Invalid callbackURL):** Set **BETTER_AUTH_URL** to your canonical app URL (e.g. `https://web-theta-seven-99.vercel.app`). Otherwise the server uses the deployment hostname and the redirect URI sent to Google won’t match your Google Console entries.

## Scripts (from repo root)

- `bun run dev` – start Next.js at [http://localhost:3001](http://localhost:3001)
- `bun run build` – build (run from `apps/web` or root)
- `bun run start` – production start
- `bun run db:*` – Drizzle commands (run from `apps/web` or root)
- `bun run check` – Oxlint + Oxfmt

## Project structure

```
sd-services/
├── apps/web/                 # Single Next.js app
│   ├── src/
│   │   ├── app/
│   │   │   ├── api/
│   │   │   │   ├── auth/[...all]/   # Better Auth
│   │   │   │   ├── rpc/[[...path]]  # oRPC
│   │   │   │   └── upload/          # Upload (R2 or local)
│   │   │   ├── cms/                 # CMS (admin)
│   │   │   ├── projects/
│   │   │   └── ...
│   │   └── lib/
│   │       ├── api/         # oRPC routers & context
│   │       ├── auth/        # Better Auth config
│   │       ├── db/          # Drizzle schema & client
│   │       └── env/         # Env validation
│   ├── drizzle.config.ts
│   └── package.json
├── package.json             # Root scripts (dev, build, db:*)
└── README.md
```

## Deploy (Vercel)

1. One Vercel project; **Root Directory** = `apps/web`.
2. Set **Environment Variables** (Production and Preview):
   - `DATABASE_URL`, `BETTER_AUTH_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`
   - Optional: `BETTER_AUTH_URL` (your app URL, or leave unset to use Vercel URL), `CMS_ALLOWED_EMAILS`, R2 vars.
3. Optional: `NEXT_PUBLIC_APP_URL` = your app URL (for server-side oRPC base URL); if unset, the app uses `VERCEL_URL` or `http://localhost:3001`.

No separate server project and no `NEXT_PUBLIC_SERVER_URL`; auth and API are same-origin.
