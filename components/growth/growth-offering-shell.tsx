"use client";

import type { ReactNode } from "react";
import {
  growthDetailsWrap,
  growthFlexCenter,
  growthPricePanelWrap,
} from "@/lib/growth-layout";

type GrowthOfferingShellProps = {
  offeringId: string;
  isExpanded: boolean;
  onToggle: () => void;
  tallDetails?: boolean;
  dark: boolean;
  cardBg: string;
  border: string;
  accent: string;
  titleBlock: ReactNode;
  pricePanel: ReactNode;
  children: ReactNode;
};

export function GrowthOfferingShell({
  offeringId,
  isExpanded,
  onToggle,
  tallDetails = false,
  dark,
  cardBg,
  border,
  accent,
  titleBlock,
  pricePanel,
  children,
}: GrowthOfferingShellProps) {
  const detailsId = `${offeringId}-details`;
  const triggerId = `${offeringId}-trigger`;

  return (
    <div
      className="p-6 sm:p-8 lg:p-10 rounded-3xl backdrop-blur-xl transition-all duration-300"
      style={{
        background: cardBg,
        border: `1px solid ${border}`,
        boxShadow: dark ? `0 4px 40px ${accent}08` : "0 4px 40px rgba(0,0,0,0.04)",
      }}
    >
      <div
        className={`flex flex-col items-center text-center gap-6 ${isExpanded ? "mb-8" : "mb-0"}`}
      >
        <div className="w-full max-w-3xl">
          <button
            type="button"
            id={triggerId}
            onClick={onToggle}
            className="w-full min-h-[44px] text-center rounded-xl transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--growth-offering-focus)]"
            style={{ ["--growth-offering-focus" as string]: accent }}
            aria-expanded={isExpanded}
            aria-controls={detailsId}
          >
            <div className={`${growthFlexCenter} gap-3 w-full`}>
              {titleBlock}
              <div className="flex justify-center w-full" aria-hidden>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300"
                  style={{
                    background: dark ? `${accent}10` : `${accent}08`,
                    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ color: accent }}>
                    <path
                      d="M2.5 4.5L6 8L9.5 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </button>
        </div>
        <div className={growthPricePanelWrap}>{pricePanel}</div>
      </div>

      <div
        id={detailsId}
        role="region"
        aria-labelledby={triggerId}
        className={
          tallDetails
            ? "overflow-hidden transition-all duration-500 ease-out"
            : "grid transition-[grid-template-rows] duration-300 ease-out"
        }
        style={
          tallDetails
            ? { maxHeight: isExpanded ? "4000px" : "0px", opacity: isExpanded ? 1 : 0 }
            : { gridTemplateRows: isExpanded ? "1fr" : "0fr" }
        }
      >
        <div className={tallDetails ? undefined : "min-h-0 overflow-hidden"}>
          <div className={growthDetailsWrap}>{children}</div>
        </div>
      </div>
    </div>
  );
}
