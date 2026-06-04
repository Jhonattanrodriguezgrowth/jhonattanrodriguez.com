"use client";

import type { GrowthPresenciaTab } from "@/lib/growth-data";
import { growthTabButton, growthTabList } from "@/lib/growth-layout";

type GrowthPlatformTab = {
  id: GrowthPresenciaTab;
  label: string;
  panelId: string;
};

type GrowthPlatformTabsProps = {
  tabs: GrowthPlatformTab[];
  activeTab: GrowthPresenciaTab;
  onTabChange: (tab: GrowthPresenciaTab) => void;
  dark: boolean;
  accent: string;
  border: string;
  textMuted: string;
};

export function GrowthPlatformTabs({
  tabs,
  activeTab,
  onTabChange,
  dark,
  accent,
  border,
  textMuted,
}: GrowthPlatformTabsProps) {
  return (
    <div role="tablist" aria-label="Red social" className={`${growthTabList} mb-6`}>
      {tabs.map((tab) => {
        const selected = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`${tab.panelId}-tab`}
            aria-selected={selected}
            aria-controls={tab.panelId}
            onClick={() => onTabChange(tab.id)}
            className={`text-sm px-4 py-2 ${growthTabButton} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
            style={{
              fontFamily: "var(--font-lato), 'Lato', sans-serif",
              background: selected
                ? dark
                  ? `${accent}20`
                  : `${accent}12`
                : dark
                  ? "rgba(255,255,255,0.04)"
                  : "rgba(0,0,0,0.03)",
              border: `1px solid ${selected ? accent : border}`,
              color: selected ? accent : textMuted,
              ["--tw-ring-color" as string]: accent,
            }}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
