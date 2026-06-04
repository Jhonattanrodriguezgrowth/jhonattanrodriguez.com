type GrowthSectionKickerProps = {
  label: string;
  variant: "emphasis" | "standard";
  accent: string;
  dark: boolean;
  displayColor?: string;
};

export function GrowthSectionKicker({
  label,
  variant,
  accent,
  dark,
  displayColor,
}: GrowthSectionKickerProps) {
  if (variant === "emphasis") {
    return (
      <div
        className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4"
        style={{
          fontFamily: "var(--font-lato), 'Lato', sans-serif",
          background: dark ? `${accent}15` : `${accent}10`,
          color: accent,
        }}
      >
        {label}
      </div>
    );
  }

  return (
    <span
      className="film-display-kicker inline-block text-xs tracking-[0.22em] uppercase font-medium mb-4 px-4 py-2 rounded-full"
      style={{
        fontFamily: "var(--font-lato), sans-serif",
        color: displayColor ?? accent,
        background: dark ? `${accent}15` : `${accent}10`,
      }}
    >
      {label}
    </span>
  );
}
