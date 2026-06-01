"use client";

import type { NavItemConfig } from "@/lib/nav-items";
import type { NavPillSurface } from "@/lib/route-theme";
import { NavPillItem } from "@/components/nav/nav-pill-item";

type MobileTabBarProps = {
  items: NavItemConfig[];
  surface: NavPillSurface;
  isActive: (href: string) => boolean;
};

export function MobileTabBar({ items, surface, isActive }: MobileTabBarProps) {
  return (
    <nav
      className="mobile-tab-bar md:hidden fixed bottom-0 left-0 right-0 z-50 transition-[background,border-color] duration-300 ease-out"
      style={{
        background: surface.pillBg,
        borderTop: `1px solid ${surface.pillBorder}`,
        boxShadow: "0 -2px 16px rgba(0,0,0,0.08)",
        minHeight: "var(--mobile-tab-bar-height)",
      }}
      aria-label="Navegación principal"
    >
      <div className="flex items-stretch justify-around max-w-lg mx-auto w-full px-1">
        {items.map((item) => (
          <NavPillItem
            key={item.href}
            item={item}
            active={isActive(item.href)}
            surface={surface}
            layout="tab"
          />
        ))}
      </div>
    </nav>
  );
}
