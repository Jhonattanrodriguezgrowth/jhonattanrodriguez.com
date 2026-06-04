"use client";

import { useEffect, useRef, useState } from "react";
import { GrowthAccordionItem } from "@/components/growth/growth-accordion-item";
import type { GrowthOfferingContentProps } from "@/components/growth/growth-offering-types";
import { GrowthHighlightBlock } from "@/components/growth/growth-highlight-block";
import { GrowthPlatformTabs } from "@/components/growth/growth-platform-tabs";
import {
  GROWTH_PRESENCIA_INSTAGRAM_RESULTADO,
  GROWTH_PRESENCIA_INSTAGRAM_SESSIONS,
  GROWTH_PRESENCIA_LINKEDIN_RESULTADO,
  GROWTH_PRESENCIA_LINKEDIN_SESSIONS,
  type GrowthPresenciaTab,
  type GrowthSession,
} from "@/lib/growth-data";
import { growthContentAlign, growthFlexCenter } from "@/lib/growth-layout";

const PRESENCIA_TABS = [
  { id: "linkedin" as const, label: "LinkedIn", panelId: "growth-presencia-rrss-linkedin" },
  { id: "instagram" as const, label: "Instagram", panelId: "growth-presencia-rrss-instagram" },
];

function getPresenciaSessions(tab: GrowthPresenciaTab): GrowthSession[] {
  return tab === "linkedin" ? GROWTH_PRESENCIA_LINKEDIN_SESSIONS : GROWTH_PRESENCIA_INSTAGRAM_SESSIONS;
}

function getPresenciaResultado(tab: GrowthPresenciaTab): string {
  return tab === "linkedin" ? GROWTH_PRESENCIA_LINKEDIN_RESULTADO : GROWTH_PRESENCIA_INSTAGRAM_RESULTADO;
}

export function GrowthPresenciaRrssOfferingContent({
  pageTheme,
  accordionTheme,
  isOfferingExpanded = false,
}: GrowthOfferingContentProps) {
  const { dark, accent, border, text } = pageTheme;
  const [activeTab, setActiveTab] = useState<GrowthPresenciaTab>("linkedin");
  const [openSessionIndex, setOpenSessionIndex] = useState<number | null>(0);
  const wasOfferingExpanded = useRef(false);

  const bodyStyle = {
    fontFamily: "var(--font-lato), 'Lato', sans-serif",
    color: text.secondary,
  };

  useEffect(() => {
    if (isOfferingExpanded && !wasOfferingExpanded.current) {
      setOpenSessionIndex(0);
    }
    wasOfferingExpanded.current = isOfferingExpanded;
  }, [isOfferingExpanded]);

  const handleTabChange = (tab: GrowthPresenciaTab) => {
    setActiveTab(tab);
    setOpenSessionIndex(0);
  };

  const sessions = getPresenciaSessions(activeTab);
  const resultado = getPresenciaResultado(activeTab);
  const activePanel = PRESENCIA_TABS.find((t) => t.id === activeTab)!;

  return (
    <>
      <GrowthPlatformTabs
        tabs={PRESENCIA_TABS}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        dark={dark}
        accent={accent}
        border={border}
        textMuted={text.muted}
      />

      <div
        id={activePanel.panelId}
        role="tabpanel"
        aria-labelledby={`${activePanel.panelId}-tab`}
        className="space-y-3"
      >
        {sessions.map((session, i) => (
          <GrowthAccordionItem
            key={`${activeTab}-${session.num}`}
            itemId={`growth-presencia-rrss-${activeTab}-session-${i}`}
            title={session.title}
            subtitle={session.duration}
            badge={session.num}
            isOpen={openSessionIndex === i}
            onToggle={() => setOpenSessionIndex((prev) => (prev === i ? null : i))}
            theme={accordionTheme}
          >
            <p
              className={`text-sm sm:text-base leading-relaxed mb-4 text-pretty ${growthContentAlign}`}
              style={bodyStyle}
            >
              {session.desc}
            </p>
            {session.reto ? (
              <div
                className="p-3 rounded-xl"
                style={{
                  background: dark ? `${accent}08` : `${accent}06`,
                  border: `1px solid ${border}`,
                }}
              >
                <span
                  className="text-xs font-semibold uppercase tracking-wider block mb-1"
                  style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: accent }}
                >
                  Reto
                </span>
                <p
                  className={`text-sm sm:text-base ${growthContentAlign}`}
                  style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: text.primary }}
                >
                  {session.reto}
                </p>
              </div>
            ) : null}
          </GrowthAccordionItem>
        ))}
      </div>

      <GrowthHighlightBlock
        title="Resultado"
        dark={dark}
        accent={accent}
        border={border}
        textPrimary={text.primary}
        className="mt-6"
      >
        {resultado}
      </GrowthHighlightBlock>
    </>
  );
}
