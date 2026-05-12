"use client";

import { useTheme } from "@teispace/next-themes";
import { useEffect, useState } from "react";
import { ModernBg } from "@/components/shared/modern-bg";
import { Glass } from "@/components/shared/glass";
import { CTASection, CTACalendar, CTAWhatsApp } from "@/components/cta-buttons";
import {
  THEMES,
  FILM_TARGET_AUDIENCE,
  FILM_PLANS,
  FILM_PROCESS,
  FILM_WHY_WORKS,
  FILM_RESULTS,
} from "@/lib/design-tokens";

export default function FilmmakerPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen" style={{ background: THEMES.filmmaker.dark.bg }} />;
  }

  const dark = theme === "dark";
  const t = dark ? THEMES.filmmaker.dark : THEMES.filmmaker.light;
  
  // Color variables
  const tp = t.text.primary;
  const ts = t.text.secondary;
  const tm = t.text.muted;
  const ab = dark ? "rgba(253,186,116,0.20)" : "rgba(194,65,12,0.18)";
  const gb = dark ? "rgba(253,186,116,0.08)" : "rgba(194,65,12,0.08)";
  const div = t.border;
  const cardBg = t.card;

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: t.bg }}>
      <ModernBg accentColor={t.accent} secondaryColor={t.secondary} dark={dark} />

      {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 relative">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <span
            className="inline-block text-xs tracking-[0.22em] uppercase font-semibold mb-5 px-4 py-2 rounded-full"
            style={{
              fontFamily: "var(--font-lato), sans-serif",
              color: t.accent,
              background: dark ? `${t.accent}15` : `${t.accent}10`,
            }}
          >
            Produccion Audiovisual
          </span>
          <h1
            className="font-semibold leading-[1.1] mb-6 sm:mb-8"
            style={{
              fontFamily: "var(--font-quicksand), sans-serif",
              fontSize: "clamp(28px, 6vw, 52px)",
              color: t.text.primary,
              letterSpacing: "-0.02em",
            }}
          >
            Un sistema de produccion
            <br />
            <span style={{ color: t.accent }}>optimizado para tu marca.</span>
          </h1>
          <p
            className="text-base sm:text-lg max-w-xl leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-lato), sans-serif", color: t.text.secondary, lineHeight: 1.7 }}
          >
            Contenido en video de calidad profesional en tiempo record, con estrategia de
            publicacion integrada — adaptado al ritmo y presupuesto de cada marca.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <CTACalendar
              variant="primary"
              dark={dark}
              accentColor={t.accent}
              accentSolidColor={t.accentSolid}
            />
            <CTAWhatsApp variant="secondary" context="filmmaker" dark={dark} accentColor={t.accent} />
          </div>
        </div>
      </section>

      {/* ─── PROBLEMA QUE RESOLVEMOS ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 relative" style={{ borderTop: `1px solid ${t.border}` }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <Glass dark={dark} accentBorder={ab} className="p-6 sm:p-10">
            <span
              className="text-[11px] tracking-[0.25em] uppercase font-medium block mb-4"
              style={{ fontFamily: "var(--font-lato), sans-serif", color: tm }}
            >
              El problema que resolvemos
            </span>
            <p
              className="text-lg sm:text-xl leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-quicksand), sans-serif", color: tp, fontWeight: 500 }}
            >
              Las marcas necesitan presencia constante en redes sociales, pero la produccion
              tradicional es lenta, costosa y fragmentada.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: "var(--font-lato), sans-serif", color: t.text.secondary, lineHeight: 1.7 }}
            >
              Cada pieza toma dias de planificacion, rodaje y edicion. La solucion: un sistema
              optimizado que entrega contenido de calidad profesional en tiempo record.
            </p>
          </Glass>
        </div>
      </section>

      {/* ─── PARA QUIEN ES ────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 relative" style={{ borderTop: `1px solid ${t.border}` }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <span
            className="text-[11px] tracking-[0.25em] uppercase font-medium block mb-3"
            style={{ fontFamily: "var(--font-lato), sans-serif", color: tm }}
          >
            Para quien es
          </span>
          <h2
            className="font-semibold text-xl sm:text-2xl mb-10 sm:mb-12"
            style={{
              fontFamily: "var(--font-quicksand), sans-serif",
              color: tp,
              letterSpacing: "-0.01em",
            }}
          >
            Este servicio esta diseñado para
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {FILM_TARGET_AUDIENCE.map((item, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-2xl transition-all duration-300"
                style={{ background: cardBg, border: `1px solid ${div}` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-lg font-semibold"
                  style={{ background: gb, color: t.accent, border: `1px solid ${ab}` }}
                >
                  {i + 1}
                </div>
                <h3
                  className="font-semibold text-base mb-2"
                  style={{ fontFamily: "var(--font-quicksand), sans-serif", color: tp }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-lato), sans-serif", color: ts, lineHeight: 1.65 }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PLANES ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 relative" style={{ borderTop: `1px solid ${t.border}` }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span
              className="text-[11px] tracking-[0.25em] uppercase font-medium block mb-3"
              style={{ fontFamily: "var(--font-lato), sans-serif", color: tm }}
            >
              Nuestros planes
            </span>
            <h2
              className="font-semibold text-2xl sm:text-3xl"
              style={{
                fontFamily: "var(--font-quicksand), sans-serif",
                color: tp,
                letterSpacing: "-0.02em",
              }}
            >
              Elige el plan que se adapta a tu ritmo
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
            {FILM_PLANS.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(selectedPlan === plan.id ? null : plan.id)}
                className="relative rounded-3xl p-6 sm:p-8 cursor-pointer transition-all duration-500"
                style={{
                  background: plan.featured
                    ? dark
                      ? "rgba(253,186,116,0.06)"
                      : "rgba(194,65,12,0.04)"
                    : cardBg,
                  border: plan.featured ? `1.5px solid ${ab}` : `1px solid ${div}`,
                  transform: selectedPlan === plan.id ? "scale(1.02)" : "scale(1)",
                  boxShadow:
                    plan.featured && dark
                      ? `0 0 80px ${t.glow}12, 0 0 40px ${t.glow}08`
                      : "none",
                }}
              >
                {plan.featured && (
                  <div
                    className="absolute -top-3 left-6 text-[10px] sm:text-xs font-semibold px-4 py-1.5 rounded-full"
                    style={{
                      fontFamily: "var(--font-lato), sans-serif",
                      background: t.accent,
                      color: t.accentSolid,
                    }}
                  >
                    Mas Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className="font-semibold text-xl mb-2"
                    style={{ fontFamily: "var(--font-quicksand), sans-serif", color: tp }}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-lato), sans-serif", color: ts }}
                  >
                    {plan.tagline}
                  </p>
                </div>

                <div className="mb-6">
                  <div
                    className="font-bold text-2xl sm:text-3xl"
                    style={{ fontFamily: "var(--font-quicksand), sans-serif", color: t.accent }}
                  >
                    {plan.price}
                  </div>
                  {plan.priceUSD && (
                    <div
                      className="text-sm mt-1"
                      style={{ fontFamily: "var(--font-lato), sans-serif", color: ts }}
                    >
                      {plan.priceUSD}
                    </div>
                  )}
                </div>

                {plan.production && (
                  <div
                    className="text-xs font-medium px-3 py-1.5 rounded-lg inline-block mb-6"
                    style={{
                      fontFamily: "var(--font-lato), sans-serif",
                      background: gb,
                      color: t.accent,
                      border: `1px solid ${ab}`,
                    }}
                  >
                    {plan.production}
                  </div>
                )}

                {plan.includes && (
                  <ul className="space-y-2.5 mb-6">
                    {plan.includes.slice(0, 4).map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm"
                        style={{ fontFamily: "var(--font-lato), sans-serif", color: ts }}
                      >
                        <span className="mt-0.5 shrink-0" style={{ color: t.accent }}>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {plan.isCustom && plan.description && (
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ fontFamily: "var(--font-lato), sans-serif", color: ts, lineHeight: 1.65 }}
                  >
                    {plan.description}
                  </p>
                )}

                <CTACalendar
                  variant={plan.featured ? "primary" : "secondary"}
                  dark={dark}
                  accentColor={t.accent}
                  accentSolidColor={t.accentSolid}
                  className="w-full justify-center text-sm"
                />

                {/* Expanded details */}
                {selectedPlan === plan.id && !plan.isCustom && (
                  <div
                    className="mt-8 pt-6 space-y-6"
                    style={{ borderTop: `1px solid ${t.border}` }}
                  >
                    {plan.framework && (
                      <div>
                        <h4
                          className="text-xs tracking-[0.2em] uppercase font-medium mb-4"
                          style={{ fontFamily: "var(--font-lato), sans-serif", color: tm }}
                        >
                          Framework estrategico
                        </h4>
                        <div className="space-y-3">
                          {plan.framework.map((f, k) => (
                            <div
                              key={k}
                              className="flex items-center justify-between p-3 rounded-xl"
                              style={{ background: gb, border: `1px solid ${ab}` }}
                            >
                              <div className="flex items-center gap-3">
                                <span
                                  className="text-lg font-bold"
                                  style={{
                                    fontFamily: "var(--font-quicksand), sans-serif",
                                    color: t.accent,
                                  }}
                                >
                                  {f.count}
                                </span>
                                <span
                                  className="text-sm font-medium"
                                  style={{ fontFamily: "var(--font-quicksand), sans-serif", color: tp }}
                                >
                                  {f.type}
                                </span>
                              </div>
                              <span
                                className="text-xs text-right max-w-[140px]"
                                style={{ fontFamily: "var(--font-lato), sans-serif", color: ts }}
                              >
                                {f.goal}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {plan.deliverables && (
                      <div>
                        <h4
                          className="text-xs tracking-[0.2em] uppercase font-medium mb-4"
                          style={{ fontFamily: "var(--font-lato), sans-serif", color: tm }}
                        >
                          Entregables al mes
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {plan.deliverables.map((d, k) => (
                            <div
                              key={k}
                              className="p-3 rounded-xl text-center"
                              style={{ background: gb, border: `1px solid ${ab}` }}
                            >
                              <span
                                className="text-2xl font-bold block"
                                style={{
                                  fontFamily: "var(--font-quicksand), sans-serif",
                                  color: t.accent,
                                }}
                              >
                                {d.count}
                              </span>
                              <span
                                className="text-xs"
                                style={{ fontFamily: "var(--font-lato), sans-serif", color: ts }}
                              >
                                {d.type}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {plan.payment && (
                      <div>
                        <h4
                          className="text-xs tracking-[0.2em] uppercase font-medium mb-4"
                          style={{ fontFamily: "var(--font-lato), sans-serif", color: tm }}
                        >
                          Estructura de pago
                        </h4>
                        <div className="space-y-3">
                          {plan.payment.map((p, k) => (
                            <div
                              key={k}
                              className="flex items-start justify-between p-3 rounded-xl"
                              style={{ background: cardBg, border: `1px solid ${div}` }}
                            >
                              <div>
                                <span
                                  className="text-sm font-medium block"
                                  style={{
                                    fontFamily: "var(--font-quicksand), sans-serif",
                                    color: tp,
                                  }}
                                >
                                  {p.stage}
                                </span>
                                <span
                                  className="text-xs"
                                  style={{ fontFamily: "var(--font-lato), sans-serif", color: ts }}
                                >
                                  {p.desc}
                                </span>
                              </div>
                              <span
                                className="text-sm font-semibold shrink-0"
                                style={{
                                  fontFamily: "var(--font-quicksand), sans-serif",
                                  color: t.accent,
                                }}
                              >
                                {p.amount}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {plan.costPerPiece && (
                      <div
                        className="p-4 rounded-xl text-center"
                        style={{ background: gb, border: `1px solid ${ab}` }}
                      >
                        <span
                          className="text-sm"
                          style={{ fontFamily: "var(--font-lato), sans-serif", color: ts }}
                        >
                          {plan.costPerPiece}
                        </span>
                        {plan.savings && (
                          <span
                            className="block text-xs mt-1 font-medium"
                            style={{ color: t.accent }}
                          >
                            {plan.savings}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {selectedPlan === plan.id && plan.isCustom && plan.forWho && (
                  <div className="mt-8 pt-6 space-y-6" style={{ borderTop: `1px solid ${t.border}` }}>
                    <div>
                      <h4
                        className="text-xs tracking-[0.2em] uppercase font-medium mb-4"
                        style={{ fontFamily: "var(--font-lato), sans-serif", color: tm }}
                      >
                        Ideal para
                      </h4>
                      <ul className="space-y-2">
                        {plan.forWho.map((item, k) => (
                          <li
                            key={k}
                            className="flex items-start gap-3 text-sm"
                            style={{ fontFamily: "var(--font-lato), sans-serif", color: ts }}
                          >
                            <span className="mt-0.5 shrink-0" style={{ color: t.accent }}>
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                              </svg>
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {plan.deliverables && (
                      <div>
                        <h4
                          className="text-xs tracking-[0.2em] uppercase font-medium mb-4"
                          style={{ fontFamily: "var(--font-lato), sans-serif", color: tm }}
                        >
                          Entregables
                        </h4>
                        <div className="space-y-3">
                          {plan.deliverables.map((d, k) => (
                            <div
                              key={k}
                              className="p-3 rounded-xl"
                              style={{ background: gb, border: `1px solid ${ab}` }}
                            >
                              <span
                                className="text-sm font-medium block"
                                style={{
                                  fontFamily: "var(--font-quicksand), sans-serif",
                                  color: tp,
                                }}
                              >
                                {d.type}
                              </span>
                              <span
                                className="text-xs"
                                style={{ fontFamily: "var(--font-lato), sans-serif", color: ts }}
                              >
                                {d.desc}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Tap indicator */}
                <div
                  className="text-center mt-4 text-xs"
                  style={{ fontFamily: "var(--font-lato), sans-serif", color: ts, opacity: 0.7 }}
                >
                  {selectedPlan === plan.id ? "Toca para cerrar" : "Toca para ver detalles"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESO ──────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 relative" style={{ borderTop: `1px solid ${t.border}` }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="mb-10 sm:mb-14">
            <span
              className="text-[11px] tracking-[0.25em] uppercase font-medium block mb-3"
              style={{ fontFamily: "var(--font-lato), sans-serif", color: tm }}
            >
              Como trabajamos
            </span>
            <h2
              className="font-semibold text-xl sm:text-2xl"
              style={{
                fontFamily: "var(--font-quicksand), sans-serif",
                color: tp,
                letterSpacing: "-0.01em",
              }}
            >
              Proceso de produccion
            </h2>
          </div>

          <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-4 sm:gap-6">
            {FILM_PROCESS.map((phase, i) => (
              <div key={i} className="relative">
                {/* Mobile connector */}
                {i < FILM_PROCESS.length - 1 && (
                  <div
                    className="absolute left-5 top-12 bottom-0 w-px sm:hidden"
                    style={{ background: div }}
                  />
                )}
                {/* Desktop connector */}
                {i < FILM_PROCESS.length - 1 && (
                  <div
                    className="hidden sm:block absolute top-5 right-0 h-px w-6 translate-x-3"
                    style={{ background: div }}
                  />
                )}

                <div className="relative z-10">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 font-bold text-sm"
                    style={{
                      fontFamily: "var(--font-quicksand), sans-serif",
                      background: i === 0 ? t.accent : gb,
                      color: i === 0 ? t.accentSolid : t.accent,
                      border: `1px solid ${ab}`,
                    }}
                  >
                    {phase.step}
                  </div>
                  <h3
                    className="font-semibold text-base mb-3"
                    style={{ fontFamily: "var(--font-quicksand), sans-serif", color: tp }}
                  >
                    {phase.title}
                  </h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li
                        key={j}
                        className="text-sm leading-relaxed pl-4 relative"
                        style={{ fontFamily: "var(--font-lato), sans-serif", color: ts }}
                      >
                        <span
                          className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full"
                          style={{ background: ab }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── POR QUE FUNCIONA ─────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 relative" style={{ borderTop: `1px solid ${t.border}` }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span
              className="text-[11px] tracking-[0.25em] uppercase font-medium block mb-3"
              style={{ fontFamily: "var(--font-lato), sans-serif", color: tm }}
            >
              Metodologia
            </span>
            <h2
              className="font-semibold text-xl sm:text-2xl"
              style={{
                fontFamily: "var(--font-quicksand), sans-serif",
                color: tp,
                letterSpacing: "-0.01em",
              }}
            >
              Por que funciona esta metodologia
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {FILM_WHY_WORKS.map((item, i) => (
              <Glass
                key={i}
                dark={dark}
                accentBorder={dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}
                className="p-5 sm:p-6"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-4 text-sm font-bold"
                  style={{ background: gb, color: t.accent, border: `1px solid ${ab}` }}
                >
                  {i + 1}
                </div>
                <h3
                  className="font-semibold text-base mb-2"
                  style={{ fontFamily: "var(--font-quicksand), sans-serif", color: tp }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-lato), sans-serif", color: ts, lineHeight: 1.65 }}
                >
                  {item.desc}
                </p>
              </Glass>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RESULTADOS ───────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 relative" style={{ borderTop: `1px solid ${t.border}` }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-10">
            <span
              className="text-[11px] tracking-[0.25em] uppercase font-medium block mb-3"
              style={{ fontFamily: "var(--font-lato), sans-serif", color: tm }}
            >
              Resultados
            </span>
            <h2
              className="font-semibold text-xl sm:text-2xl"
              style={{
                fontFamily: "var(--font-quicksand), sans-serif",
                color: tp,
                letterSpacing: "-0.01em",
              }}
            >
              Lo que puedes esperar
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {FILM_RESULTS.map((item, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl"
                style={{ background: cardBg, border: `1px solid ${div}` }}
              >
                <div
                  className="text-2xl sm:text-3xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-quicksand), sans-serif", color: t.accent }}
                >
                  {item.metric}
                </div>
                <p
                  className="text-sm"
                  style={{ fontFamily: "var(--font-lato), sans-serif", color: ts }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 relative" style={{ borderTop: `1px solid ${t.border}` }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <CTASection
            dark={dark}
            accentColor={t.accent}
            accentSolidColor={t.accentSolid}
            context="filmmaker"
            title="¿Listo para producir?"
            description="Agenda una llamada estrategica (30 min) para evaluar tu marca y objetivos. Confirmamos fechas y arrancamos la pre-produccion."
          />
        </div>
      </section>
    </div>
  );
}
