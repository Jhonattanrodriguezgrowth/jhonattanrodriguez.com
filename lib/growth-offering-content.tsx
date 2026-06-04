import type { ComponentType } from "react";
import { GrowthControlMarcaRrssOfferingContent } from "@/components/growth/offerings/growth-control-marca-rrss-offering-content";
import { GrowthMetaAdsOfferingContent } from "@/components/growth/offerings/growth-metaads-offering-content";
import { GrowthPresenciaRrssOfferingContent } from "@/components/growth/offerings/growth-presencia-rrss-offering-content";
import type { GrowthOfferingContentProps } from "@/components/growth/growth-offering-types";
import type { GrowthOfferingId } from "@/lib/growth-data";

export const GROWTH_OFFERING_CONTENT: Record<
  GrowthOfferingId,
  ComponentType<GrowthOfferingContentProps>
> = {
  metaads: GrowthMetaAdsOfferingContent,
  "presencia-rrss": GrowthPresenciaRrssOfferingContent,
  "control-marca-rrss": GrowthControlMarcaRrssOfferingContent,
};
