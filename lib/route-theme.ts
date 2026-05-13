import { THEMES } from "@/lib/design-tokens";

export type RouteThemeId = keyof typeof THEMES;

/** Tema visual según la ruta (vertical del sitio). */
export function resolveRouteThemeId(pathname: string | null): RouteThemeId {
  if (!pathname) return "index";
  if (pathname.startsWith("/growth")) return "growth";
  if (pathname.startsWith("/filmmaker")) return "filmmaker";
  if (pathname.startsWith("/ia-builder")) return "builder";
  return "index";
}

/** Convierte `#RRGGBB` en `rgba` con opacidad (tokens de página usan hex de 6 dígitos). */
export function hexToRgba(hex: string, alpha: number): string {
  const raw = hex.trim().replace("#", "");
  const full = raw.length === 3 ? raw.split("").map((c) => c + c).join("") : raw.slice(0, 6);
  const n = parseInt(full, 16);
  if (Number.isNaN(n) || full.length !== 6) return `rgba(0,0,0,${alpha})`;
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${alpha})`;
}

type ThemeMode = "dark" | "light";

/** Secundario para GlowButton: en IA Builder se usa `teal` como en el resto de la página. */
export function glowSecondaryForRoute(themeId: RouteThemeId, mode: ThemeMode): string {
  const palette = THEMES[themeId][mode];
  if (themeId === "builder" && "teal" in palette) return palette.teal;
  return palette.secondary;
}
