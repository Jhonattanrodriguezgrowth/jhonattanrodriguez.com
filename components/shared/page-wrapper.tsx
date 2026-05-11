"use client";

import { ReactNode } from "react";
import { useTheme } from "next-themes";
import { ModernBg } from "./modern-bg";

interface PageWrapperProps {
  children: ReactNode;
  bgColor: string;
  accentColor: string;
  secondaryColor?: string;
}

export function PageWrapper({ 
  children, 
  bgColor, 
  accentColor,
  secondaryColor,
}: PageWrapperProps) {
  const { theme } = useTheme();
  const dark = theme === "dark";

  return (
    <main
      className="relative min-h-screen overflow-x-hidden"
      style={{ background: bgColor }}
    >
      <ModernBg accentColor={accentColor} secondaryColor={secondaryColor} dark={dark} />
      <div className="relative z-10 pt-28 sm:pt-32 pb-16">
        {children}
      </div>
    </main>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`px-4 sm:px-6 max-w-6xl mx-auto ${className}`}>
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  badge?: string;
  badgeColor?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export function SectionHeader({ 
  badge, 
  badgeColor = "rgba(255,255,255,0.12)", 
  title, 
  subtitle,
  dark = true 
}: SectionHeaderProps) {
  const tp = dark ? "rgba(255,255,255,0.88)" : "rgba(0,0,0,0.86)";
  const ts = dark ? "rgba(255,255,255,0.48)" : "rgba(0,0,0,0.56)";

  return (
    <div className="text-center mb-12 sm:mb-16">
      {badge && (
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase mb-4"
          style={{
            background: badgeColor,
            color: tp,
            fontFamily: "'Lato', sans-serif",
          }}
        >
          {badge}
        </span>
      )}
      <h2
        className="font-bold mb-4 text-balance"
        style={{
          fontFamily: "'Quicksand', sans-serif",
          fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
          color: tp,
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="max-w-2xl mx-auto text-pretty"
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            color: ts,
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
