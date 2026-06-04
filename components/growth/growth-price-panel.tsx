import type { ReactNode } from "react";

type GrowthPricePanelProps = {
  priceUsd: string;
  priceCop: string;
  duration: string;
  priceNote?: string;
  priceUsdSize?: "lg" | "md";
  dark: boolean;
  accent: string;
  border: string;
  textSecondary: string;
  textMuted: string;
  children?: ReactNode;
};

export function GrowthPricePanel({
  priceUsd,
  priceCop,
  duration,
  priceNote,
  priceUsdSize = "lg",
  dark,
  accent,
  border,
  textSecondary,
  textMuted,
  children,
}: GrowthPricePanelProps) {
  return (
    <div
      className="shrink-0 flex flex-col items-center text-center mx-auto w-full max-w-sm p-5 rounded-2xl"
      style={{
        background: dark ? `${accent}08` : `${accent}06`,
        border: `1px solid ${border}`,
      }}
    >
      <div
        className="font-bold"
        style={{
          fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif",
          color: accent,
          fontSize: priceUsdSize === "lg" ? "clamp(28px, 4vw, 40px)" : "clamp(24px, 3vw, 32px)",
        }}
      >
        {priceUsd}
      </div>
      <div
        className="text-sm"
        style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: textSecondary }}
      >
        {priceCop}
      </div>
      <div
        className="text-xs mt-2"
        style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: textMuted }}
      >
        {duration}
      </div>
      {priceNote ? (
        <div
          className={`text-xs px-2 py-1 rounded-lg ${priceUsdSize === "md" ? "mt-2" : "mt-1"}`}
          style={{
            fontFamily: "var(--font-lato), 'Lato', sans-serif",
            color: accent,
            background: dark ? `${accent}12` : `${accent}08`,
          }}
        >
          {priceNote}
        </div>
      ) : null}
      {children}
    </div>
  );
}
