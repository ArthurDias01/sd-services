#!/usr/bin/env bash
# Deploy server (and optionally web) to Vercel, then print env var blocks.
# Usage:
#   ./scripts/deploy-and-print-env.sh           # Deploy server only, print env blocks
#   ./scripts/deploy-and-print-env.sh --deploy-all   # Deploy server then web
#   ./scripts/deploy-and-print-env.sh --no-deploy    # Only print env blocks
set -e

SCOPE="${VERCEL_SCOPE:-arthurcoally-7500s-projects}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
NO_DEPLOY=false
DEPLOY_ALL=false
[[ "${1:-}" == "--no-deploy" ]] && NO_DEPLOY=true
[[ "${1:-}" == "--deploy-all" ]] && DEPLOY_ALL=true

cd "$ROOT"

# Resolve server production URL: deploy and parse output, or use known alias
SERVER_URL=""
WEB_URL="https://web-theta-seven-99.vercel.app"

if [[ "$NO_DEPLOY" != "true" ]]; then
  echo "Deploying server (project: server)…"
  cp .vercel/project.json .vercel/project.json.web
  cp apps/server/.vercel/project.json .vercel/project.json
  DEPLOY_OUTPUT=$(vercel deploy --prod --scope "$SCOPE" --yes 2>&1) || true
  cp .vercel/project.json.web .vercel/project.json
  rm -f .vercel/project.json.web
  if echo "$DEPLOY_OUTPUT" | grep -q "Error:\|exited with 1"; then
    echo ""
    echo "⚠️  Server build may have failed. In Vercel → server → Settings → Build and Deployment, set:"
    echo "    Root Directory: apps/server   Install Command: bun install"
    echo "    Then run this script again."
    echo ""
  fi
fi

if [[ "$DEPLOY_ALL" == "true" ]]; then
  echo ""
  echo "Deploying web (project: web)…"
  vercel deploy --prod --scope "$SCOPE" --yes
  echo ""
fi

if [[ "$NO_DEPLOY" != "true" && "$DEPLOY_ALL" != "true" ]]; then
  # Parse "Production: https://server-xxx.vercel.app" (deployment URL)
  if echo "$DEPLOY_OUTPUT" | grep -q "Production: https://server-"; then
    _deploy_url=$(echo "$DEPLOY_OUTPUT" | grep -o "https://server-[^[:space:]]*" | head -1)
  fi
fi

# Use stable production alias (same across deploys), not the deployment-specific URL
SERVER_URL="https://server-arthurcoally-7500s-projects.vercel.app"

# Optional: detect web URL from current project
if command -v vercel &>/dev/null; then
  WEB_INSPECT=$(vercel inspect "https://web-theta-seven-99.vercel.app" --scope "$SCOPE" 2>/dev/null || true)
  if echo "$WEB_INSPECT" | grep -q "web-theta-seven-99"; then
    WEB_URL="https://web-theta-seven-99.vercel.app"
  fi
fi

echo ""
echo "=============================================="
echo "  COPY TO SERVER PROJECT (apps/server)"
echo "  Vercel → server project → Settings → Environment Variables"
echo "  Set Root Directory to: apps/server"
echo "  Set Install Command to: bun install"
echo "=============================================="
echo ""
echo "BETTER_AUTH_URL=$SERVER_URL"
echo "CORS_ORIGIN=$WEB_URL"
echo ""
echo "# Add these too (same as in turbo.json):"
echo "DATABASE_URL=<your-database-url>"
echo "DATABASE_URL_DIRECT=<your-direct-url>"
echo "BETTER_AUTH_SECRET=<min-32-chars>"
echo "GOOGLE_CLIENT_ID=<your-google-client-id>"
echo "GOOGLE_CLIENT_SECRET=<your-google-client-secret>"
echo "CMS_ALLOWED_EMAILS=<optional-comma-emails>"
echo "# Optional R2: R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET_NAME, R2_PUBLIC_URL"
echo ""
echo "=============================================="
echo "  COPY TO WEB PROJECT (apps/web)"
echo "  Vercel → web project → Settings → Environment Variables"
echo "=============================================="
echo ""
echo "NEXT_PUBLIC_SERVER_URL=$SERVER_URL"
echo ""
echo "=============================================="
