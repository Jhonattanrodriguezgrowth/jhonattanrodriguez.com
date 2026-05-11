"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { GlowButton, ArrowRightIcon } from "@/components/shared/glow-button";
import { CTASection } from "@/components/cta-buttons";
import { THEMES } from "@/lib/design-tokens";

export default function HomePage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen" style={{ background: THEMES.index.dark.bg }} />;
  }

  const dark = theme === "dark";
  const t = dark ? THEMES.index.dark : THEMES.index.light;

  const services = [
    {
      label: "Growth Hacker",
      color: dark ? "#86efac" : "#16a34a",
      gradient: dark ? "from-green-500/20 to-emerald-500/5" : "from-green-100 to-emerald-50",
      border: dark ? "border-green-500/20" : "border-green-200",
      desc: "Sistemas, IA y metodologias agiles para founders que quieren operar sin depender de nadie.",
      href: "/growth",
    },
    {
      label: "Filmmaker",
      color: dark ? "#fdba74" : "#ea580c",
      gradient: dark ? "from-orange-500/20 to-amber-500/5" : "from-orange-100 to-amber-50",
      border: dark ? "border-orange-500/20" : "border-orange-200",
      desc: "Produccion de contenido en video con estrategia integrada para marcas que necesitan presencia real.",
      href: "/filmmaker",
    },
    {
      label: "IA Builder",
      color: dark ? "#93c5fd" : "#2563eb",
      gradient: dark ? "from-blue-500/20 to-cyan-500/5" : "from-blue-100 to-cyan-50",
      border: dark ? "border-blue-500/20" : "border-blue-200",
      desc: "Automatizaciones, agentes y apps construidas con las herramientas que estan redefiniendo como se trabaja.",
      href: "/ia-builder",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: t.bg }}>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16">
        {/* Background images based on theme */}
        {dark ? (
          <>
            <div 
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: "url('/images/hero-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center 30%",
                backgroundRepeat: "no-repeat",
              }}
            />
            {/* Gradient overlays for text readability - dark mode */}
            <div 
              className="absolute inset-0 z-0"
              style={{
                background: "linear-gradient(to bottom, rgba(7,8,15,0.4) 0%, rgba(7,8,15,0.7) 50%, rgba(7,8,15,0.95) 100%)",
              }}
            />
            <div 
              className="absolute inset-0 z-0"
              style={{
                background: "radial-gradient(ellipse at center top, transparent 30%, rgba(7,8,15,0.8) 70%)",
              }}
            />
          </>
        ) : (
          <>
            <div 
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: "url('/images/hero-bg-light.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            />
            {/* Gradient overlays for text readability - light mode */}
            <div 
              className="absolute inset-0 z-0"
              style={{
                background: "linear-gradient(to bottom, rgba(250,251,252,0.3) 0%, rgba(250,251,252,0.6) 50%, rgba(250,251,252,0.95) 100%)",
              }}
            />
            <div 
              className="absolute inset-0 z-0"
              style={{
                background: "radial-gradient(ellipse at center, transparent 20%, rgba(250,251,252,0.7) 70%)",
              }}
            />
          </>
        )}
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          {/* Location badge */}
          <div
            className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase mb-8 px-4 py-2.5 rounded-full backdrop-blur-sm transition-all duration-300"
            style={{
              fontFamily: "var(--font-lato), 'Lato', sans-serif",
              color: t.text.muted,
              border: `1px solid ${t.border}`,
              background: t.card,
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: dark ? "#4ade80" : "#16a34a" }}
            />
            Bogota, Colombia
          </div>

          {/* Name */}
          <h1
            className="mb-6 leading-none"
            style={{
              fontFamily: "var(--font-engagement), 'Engagement', cursive",
              fontSize: "clamp(52px,10vw,96px)",
              color: t.text.primary,
            }}
          >
            Jhonattan Rodriguez
          </h1>

          {/* Roles */}
          <div className="flex items-center justify-center gap-2 md:gap-5 mb-8 flex-wrap">
            {services.map((item, i) => (
              <span key={i} className="flex items-center gap-2 md:gap-3">
                {i > 0 && (
                  <span style={{ color: t.text.muted, fontSize: 20 }}>·</span>
                )}
                <Link
                  href={item.href}
                  className="font-semibold text-base md:text-lg transition-all duration-200 hover:opacity-70"
                  style={{
                    fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif",
                    color: item.color,
                  }}
                >
                  {item.label}
                </Link>
              </span>
            ))}
          </div>

          {/* Description */}
          <p
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12"
            style={{
              fontFamily: "var(--font-lato), 'Lato', sans-serif",
              color: t.text.secondary,
            }}
          >
            Construyo sistemas que hacen crecer negocios. No desde la teoria — desde la
            experiencia de haberlo hecho, fallar, ajustar y volver a ejecutar.
          </p>

          {/* CTA buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <GlowButton
              href="/growth"
              variant="primary"
              accentColor={t.accent}
              secondaryColor={t.secondary}
              icon={<ArrowRightIcon />}
            >
              Ver mi trabajo
            </GlowButton>
            <GlowButton
              href="/mi-historia"
              variant="secondary"
              accentColor={t.accent}
              secondaryColor={t.secondary}
            >
              Mi historia
            </GlowButton>
          </div>
        </div>
      </section>

      {/* Scroll indicator */}
      <div className="flex justify-center pb-12 relative">
        <div
          className="w-px h-16"
          style={{
            background: dark
              ? "linear-gradient(to bottom,rgba(255,255,255,0.18),transparent)"
              : `linear-gradient(to bottom,${t.accent}40,transparent)`,
          }}
        />
      </div>

      {/* Services cards */}
      <section style={{ borderTop: `1px solid ${t.border}` }}>
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="mb-16 text-center">
            <span
              className="inline-block text-xs tracking-[0.22em] uppercase font-medium mb-4 px-4 py-2 rounded-full"
              style={{
                fontFamily: "var(--font-lato), 'Lato', sans-serif",
                color: t.accent,
                background: dark ? `${t.accent}15` : `${t.accent}10`,
              }}
            >
              Lo que hago
            </span>
            <h2
              className="font-bold"
              style={{
                fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif",
                fontSize: "clamp(28px,5vw,40px)",
                color: t.text.primary,
              }}
            >
              Tres disciplinas, un sistema
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((card, i) => (
              <Link
                key={i}
                href={card.href}
                className={`group relative text-left p-8 rounded-3xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 overflow-hidden border ${card.border}`}
                style={{
                  background: t.card,
                  backdropFilter: "blur(20px)",
                  boxShadow: dark
                    ? `0 4px 40px ${card.color}08`
                    : "0 4px 40px rgba(0,0,0,0.04)",
                }}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon placeholder */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: dark ? `${card.color}15` : `${card.color}12`,
                      border: `1px solid ${card.color}30`,
                    }}
                  >
                    <div
                      className="w-5 h-5 rounded-lg"
                      style={{ background: card.color }}
                    />
                  </div>

                  <div
                    className="font-bold text-xl mb-3"
                    style={{
                      fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif",
                      color: card.color,
                    }}
                  >
                    {card.label}
                  </div>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{
                      fontFamily: "var(--font-lato), 'Lato', sans-serif",
                      color: t.text.secondary,
                    }}
                  >
                    {card.desc}
                  </p>
                  <div
                    className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                    style={{ color: card.color }}
                  >
                    Explorar <ArrowRightIcon />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ borderTop: `1px solid ${t.border}` }}>
        <div className="max-w-4xl mx-auto px-6">
          <CTASection
            dark={dark}
            accentColor={t.accent}
            accentSolidColor={t.accentSolid}
            title="Listo para empezar?"
            description="Agenda una llamada para conocer tu proyecto o escribeme directamente por WhatsApp."
          />
        </div>
      </section>
    </div>
  );
}
