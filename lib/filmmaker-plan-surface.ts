/** Tokens de superficie por tarjeta de plan (contraste HIG en featured invertida). */

export type PlanSurface = {
  bg: string;
  border: string;
  title: string;
  body: string;
  price: string;
  muted: string;
  chipBg: string;
  chipBorder: string;
  chipText: string;
  detailBorder: string;
  detailPanelBg: string;
  detailLabel: string;
  detailBody: string;
  detailAccent: string;
  detailPanelBorder: string;
  paymentPanelBg: string;
  chevron: string;
  ctaVariant: "primary" | "secondary";
  ctaDark: boolean;
  ctaAccent: string;
  ctaAccentSolid: string;
  inverted: boolean;
};

type SurfaceTheme = {
  tp: string;
  ts: string;
  tm: string;
  accent: string;
  accentSolid: string;
  cardBg: string;
  div: string;
  ab: string;
  gb: string;
};

export function getPlanSurface(
  featured: boolean,
  dark: boolean,
  theme: SurfaceTheme,
): PlanSurface {
  const { tp, ts, tm, accent, accentSolid, cardBg, div, ab, gb } = theme;

  const standard: PlanSurface = {
    bg: cardBg,
    border: `1px solid ${div}`,
    title: tp,
    body: ts,
    price: accent,
    muted: tm,
    chipBg: gb,
    chipBorder: ab,
    chipText: accent,
    detailBorder: div,
    detailPanelBg: gb,
    detailLabel: tm,
    detailBody: ts,
    detailAccent: accent,
    detailPanelBorder: ab,
    paymentPanelBg: cardBg,
    chevron: accent,
    ctaVariant: "secondary",
    ctaDark: dark,
    ctaAccent: accent,
    ctaAccentSolid: accentSolid,
    inverted: false,
  };

  if (!featured) return standard;

  if (dark) {
    return {
      bg: "rgba(255,250,245,0.97)",
      border: "1.5px solid rgba(251,146,60,0.45)",
      title: "rgba(10,7,4,0.92)",
      body: "rgba(10,7,4,0.68)",
      price: "#c2410c",
      muted: "rgba(10,7,4,0.55)",
      chipBg: "rgba(10,7,4,0.06)",
      chipBorder: "rgba(251,146,60,0.35)",
      chipText: "#c2410c",
      detailBorder: "rgba(10,7,4,0.12)",
      detailPanelBg: "rgba(10,7,4,0.05)",
      detailLabel: "rgba(10,7,4,0.55)",
      detailBody: "rgba(10,7,4,0.68)",
      detailAccent: "#c2410c",
      detailPanelBorder: "rgba(251,146,60,0.25)",
      paymentPanelBg: "rgba(10,7,4,0.04)",
      chevron: "#c2410c",
      ctaVariant: "primary",
      ctaDark: false,
      ctaAccent: "#c2410c",
      ctaAccentSolid: "#9a3412",
      inverted: true,
    };
  }

  return {
    bg: "rgba(12,8,5,0.94)",
    border: "1.5px solid rgba(251,146,60,0.35)",
    title: "rgba(255,255,255,0.95)",
    body: "rgba(255,255,255,0.72)",
    price: "#fdba74",
    muted: "rgba(255,255,255,0.55)",
    chipBg: "rgba(255,255,255,0.08)",
    chipBorder: "rgba(251,146,60,0.3)",
    chipText: "#fdba74",
    detailBorder: "rgba(255,255,255,0.12)",
    detailPanelBg: "rgba(255,255,255,0.06)",
    detailLabel: "rgba(255,255,255,0.55)",
    detailBody: "rgba(255,255,255,0.72)",
    detailAccent: "#fdba74",
    detailPanelBorder: "rgba(251,146,60,0.25)",
    paymentPanelBg: "rgba(255,255,255,0.05)",
    chevron: "#fdba74",
    ctaVariant: "primary",
    ctaDark: true,
    ctaAccent: "#fdba74",
    ctaAccentSolid: "#7c2d12",
    inverted: true,
  };
}
