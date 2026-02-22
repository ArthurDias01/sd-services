#!/usr/bin/env bash
# Deploy the web app to Vercel and print env var reminders.
# Usage:
#   ./scripts/deploy-and-print-env.sh           # Deploy and print env block
#   ./scripts/deploy-and-print-env.sh --no-deploy   # Only print env block
set -e

NO_DEPLOY=false
[[ "${1:-}" == "--no-deploy" ]] && NO_DEPLOY=true

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [[ "$NO_DEPLOY" != "true" ]]; then
  echo "Deploying web (Root Directory: apps/web)…"
  vercel deploy --prod --yes
  echo ""
fi

echo "=============================================="
echo "  ENV FOR VERCEL (apps/web)"
echo "  Settings → Environment Variables"
echo "  Root Directory: apps/web"
echo "=============================================="
echo ""
echo "Required:"
echo "  DATABASE_URL=<postgres-url>"
echo "  BETTER_AUTH_SECRET=<min-32-chars>"
echo "  GOOGLE_CLIENT_ID=<...>"
echo "  GOOGLE_CLIENT_SECRET=<...>"
echo ""
echo "Optional:"
echo "  BETTER_AUTH_URL=https://your-app.vercel.app"
echo "  NEXT_PUBLIC_APP_URL=https://your-app.vercel.app"
echo "  CMS_ALLOWED_EMAILS=admin@example.com"
echo "  R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET_NAME, R2_PUBLIC_URL"
echo ""
