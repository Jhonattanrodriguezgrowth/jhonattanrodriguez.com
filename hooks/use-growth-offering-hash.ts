"use client";

import { useEffect, type Dispatch, type SetStateAction } from "react";
import { parseGrowthOfferingHash, type GrowthOfferingId } from "@/lib/growth-data";

export function useGrowthOfferingHash(
  setExpandedOffering: Dispatch<SetStateAction<GrowthOfferingId | null>>
) {
  useEffect(() => {
    const syncFromHash = () => {
      const id = parseGrowthOfferingHash();
      if (id) {
        setExpandedOffering(id);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [setExpandedOffering]);
}
