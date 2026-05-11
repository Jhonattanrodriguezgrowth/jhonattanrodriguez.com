# Desarrollo local

## Requisitos

- Node.js reciente (LTS recomendado)
- pnpm (el lockfile es pnpm v9; ver `package.json` → `packageManager`)

## Scripts

Ejecutar sin instalar pnpm globalmente:

```bash
npx --yes pnpm@9 install
npx --yes pnpm@9 run dev
npx --yes pnpm@9 run build
```

### Lint

`pnpm run lint` ejecuta ESLint (flat config en `eslint.config.mjs`, reglas `eslint-config-next/core-web-vitals`).

## CSS global

La hoja activa es `app/globals.css` (importada en `app/layout.tsx`). Hay una copia en `styles/globals.css` documentada en `docs/ARCHITECTURE.md`.
