"use client";

import { GrowthAccordionItem } from "@/components/growth/growth-accordion-item";
import type { GrowthOfferingContentProps } from "@/components/growth/growth-offering-types";
import { GrowthHighlightBlock } from "@/components/growth/growth-highlight-block";
import { GrowthMentoriaStepPanel } from "@/components/growth/growth-mentoria-step-panel";
import { CheckIcon } from "@/components/shared/icons";
import {
  GROWTH_CONTROL_MARCA_RRSS_CIRCULO_STEP,
  GROWTH_CONTROL_MARCA_RRSS_CHANNELS,
  GROWTH_CONTROL_MARCA_RRSS_ENTREGABLE,
  GROWTH_CONTROL_MARCA_RRSS_INCLUDES,
  GROWTH_CONTROL_MARCA_RRSS_INSIGHT,
  GROWTH_CONTROL_MARCA_RRSS_PILARES_STEP,
  GROWTH_CONTROL_MARCA_RRSS_RESULTADO,
} from "@/lib/growth-data";
import { growthContentAlign, growthFlexCenter, growthRowCenter } from "@/lib/growth-layout";

export function GrowthControlMarcaRrssOfferingContent({
  offeringId,
  pageTheme,
  accordionTheme,
  innerExpanded,
  onInnerToggle,
}: GrowthOfferingContentProps) {
  const { dark, accent, border, text } = pageTheme;
  const bodyStyle = {
    fontFamily: "var(--font-lato), 'Lato', sans-serif",
    color: text.secondary,
  };
  const expandedIndex = innerExpanded[offeringId] ?? null;

  return (
    <>
      <div
        className={`p-4 rounded-xl mb-8 ${growthFlexCenter} gap-3 ${growthContentAlign}`}
        style={{
          background: dark ? `${accent}08` : `${accent}06`,
          border: `1px solid ${border}`,
        }}
      >
        <div
          className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
          style={{ background: accent }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ color: dark ? "#000" : "#fff" }}>
            <path d="M6 3V6.5M6 8.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <p
          className="text-sm sm:text-base italic text-pretty"
          style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: text.primary }}
        >
          {GROWTH_CONTROL_MARCA_RRSS_INSIGHT}
        </p>
      </div>

      <div className={`mb-8 ${growthContentAlign}`}>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: text.primary }}
        >
          Qué incluye
        </h3>
        <div className="space-y-3">
          {GROWTH_CONTROL_MARCA_RRSS_INCLUDES.map((item, i) => (
            <GrowthAccordionItem
              key={item.title}
              itemId={`growth-control-marca-rrss-include-${i}`}
              title={item.title}
              isOpen={expandedIndex === i}
              onToggle={() => onInnerToggle(i)}
              theme={accordionTheme}
              leadingIcon={<CheckIcon color={accent} />}
              tallPanel={item.panel === "pilares"}
            >
              {item.panel === "circulo" ? (
                <GrowthMentoriaStepPanel step={GROWTH_CONTROL_MARCA_RRSS_CIRCULO_STEP} theme={accordionTheme} />
              ) : item.panel === "pilares" ? (
                <GrowthMentoriaStepPanel step={GROWTH_CONTROL_MARCA_RRSS_PILARES_STEP} theme={accordionTheme} />
              ) : (
                <p className={`text-xs sm:text-sm leading-relaxed ${growthContentAlign}`} style={bodyStyle}>
                  {item.desc}
                </p>
              )}
            </GrowthAccordionItem>
          ))}
        </div>
      </div>

      <div className={`mb-8 ${growthContentAlign}`}>
        <h3
          className="font-semibold text-sm mb-3"
          style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: text.muted }}
        >
          Canales trabajados
        </h3>
        <div className={growthRowCenter}>
          {GROWTH_CONTROL_MARCA_RRSS_CHANNELS.map((channel) => (
            <span
              key={channel}
              className="text-sm px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:scale-105"
              style={{
                fontFamily: "var(--font-lato), 'Lato', sans-serif",
                background: dark ? `${accent}12` : `${accent}08`,
                border: `1px solid ${border}`,
                color: accent,
              }}
            >
              {channel}
            </span>
          ))}
        </div>
      </div>

      <GrowthHighlightBlock
        title="Entregable"
        dark={dark}
        accent={accent}
        border={border}
        textPrimary={text.primary}
      >
        {GROWTH_CONTROL_MARCA_RRSS_ENTREGABLE}
      </GrowthHighlightBlock>

      <div className="mt-6">
        <GrowthHighlightBlock
          title="Resultado"
          dark={dark}
          accent={accent}
          border={border}
          textPrimary={text.primary}
        >
          {GROWTH_CONTROL_MARCA_RRSS_RESULTADO}
        </GrowthHighlightBlock>
      </div>
    </>
  );
}
