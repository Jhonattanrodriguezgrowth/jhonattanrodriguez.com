# Inventario `components/ui` (importadores)

**Alcance del mapa:** se buscaron importaciones de `@/components/ui/*` desde:

- `app/**/*.tsx` y `app/**/*.ts`
- `components/**/*.tsx` y `components/**/*.ts` **excluyendo** `components/ui/**`
- Adicionalmente se revisó `hooks/` (no estaba en el alcance original, pero afecta a `toast`).

**Herramienta:** búsqueda en repo (`rg` / grep) sobre rutas `@/components/ui/`.

---

## 1) Componentes UI con importadores fuera de `components/ui`

### Solo `app/` + `components/` (excl. `components/ui/`)

_Ningún_ archivo importa `@/components/ui/*` desde `app/` ni desde componentes fuera de `components/ui/`. El sitio actual (navbar, footer, páginas, CTA) no monta el kit shadcn.

### Incluyendo `hooks/`

| Archivo UI        | Importador              | Notas                          |
|-------------------|-------------------------|--------------------------------|
| `toast.tsx`       | `hooks/use-toast.ts`    | Import de **tipos** (`ToastProps`, etc.). |

---

## 2) Candidatos no usados (sin import desde `app/` ni desde `components/` fuera de `components/ui/`)

Todos los módulos bajo `components/ui/` entran aquí con el criterio estricto anterior, **incluido** `toast.tsx` (porque `hooks/` no cuenta en ese criterio).

Lista de archivos (revisar antes de borrar; pueden servir para features futuras o plantillas v0):

- `accordion.tsx`
- `alert-dialog.tsx`
- `alert.tsx`
- `aspect-ratio.tsx`
- `avatar.tsx`
- `badge.tsx`
- `breadcrumb.tsx`
- `button-group.tsx`
- `button.tsx`
- `calendar.tsx`
- `card.tsx`
- `carousel.tsx`
- `chart.tsx`
- `checkbox.tsx`
- `collapsible.tsx`
- `command.tsx`
- `context-menu.tsx`
- `dialog.tsx`
- `drawer.tsx`
- `dropdown-menu.tsx`
- `empty.tsx`
- `field.tsx`
- `form.tsx`
- `hover-card.tsx`
- `input-group.tsx`
- `input-otp.tsx`
- `input.tsx`
- `item.tsx`
- `kbd.tsx`
- `label.tsx`
- `menubar.tsx`
- `navigation-menu.tsx`
- `pagination.tsx`
- `popover.tsx`
- `progress.tsx`
- `radio-group.tsx`
- `resizable.tsx`
- `scroll-area.tsx`
- `select.tsx`
- `separator.tsx`
- `sheet.tsx`
- `sidebar.tsx`
- `skeleton.tsx`
- `slider.tsx`
- `sonner.tsx`
- `spinner.tsx`
- `switch.tsx`
- `table.tsx`
- `tabs.tsx`
- `textarea.tsx`
- `toast.tsx`
- `toaster.tsx`
- `toggle-group.tsx`
- `toggle.tsx`
- `tooltip.tsx`
- `use-mobile.tsx`
- `use-toast.ts`

---

## 3) Ambiguos (solo referenciados dentro de `components/ui`)

Casi todo el grafo de dependencias del kit es **interno a `components/ui/`**: p. ej. `button.tsx` lo importan `carousel.tsx`, `sidebar.tsx`, `pagination.tsx`, etc., sin que ninguna página lo referencie hoy.

**Revisión manual recomendada antes de eliminar:**

- Dependencias cruzadas (un archivo borrado rompe a otros del mismo directorio).
- Posibles usos futuros o regeneración con shadcn (`components.json`).
- **`toast.tsx` / `toaster.tsx` / `hooks/use-toast.ts`:** la cadena existe (`toaster` → `hooks/use-toast` → tipos en `toast`), pero **no hay `<Toaster />` ni `useToast()` en `app/` ni en componentes de producto**; en runtime el toast tampoco está cableado en el layout.

---

## Duplicados de hooks

Ver análisis detallado y recomendación en `docs/HOOKS_DEDUP.md`.
