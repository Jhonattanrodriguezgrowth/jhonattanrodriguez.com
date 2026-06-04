"use client";

import type { Dispatch, SetStateAction } from "react";
import { GrowthOfferingCard } from "@/components/growth/growth-offering-card";
import type { GrowthPageTheme } from "@/components/growth/growth-offering-types";
import type { GrowthAccordionTheme } from "@/components/growth/growth-accordion-item";
import {
  GROWTH_OFFERING_ORDER,
  GROWTH_OFFERINGS,
  type GrowthInnerExpanded,
  type GrowthOfferingId,
} from "@/lib/growth-data";

type GrowthOfferingsListProps = {
  expandedOffering: GrowthOfferingId | null;
  onToggleOffering: (id: GrowthOfferingId) => void;
  pageTheme: GrowthPageTheme;
  accordionTheme: GrowthAccordionTheme;
  innerExpanded: GrowthInnerExpanded;
  setInnerExpanded: Dispatch<SetStateAction<GrowthInnerExpanded>>;
};

export function GrowthOfferingsList({
  expandedOffering,
  onToggleOffering,
  pageTheme,
  accordionTheme,
  innerExpanded,
  setInnerExpanded,
}: GrowthOfferingsListProps) {
  return (
    <>
      {GROWTH_OFFERING_ORDER.map((id) => {
        const meta = GROWTH_OFFERINGS[id];
        return (
          <GrowthOfferingCard
            key={id}
            meta={meta}
            isExpanded={expandedOffering === id}
            onToggle={() => onToggleOffering(id)}
            pageTheme={pageTheme}
            accordionTheme={accordionTheme}
            innerExpanded={innerExpanded}
            setInnerExpanded={setInnerExpanded}
          />
        );
      })}
    </>
  );
}
