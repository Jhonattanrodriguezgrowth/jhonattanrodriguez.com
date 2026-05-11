"use client";

interface ModernBgProps {
  accentColor: string;
  secondaryColor?: string;
  dark: boolean;
  className?: string;
}

/**
 * ModernBg - Clean gradient background inspired by Nicepay/Apple design
 * Uses soft gradients and floating orbs for a modern, premium feel
 */
export function ModernBg({ accentColor, secondaryColor, dark, className = "" }: ModernBgProps) {
  const secondary = secondaryColor || accentColor;

  if (dark) {
    // Dark mode: subtle radial glows with depth
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {/* Base subtle gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 100% 80% at 50% -20%, ${accentColor}10 0%, transparent 60%)`,
          }}
        />
        
        {/* Primary glow - top area */}
        <div
          className="absolute -top-[30%] left-1/2 -translate-x-1/2 w-[120%] h-[80%] rounded-full"
          style={{
            background: `radial-gradient(ellipse, ${accentColor}12 0%, transparent 60%)`,
            filter: "blur(60px)",
            transform: "translate3d(-50%, 0, 0)",
            willChange: "transform",
          }}
        />
        
        {/* Secondary glow - bottom corner */}
        <div
          className="absolute -bottom-[20%] -right-[20%] w-[60%] h-[60%] rounded-full"
          style={{
            background: `radial-gradient(circle, ${secondary}08 0%, transparent 70%)`,
            filter: "blur(80px)",
            transform: "translate3d(0, 0, 0)",
            willChange: "transform",
          }}
        />
        
        {/* Subtle grain texture */}
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
    );
  }

  // Light mode: clean, soft gradients (Nicepay style)
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Primary soft gradient wash - top */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 120% 60% at 50% -10%, ${accentColor}18 0%, transparent 50%),
            radial-gradient(ellipse 80% 50% at 100% 0%, ${accentColor}12 0%, transparent 40%),
            radial-gradient(ellipse 60% 40% at 0% 80%, ${secondary}08 0%, transparent 40%)
          `,
        }}
      />
      
      {/* Floating orb - right side */}
      <div
        className="absolute top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full"
        style={{
          background: `radial-gradient(circle, ${accentColor}15 0%, transparent 60%)`,
          filter: "blur(60px)",
          transform: "translate3d(0, 0, 0)",
        }}
      />
      
      {/* Floating orb - bottom left */}
      <div
        className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full"
        style={{
          background: `radial-gradient(circle, ${secondary}12 0%, transparent 60%)`,
          filter: "blur(80px)",
          transform: "translate3d(0, 0, 0)",
        }}
      />
      
      {/* Subtle bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[30%]"
        style={{
          background: `linear-gradient(to top, ${accentColor}05, transparent)`,
        }}
      />
      
      {/* Very subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

/**
 * FloatingOrb - Individual floating orb for custom placement
 */
interface FloatingOrbProps {
  color: string;
  size?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  blur?: number;
  opacity?: number;
}

export function FloatingOrb({
  color,
  size = "40%",
  top,
  left,
  right,
  bottom,
  blur = 60,
  opacity = 0.15,
}: FloatingOrbProps) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity,
        filter: `blur(${blur}px)`,
        transform: "translate3d(0, 0, 0)",
        willChange: "transform",
      }}
    />
  );
}
