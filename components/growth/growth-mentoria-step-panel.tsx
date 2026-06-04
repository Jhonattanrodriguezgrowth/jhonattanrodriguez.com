import type { GrowthBrandPillar, GrowthMentoriaStep } from "@/lib/growth-data";
import type { GrowthAccordionTheme } from "@/components/growth/growth-accordion-item";
import { growthContentAlign, growthFlexCenter } from "@/lib/growth-layout";

type GrowthMentoriaStepPanelProps = {
  step: GrowthMentoriaStep;
  theme: GrowthAccordionTheme;
};

export function GrowthMentoriaStepPanel({ step, theme }: GrowthMentoriaStepPanelProps) {
  const { accent, border, dark, textPrimary, textSecondary, textMuted } = theme;

  return (
    <div className={`space-y-4 ${growthContentAlign}`}>
      {step.body ? (
        <p
          className="text-sm sm:text-base leading-relaxed text-pretty"
          style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: textSecondary }}
        >
          {step.body}
        </p>
      ) : null}
      {step.blockquote ? (
        <blockquote
          className="py-3 px-4 italic text-sm rounded-xl text-center max-w-lg mx-auto"
          style={{
            fontFamily: "var(--font-lato), 'Lato', sans-serif",
            color: textMuted,
            border: `1px solid ${border}`,
            borderTop: `3px solid ${accent}`,
            background: dark ? `${accent}05` : `${accent}03`,
          }}
        >
          &ldquo;{step.blockquote}&rdquo;
        </blockquote>
      ) : null}
      {step.intro ? (
        <p
          className="text-sm sm:text-base text-pretty"
          style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: textSecondary }}
        >
          {step.intro}
        </p>
      ) : null}
      {step.pillars ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center">
          {step.pillars.map((pillar: GrowthBrandPillar) => (
            <div
              key={pillar.num}
              className="p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] w-full max-w-xs sm:max-w-none"
              style={{
                background: dark ? `${accent}08` : `${accent}06`,
                border: `1px solid ${border}`,
              }}
            >
              <div className={`${growthFlexCenter} gap-2 mb-3 sm:flex-row`}>
                <span
                  className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0"
                  style={{ background: accent, color: dark ? "#000" : "#fff" }}
                >
                  {pillar.num}
                </span>
                <h4
                  className="font-semibold text-sm text-center"
                  style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: textPrimary }}
                >
                  {pillar.title}
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5 justify-center">
                {pillar.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs sm:text-sm px-2 py-1 rounded-md"
                    style={{
                      fontFamily: "var(--font-lato), 'Lato', sans-serif",
                      background: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
                      color: textSecondary,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
