# Arquitectura del front (Next.js App Router)

## Ubicación de secciones

- **`components/sections/`**: bloques reutilizables entre páginas de marketing (envoltorios de tema, héroes compartidos, etc.).
- **`components/shared/`**: utilidades visuales de bajo nivel (fondos, glass, botones con glow) usadas por secciones y páginas.
- **`components/`** (raíz): piezas globales del sitio: `navbar`, `footer`, `theme-provider`, `cta-buttons`.
- **`components/ui/`**: kit tipo shadcn (Radix); hoy casi todo el árbol está sin cablear a las rutas (ver `docs/UNUSED_UI_INVENTORY.md`).

## Estilos globales

- **Activo:** `app/globals.css`, importado en `app/layout.tsx`.
- **Copia no usada por el bundler:** `styles/globals.css` (misma base de tokens Tailwind v4 + `tw-animate-css`). Sirve como referencia o si se moviera el entry; no eliminar sin alinear imports.

## Metadatos

- Metadatos globales en `app/layout.tsx`.
- Metadatos por ruta en `app/<segmento>/layout.tsx` (título y descripción específicos sin repetir todo el objeto global).
