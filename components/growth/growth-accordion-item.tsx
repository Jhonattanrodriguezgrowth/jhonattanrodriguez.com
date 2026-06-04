"use client";

import type { ReactNode } from "react";
import {
  growthAccordionDuration,
  growthAccordionTitle,
  growthAccordionTrigger,
  growthContentAlign,
} from "@/lib/growth-layout";

export type GrowthAccordionTheme = {
  accent: string;
  border: string;
  dark: boolean;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
};

type GrowthAccordionItemProps = {
  itemId: string;
  title: string;
  subtitle?: string;
  badge?: string | number;
  isOpen: boolean;
  onToggle: () => void;
  theme: GrowthAccordionTheme;
  leadingIcon?: ReactNode;
  tallPanel?: boolean;
  children: ReactNode;
};

export function GrowthAccordionItem({
  itemId,
  title,
  subtitle,
  badge,
  isOpen,
  onToggle,
  theme,
  leadingIcon,
  tallPanel = false,
  children,
}: GrowthAccordionItemProps) {
  const { accent, border, dark, textPrimary, textMuted } = theme;
  const titleId = `${itemId}-title`;
  const panelId = `${itemId}-panel`;

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
        border: `1px solid ${isOpen ? border : "transparent"}`,
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        className={growthAccordionTrigger}
        style={{
          background: isOpen ? (dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.01)") : "transparent",
          ["--growth-focus" as string]: accent,
        }}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        {badge !== undefined ? (
          <div
            className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-bold text-base sm:text-lg transition-all duration-300"
            style={{
              fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif",
              background: dark ? `${accent}15` : `${accent}10`,
              color: accent,
              transform: isOpen ? "scale(1.05)" : "scale(1)",
            }}
          >
            {badge}
          </div>
        ) : leadingIcon ? (
          <div
            className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
            style={{
              background: dark ? `${accent}15` : `${accent}10`,
            }}
          >
            {leadingIcon}
          </div>
        ) : null}

        <span
          id={titleId}
          className={growthAccordionTitle}
          style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: textPrimary }}
        >
          {title}
        </span>

        {subtitle ? (
          <span
            className={growthAccordionDuration}
            style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: textMuted }}
          >
            {subtitle}
          </span>
        ) : null}

        <div className="flex justify-center w-full" aria-hidden>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300"
            style={{
              background: dark ? `${accent}10` : `${accent}08`,
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
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
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={titleId}
        className={tallPanel ? "overflow-hidden transition-all duration-500 ease-out" : "grid transition-[grid-template-rows] duration-300 ease-out"}
        style={
          tallPanel
            ? { maxHeight: isOpen ? "2400px" : "0px", opacity: isOpen ? 1 : 0 }
            : { gridTemplateRows: isOpen ? "1fr" : "0fr" }
        }
      >
        <div className={tallPanel ? undefined : "min-h-0 overflow-hidden"}>
          <div className={`px-4 sm:px-5 pb-5 pt-0 ${growthContentAlign}`}>{children}</div>
        </div>
      </div>
    </div>
  );
}
