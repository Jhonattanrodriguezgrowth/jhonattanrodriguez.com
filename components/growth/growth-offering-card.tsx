"use client";

import type { Dispatch, SetStateAction } from "react";
import { GrowthOfferingShell } from "@/components/growth/growth-offering-shell";
import type { GrowthOfferingContentProps, GrowthPageTheme } from "@/components/growth/growth-offering-types";
import { GrowthPricePanel } from "@/components/growth/growth-price-panel";
import { GrowthSectionKicker } from "@/components/growth/growth-section-kicker";
import { CTACalendar } from "@/components/cta-buttons";
import type { GrowthAccordionTheme } from "@/components/growth/growth-accordion-item";
import { GROWTH_OFFERING_CONTENT } from "@/lib/growth-offering-content";
import type { GrowthInnerExpanded, GrowthOfferingId, GrowthOfferingMeta } from "@/lib/growth-data";
import { toggleInnerExpanded } from "@/lib/growth-data";
import { growthContentAlign, growthProseWrap } from "@/lib/growth-layout";

type GrowthOfferingCardProps = {
  meta: GrowthOfferingMeta;
  isExpanded: boolean;
  onToggle: () => void;
  pageTheme: GrowthPageTheme;
  accordionTheme: GrowthAccordionTheme;
  innerExpanded: GrowthInnerExpanded;
  setInnerExpanded: Dispatch<SetStateAction<GrowthInnerExpanded>>;
};

export function GrowthOfferingCard({
  meta,
  isExpanded,
  onToggle,
  pageTheme,
  accordionTheme,
  innerExpanded,
  setInnerExpanded,
}: GrowthOfferingCardProps) {
  const { dark, accent, border, card, display, text, accentSolid } = pageTheme;
  const Content = GROWTH_OFFERING_CONTENT[meta.id];

  const headingStyle = {
    fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif",
    color: text.primary,
    fontSize: "clamp(24px, 3.5vw, 36px)",
  };

  const bodyStyle = {
    fontFamily: "var(--font-lato), 'Lato', sans-serif",
    color: text.secondary,
  };

  const contentProps: GrowthOfferingContentProps = {
    offeringId: meta.id,
    pageTheme,
    accordionTheme,
    innerExpanded,
    onInnerToggle: (index: number) => {
      setInnerExpanded((prev) => toggleInnerExpanded(prev, meta.id, index));
    },
    isOfferingExpanded: isExpanded,
  };

  const wrapperClass = meta.scrollAnchor ? "scroll-mt-28" : undefined;

  return (
    <div id={meta.id} className={wrapperClass}>
      <GrowthOfferingShell
        offeringId={meta.id}
        isExpanded={isExpanded}
        onToggle={onToggle}
        tallDetails={meta.tallDetails}
        dark={dark}
        cardBg={card}
        border={border}
        accent={accent}
        titleBlock={
          <>
            <div className="flex justify-center w-full">
              <GrowthSectionKicker
                label={meta.kicker}
                variant={meta.kickerVariant}
                accent={accent}
                dark={dark}
                displayColor={display}
              />
            </div>
            <h2 className="font-bold mb-4 text-center w-full" style={headingStyle}>
              {meta.title}
            </h2>
            <p
              className={`text-sm sm:text-base leading-relaxed ${growthProseWrap} ${growthContentAlign}`}
              style={bodyStyle}
            >
              {meta.intro}
            </p>
          </>
        }
        pricePanel={
          <GrowthPricePanel
            priceUsd={meta.priceUsd}
            priceCop={meta.priceCop}
            duration={meta.duration}
            priceNote={meta.priceNote}
            priceUsdSize={meta.priceUsdSize ?? "lg"}
            dark={dark}
            accent={accent}
            border={border}
            textSecondary={text.secondary}
            textMuted={text.muted}
          >
            {meta.calendarLabel ? (
              <CTACalendar
                variant="primary"
                dark={dark}
                accentColor={accent}
                accentSolidColor={accentSolid}
                label={meta.calendarLabel}
                className="mt-4 w-full max-w-xs mx-auto"
              />
            ) : null}
          </GrowthPricePanel>
        }
      >
        <Content {...contentProps} />
      </GrowthOfferingShell>
    </div>
  );
}
