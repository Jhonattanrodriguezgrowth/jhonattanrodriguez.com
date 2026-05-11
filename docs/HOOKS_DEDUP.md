# Hooks duplicados: `hooks/` vs `components/ui/`

## `use-mobile`

| Ubicación                    | Contenido | Quién lo importa |
|-----------------------------|-----------|------------------|
| `hooks/use-mobile.ts`       | `useIsMobile()` | `components/ui/sidebar.tsx` |
| `components/ui/use-mobile.tsx` | Misma implementación línea a línea | _Ningún import en el repo_ |

**Recomendación:** mantener **una sola fuente** en `hooks/use-mobile.ts`. Eliminar `components/ui/use-mobile.tsx` tras confirmar que ningún generador externo lo espera, o reemplazarlo por `export { useIsMobile } from "@/hooks/use-mobile"` si hace falta conservar la ruta.

## `use-toast`

| Ubicación                    | Contenido | Quién lo importa |
|-----------------------------|-----------|------------------|
| `hooks/use-toast.ts`        | `useToast`, `toast`, estado global | `components/ui/toaster.tsx` |
| `components/ui/use-toast.ts` | Duplicado del hook | _Ningún import en el repo_ |

Ambos importan tipos desde `components/ui/toast.tsx`.

**Recomendación:** conservar **`hooks/use-toast.ts`** como fuente canónica (ya la usa `toaster.tsx`). Borrar o unificar `components/ui/use-toast.ts` para evitar divergencias. Si en el futuro se usa el toast en la app, montar `<Toaster />` (o Sonner) en `app/layout.tsx` y usar `useToast` solo desde cliente.

## Resumen

| Hook            | Fuente recomendada        | Archivo redundante              |
|-----------------|---------------------------|---------------------------------|
| `useIsMobile`   | `hooks/use-mobile.ts`     | `components/ui/use-mobile.tsx` |
| `useToast`      | `hooks/use-toast.ts`      | `components/ui/use-toast.ts`   |
