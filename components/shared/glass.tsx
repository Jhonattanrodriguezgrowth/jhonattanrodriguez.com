"use client";

import { ReactNode, CSSProperties } from "react";

interface GlassProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  accentBorder?: string;
  style?: CSSProperties;
  interactive?: boolean;
  onClick?: () => void;
  tabIndex?: number;
  role?: string;
  "aria-expanded"?: boolean;
  "aria-label"?: string;
}

export function Glass({
  children,
  className = "",
  dark = true,
  accentBorder,
  style = {},
  interactive = false,
  onClick,
  tabIndex,
  role,
  "aria-expanded": ariaExpanded,
  "aria-label": ariaLabel,
}: GlassProps) {
  // Modern card styles inspired by Nicepay
  const baseStyles: CSSProperties = dark
    ? {
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${accentBorder || "rgba(255,255,255,0.08)"}`,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.05) inset",
        ...style,
      }
    : {
        background: "rgba(255,255,255,0.75)",
        border: "1px solid rgba(255,255,255,0.9)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: `
          0 1px 2px rgba(0,0,0,0.03),
          0 4px 12px rgba(0,0,0,0.04),
          0 16px 32px rgba(0,0,0,0.04),
          inset 0 1px 0 rgba(255,255,255,1)
        `,
        ...style,
      };

  const interactiveClass = interactive
    ? "cursor-pointer transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 active:translate-y-0 active:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    : "";

  return (
    <div
      className={`relative rounded-2xl overflow-hidden ${interactiveClass} ${className}`}
      style={baseStyles}
      onClick={onClick}
      tabIndex={interactive ? (tabIndex ?? 0) : tabIndex}
      role={role}
      aria-expanded={ariaExpanded}
      aria-label={ariaLabel}
      onKeyDown={
        interactive && onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}

// New: Bento-style card for feature highlights
interface BentoCardProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  accent?: string;
  span?: "1" | "2";
}

export function BentoCard({
  children,
  className = "",
  dark = true,
  accent,
  span = "1",
}: BentoCardProps) {
  const spanClass = span === "2" ? "md:col-span-2" : "";

  return (
    <div
      className={`
        relative rounded-3xl overflow-hidden p-6 sm:p-8
        transition-all duration-300 ease-out
        hover:shadow-xl hover:-translate-y-1
        ${spanClass} ${className}
      `}
      style={{
        background: dark
          ? "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)"
          : "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
        border: dark
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid rgba(255,255,255,0.95)",
        boxShadow: dark
          ? "inset 0 1px 0 rgba(255,255,255,0.04)"
          : "0 4px 24px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,1)",
      }}
    >
      {/* Accent glow on hover */}
      {accent && (
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${accent}15 0%, transparent 50%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
