# sd-services

A single Next.js app with Better Auth (Google OAuth), oRPC API, Drizzle, and Tailwind/shadcn. The app lives at the **repository root** (no `apps/web` nesting) for straightforward resolution and Next.js best practices.

## Features

- **Next.js** – App Router, React 19
- **Better Auth** – Google sign-in for CMS (no passwords)
- **oRPC** – Type-safe API at `/api/rpc`
- **Drizzle** – PostgreSQL (Neon) with schema in `src/lib/db`
- **TailwindCSS** + **shadcn/ui**
- **Bun** – runtime and package manager

## Getting started

```bash
bun install
```

## Environment

Create `.env` at the repo root (or set in Vercel):

- **Required:** `DATABASE_URL`, `BETTER_AUTH_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`
- **Optional:** `BETTER_AUTH_URL` (defaults to `https://$VERCEL_URL` or `http://localhost:3001`), `CMS_ALLOWED_EMAILS` (comma-separated emails for CMS), R2 vars for uploads, `NEXT_PUBLIC_APP_URL` (no trailing slash; only used for HTTP RPC fallback — SSR uses a direct server client)

For local dev you can omit `BETTER_AUTH_URL`; the app uses `http://localhost:3001` by default.

## Database

```bash
bun run db:push
bun run db:studio
bun run db:generate
bun run db:migrate
```

Schema and migrations live in `src/lib/db`.

## Auth (Google OAuth)

1. In [Google Cloud Console](https://console.cloud.google.com/apis/credentials), create OAuth 2.0 Client ID (Web application).
2. **Authorized JavaScript origins:** add `http://localhost:3001` (local; app runs on port 3001) and your production URL e.g. `https://web-theta-seven-99.vercel.app`.
3. **Authorized redirect URIs:** add `http://localhost:3001/api/auth/callback/google` and `https://web-theta-seven-99.vercel.app/api/auth/callback/google` (or your production URL + `/api/auth/callback/google`).
4. Set `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` in `.env` (and in Vercel env vars).

**Vercel (fix 403 / Invalid callbackURL):** Set **BETTER_AUTH_URL** to your canonical app URL (e.g. `https://web-theta-seven-99.vercel.app`). Otherwise the server uses the deployment hostname and the redirect URI sent to Google won’t match your Google Console entries.

## Scripts

- `bun run dev` – start Next.js at [http://localhost:3001](http://localhost:3001)
- `bun run build` – production build
- `bun run start` – production start
- `bun run db:*` – Drizzle commands
- `bun run check` – Oxlint + Oxfmt

## Project structure

```
sd-services/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/[...all]/   # Better Auth
│   │   │   ├── rpc/[[...path]]  # oRPC
│   │   │   └── upload/          # Upload (R2 or local)
│   │   ├── cms/                 # CMS (admin)
│   │   ├── projects/
│   │   └── ...
│   └── lib/
│       ├── api/         # oRPC routers & context
│       ├── auth/        # Better Auth config
│       ├── db/          # Drizzle schema & client
│       └── env/         # Env validation
├── public/
├── drizzle.config.ts
├── next.config.ts
├── package.json
└── README.md
```

## Deploy (Vercel)

1. One Vercel project; **Root Directory** = `.` (repo root).
2. Set **Environment Variables** (Production and Preview):
   - `DATABASE_URL`, `BETTER_AUTH_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`
   - Optional: `BETTER_AUTH_URL` (your app URL, or leave unset to use Vercel URL), `CMS_ALLOWED_EMAILS`, R2 vars.
3. Optional: `NEXT_PUBLIC_APP_URL` = your app URL (for server-side oRPC base URL); if unset, the app uses `VERCEL_URL` or `http://localhost:3001`.

No separate server project and no `NEXT_PUBLIC_SERVER_URL`; auth and API are same-origin.

## Troubleshooting

### 401 on `/api/image` and `/api/rpc` (images and DB data not loading)

The app never returns 401 for these routes: the image route returns 400/502, and RPC public procedures don’t require auth. If you see **401 Unauthorized** for `GET /api/image` and `POST /api/rpc/setting/get`, `POST /api/rpc/project/list`, etc., it is almost certainly **Vercel Deployment Protection** (Vercel Authentication) requiring login for every request.

**Fix:**

1. In Vercel: **Project → Settings → Deployment Protection**.
2. For **Production**, either turn off protection so the live site is public, or ensure production deployments are not behind “Vercel Authentication”.
3. **Redeploy** after changing env vars; the toast “A new deployment is needed for changes to take effect” means the current deployment is still using the old config.
