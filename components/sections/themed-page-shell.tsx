"use client";

import type { ReactNode } from "react";
import { ModernBg } from "@/components/shared/modern-bg";

export type ThemedPageShellProps = {
  pageBackground: string;
  accentColor: string;
  secondaryColor: string;
  dark: boolean;
  children: ReactNode;
};

/** Contenedor común de páginas con tema: fondo de página + `ModernBg`. */
export function ThemedPageShell({
  pageBackground,
  accentColor,
  secondaryColor,
  dark,
  children,
}: ThemedPageShellProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: pageBackground }}>
      <ModernBg accentColor={accentColor} secondaryColor={secondaryColor} dark={dark} />
      {children}
    </div>
  );
}
