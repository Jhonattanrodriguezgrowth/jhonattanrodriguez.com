import type { GrowthAccordionTheme } from "@/components/growth/growth-accordion-item";
import type { GrowthInnerExpanded, GrowthOfferingId } from "@/lib/growth-data";

export type GrowthPageTheme = {
  dark: boolean;
  accent: string;
  accentSolid: string;
  border: string;
  card: string;
  display: string;
  text: {
    primary: string;
    secondary: string;
    muted: string;
  };
};

export type GrowthOfferingContentProps = {
  offeringId: GrowthOfferingId;
  pageTheme: GrowthPageTheme;
  accordionTheme: GrowthAccordionTheme;
  innerExpanded: GrowthInnerExpanded;
  onInnerToggle: (index: number) => void;
  isOfferingExpanded?: boolean;
};
