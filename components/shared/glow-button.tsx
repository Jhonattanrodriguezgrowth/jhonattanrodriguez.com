"use client";

import Link from "next/link";
import { useTheme } from "@teispace/next-themes";
import { ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  accentColor?: string; // Primary glow color
  secondaryColor?: string; // Secondary glow color for gradient
  className?: string;
  external?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export function GlowButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  accentColor,
  secondaryColor,
  className = "",
  external = false,
  icon,
  iconPosition = "right",
}: GlowButtonProps) {
  const { resolvedTheme } = useTheme();
  const dark = resolvedTheme === "dark";

  // Default colors if not provided
  const primary = accentColor || (dark ? "#a78bfa" : "#7c3aed");
  const secondary = secondaryColor || (dark ? "#3b82f6" : "#2563eb");

  // Size classes
  const sizeClasses = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  // Variant styles
  const getVariantStyles = () => {
    if (variant === "primary") {
      return {
        background: dark
          ? `linear-gradient(135deg, ${primary}20 0%, ${secondary}15 100%)`
          : `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`,
        color: dark ? "#fff" : "#fff",
        border: "none",
        boxShadow: dark
          ? `0 0 20px ${primary}30, 0 0 40px ${secondary}20, inset 0 1px 0 rgba(255,255,255,0.1)`
          : `0 4px 20px ${primary}40, 0 2px 8px ${primary}30`,
      };
    }
    if (variant === "secondary") {
      return {
        background: dark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.8)",
        color: dark ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.8)",
        border: "none",
        boxShadow: dark
          ? `0 0 0 1px rgba(255,255,255,0.1), 0 0 15px ${primary}15, 0 0 30px ${secondary}10`
          : `0 0 0 1px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.06)`,
      };
    }
    // ghost
    return {
      background: "transparent",
      color: dark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)",
      border: "none",
      boxShadow: "none",
    };
  };

  const variantStyles = getVariantStyles();

  // Glow border gradient (only in dark mode for primary/secondary)
  const glowBorder = dark && variant !== "ghost" ? (
    <span
      className="absolute inset-0 rounded-2xl opacity-60 blur-[1px] pointer-events-none"
      style={{
        background: `linear-gradient(135deg, ${primary}, ${secondary})`,
        padding: "1px",
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
      }}
    />
  ) : null;

  // Animated glow effect (subtle pulse)
  const glowPulse = dark && variant === "primary" ? (
    <span
      className="absolute inset-0 rounded-2xl pointer-events-none animate-pulse"
      style={{
        background: `radial-gradient(ellipse at 30% 50%, ${primary}25 0%, transparent 50%), 
                     radial-gradient(ellipse at 70% 50%, ${secondary}20 0%, transparent 50%)`,
        filter: "blur(8px)",
        opacity: 0.6,
      }}
    />
  ) : null;

  const content = (
    <>
      {glowPulse}
      {glowBorder}
      <span className="relative z-10 flex items-center justify-center font-medium" style={{ gap: "inherit" }}>
        {icon && iconPosition === "left" && icon}
        {children}
        {icon && iconPosition === "right" && icon}
      </span>
    </>
  );

  const baseClasses = `
    relative inline-flex items-center justify-center 
    rounded-2xl font-medium transition-all duration-300
    hover:scale-[1.02] active:scale-[0.98]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    ${sizeClasses[size]}
    ${className}
  `.trim().replace(/\s+/g, " ");

  const baseStyles = {
    fontFamily: "var(--font-lato), 'Lato', sans-serif",
    ...variantStyles,
  };

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          style={baseStyles}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses} style={baseStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses} style={baseStyles}>
      {content}
    </button>
  );
}

// Icon components for common use cases
export const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

export const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
