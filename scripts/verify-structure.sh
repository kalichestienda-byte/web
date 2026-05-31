#!/usr/bin/env bash
set -euo pipefail

echo "✅ Verificando estructura base..."

req=(
  "src/app/(marketing)/layout.tsx"
  "src/app/(marketing)/page.tsx"
  "src/app/(marketing)/robots.ts"
  "src/app/(marketing)/sitemap.ts"
  "src/app/(marketing)/opengraph-image.tsx"
  "src/app/(marketing)/icon.tsx"
  "src/app/api/health/route.ts"
  "src/app/globals.css"
  "src/app/favicon.ico"
  "components"
  "content"
  "lib"
  "public"
  "styles"
  "types"
  "docs"
  "scripts"
)

missing=0
for p in "${req[@]}"; do
  if [[ ! -e "$p" ]]; then
    echo "❌ Falta: $p"
    missing=1
  fi
done

if [[ $missing -eq 1 ]]; then
  echo ""
  echo "❌ Estructura incompleta."
  exit 1
fi

echo "✅ Estructura OK."
