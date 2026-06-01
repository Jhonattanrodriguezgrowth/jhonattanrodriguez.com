"use client";

import { useTheme } from "@teispace/next-themes";
import { useEffect, useState, type CSSProperties } from "react";
import { ThemedPageShell } from "@/components/sections/themed-page-shell";
import { CheckIcon } from "@/components/shared/icons";
import { CTASection, CTACalendar, CTAWhatsApp } from "@/components/cta-buttons";
import { GlowButton } from "@/components/shared/glow-button";
import { RouteHeroStack } from "@/components/sections/route-hero-stack";
import { GROWTH_STACK, THEMES } from "@/lib/design-tokens";
import {
  ROUTE_HERO_CONTENT,
  ROUTE_HERO_INNER,
  ROUTE_HERO_SECTION,
} from "@/lib/route-hero-layout";

export default function GrowthPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [expandedSession, setExpandedSession] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen" style={{ background: THEMES.growth.dark.bg }} />;
  }

  const dark = theme === "dark";
  const t = dark ? THEMES.growth.dark : THEMES.growth.light;
  const display = "display" in t ? (t as { display: string }).display : t.accent;
  /** RGB de t.bg: dark #060d04 → 6,13,4 | light #fafdfb → 250,253,251 */
  const heroBgRgb = dark ? "6, 13, 4" : "250, 253, 251";

  const metaAdsSessions = [
    {
      num: 1,
      title: "Domina el territorio",
      duration: "60 min",
      desc: "Recorrido completo por el administrador de anuncios: dónde está todo, qué significa cada cosa y cómo funciona. Exploramos juntos la biblioteca de anuncios de tu competencia y salimos con una guía clara de lo que es posible hacer con la herramienta.",
      reto: "Construir una lista de 10 ideas de contenido ganadoras basadas en lo que ya está funcionando en tu industria.",
    },
    {
      num: 2,
      title: "Contenido con objetivo",
      duration: "60 min",
      desc: "Aprendemos las categorías de contenido que existen en Meta y cómo conectar cada una con los objetivos reales del administrador de anuncios. Ejercicio 100% práctico trabajando directamente con las 10 ideas del reto.",
      reto: "Tener listo el contenido de la primera campaña para subir en vivo.",
    },
    {
      num: 3,
      title: "Primera campaña en vivo",
      duration: "90 min",
      desc: "Subimos la campaña juntos, en tiempo real. Configuramos cada parámetro, revisamos la segmentación, validamos el presupuesto y la dejamos activa. Sales con tu primera campaña corriendo y sabiendo exactamente qué mirar en los próximos días.",
      reto: null,
    },
  ];

  const brandPillars = [
    {
      num: 1,
      title: "Personalidad de la marca",
      items: ["Arquetipo", "Misión", "Visión", "Valores", "PTM", "Colores", "Tipografía"],
    },
    {
      num: 2,
      title: "Identidad verbal",
      items: ["Naming", "Tagline", "Voz", "Tono", "Relato", "Canales", "Tipos de contenido"],
    },
    {
      num: 3,
      title: "Comunidad",
      items: ["Identidad", "La causa", "El gran sueño", "PUV", "Manifiesto", "Gamificación", "Referentes"],
    },
  ];

  const microsistemaIncludes = [
    {
      title: "Parrilla de contenido",
      desc: "Calendario editorial con objetivos, responsables y estados de publicación por canal.",
    },
    {
      title: "North Star Metrics",
      desc: "Indicadores clave por canal conectados al objetivo real del negocio.",
    },
    {
      title: "Arquitectura del guion",
      desc: "Framework Hook - Inicio - Nudo - Desenlace - CTA para producir contenido con intención.",
    },
    {
      title: "Seguimiento de canales",
      desc: "Dashboard por red social con seguidores, objetivos y fecha de actualización en tiempo real.",
    },
  ];

  const channels = ["Instagram", "LinkedIn", "TikTok", "YouTube"];

  return (
    <ThemedPageShell pageBackground={t.bg} accentColor={t.accent} secondaryColor={t.secondary} dark={dark}>
      {/* Hero Section */}
      <section
        data-route-hero
        className={ROUTE_HERO_SECTION}
        style={{ "--hero-fade-color": t.bg, backgroundColor: t.bg } as CSSProperties}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/growth/growth-hero-bg.gif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: dark ? 0.55 : 0.28,
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: dark
              ? `linear-gradient(135deg, rgba(${heroBgRgb},0.82) 0%, rgba(${heroBgRgb},0.68) 45%, rgba(${heroBgRgb},0.76) 100%)`
              : `linear-gradient(135deg, rgba(${heroBgRgb},0.88) 0%, rgba(${heroBgRgb},0.80) 55%, rgba(${heroBgRgb},0.86) 100%)`,
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: dark
              ? `linear-gradient(to bottom, rgba(${heroBgRgb},0.05) 0%, rgba(${heroBgRgb},0.42) 48%, rgba(${heroBgRgb},0.82) 70%, ${t.bg} 100%)`
              : `linear-gradient(to bottom, rgba(${heroBgRgb},0.04) 0%, rgba(${heroBgRgb},0.22) 48%, rgba(${heroBgRgb},0.76) 72%, ${t.bg} 100%)`,
          }}
          aria-hidden
        />
        <div className={ROUTE_HERO_CONTENT}>
          <div className={ROUTE_HERO_INNER}>
          <div className="mb-4 flex justify-center">
            <GlowButton
              href="https://www.linkedin.com/in/jhonattansgrowth/"
              external
              variant="secondary"
              size="md"
              accentColor={t.accentSolid}
              secondaryColor={t.accent}
            >
              <span className="inline-flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-11h4" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                jhonattansgrowth
              </span>
            </GlowButton>
          </div>
          <p
            className="film-display-kicker font-semibold mb-4 text-center"
            style={{ fontFamily: "var(--font-lato), sans-serif", color: display }}
          >
            Growth Hacker
          </p>
          <h1
            className="font-bold leading-[1.1] mb-4 text-center"
            style={{
              fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif",
              fontSize: "clamp(28px,4.5vw,52px)",
              color: t.text.primary,
            }}
          >
            <span className="md:hidden">
              <span className="block">El founder que domina</span>
              <span className="block">sus propias herramientas</span>
              <span className="block" style={{ color: t.accent }}>
                no necesita permiso
              </span>
              <span className="block" style={{ color: t.accent }}>
                de nadie para crecer.
              </span>
            </span>
            <span className="hidden md:block">
              <span className="block">El founder que domina</span>
              <span className="block">
                sus propias herramientas{" "}
                <span style={{ color: t.accent }}>no necesita</span>
              </span>
              <span className="block" style={{ color: t.accent }}>
                permiso de nadie para crecer.
              </span>
            </span>
          </h1>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-6 text-pretty"
            style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}
          >
            Es imposible delegar bien lo que no entiendes. Te entreno en pensamiento sistémico,
            posicionamiento de marca y metodologías ágiles para que lideres tu operación con estrategia
            y la cedas cuando quieras, no porque no te quede otra.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTACalendar
              variant="primary"
              dark={dark}
              accentColor={t.accent}
              accentSolidColor={t.accentSolid}
              label="Quiero aprender MetaAds"
            />
            <CTAWhatsApp
              variant="secondary"
              context="growth"
              dark={dark}
              accentColor={t.accent}
              label="Hablemos de tu operación"
            />
          </div>
          <RouteHeroStack
            stackLabel="> stack --growth"
            items={GROWTH_STACK}
            dark={dark}
            theme={{
              card: t.card,
              border: t.border,
              accent: t.accent,
              textSecondary: t.text.secondary,
            }}
          />
          </div>
        </div>

        <div className="hero-bottom-fade hero-bottom-fade--growth" aria-hidden />
      </section>

      {/* Entrenamiento MetaAds */}
      <section className="py-16 relative" id="metaads">
        <div className="max-w-5xl mx-auto px-6">
          <div
            className="p-6 sm:p-8 lg:p-10 rounded-3xl backdrop-blur-xl transition-all duration-300"
            style={{
              background: t.card,
              border: `1px solid ${t.border}`,
              boxShadow: dark ? `0 4px 40px ${t.accent}08` : "0 4px 40px rgba(0,0,0,0.04)",
            }}
          >
            {/* Header */}
            <div className="flex flex-col-reverse gap-6 mb-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1 text-center lg:text-left">
                <div
                  className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4"
                  style={{
                    fontFamily: "var(--font-lato), 'Lato', sans-serif",
                    background: dark ? `${t.accent}15` : `${t.accent}10`,
                    color: t.accent,
                  }}
                >
                  Empieza aquí
                </div>
                <h2
                  className="font-bold mb-4"
                  style={{
                    fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif",
                    color: t.text.primary,
                    fontSize: "clamp(24px, 3.5vw, 36px)",
                  }}
                >
                  Entrenamiento MetaAds
                </h2>
                <p
                  className="text-sm sm:text-base leading-relaxed max-w-xl text-pretty"
                  style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}
                >
                  La mayoría de founders le tienen miedo a Meta Ads porque nunca nadie se los explicó bien. En 3 sesiones pasas de no saber dónde hacer clic a tener tu primera campaña activa — con una estrategia de contenido basada en lo que ya está funcionando en tu industria.
                </p>
              </div>
              <div
                className="shrink-0 flex flex-col items-center text-center lg:items-end gap-1 lg:text-right p-5 rounded-2xl w-full max-w-sm mx-auto lg:mx-0 lg:max-w-none lg:w-auto"
                style={{
                  background: dark ? `${t.accent}08` : `${t.accent}06`,
                  border: `1px solid ${t.border}`,
                }}
              >
                <div
                  className="font-bold"
                  style={{
                    fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif",
                    color: t.accent,
                    fontSize: "clamp(28px, 4vw, 40px)",
                  }}
                >
                  $100 USD
                </div>
                <div className="text-sm" style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}>
                  $400.000 COP
                </div>
                <div className="text-xs mt-2" style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.muted }}>
                  3 sesiones / 3.5h en total
                </div>
                <div
                  className="text-xs mt-1 px-2 py-1 rounded-lg"
                  style={{
                    fontFamily: "var(--font-lato), 'Lato', sans-serif",
                    color: t.accent,
                    background: dark ? `${t.accent}12` : `${t.accent}08`,
                  }}
                >
                  Refuerzo mensual: $50 USD
                </div>
              </div>
            </div>

            {/* Sessions */}
            <div className="space-y-3">
              {metaAdsSessions.map((session, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    background: dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
                    border: `1px solid ${expandedSession === i ? t.border : "transparent"}`,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setExpandedSession(expandedSession === i ? null : i)}
                    className="w-full min-h-[44px] flex flex-col gap-2 p-4 sm:p-5 text-center md:flex-row md:items-center md:justify-between md:text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--growth-focus)]"
                    style={{
                      background: expandedSession === i ? (dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.01)") : "transparent",
                      ["--growth-focus" as string]: t.accent,
                    }}
                    aria-expanded={expandedSession === i}
                    aria-controls={`growth-session-${i}-panel`}
                  >
                    <div className="flex items-center justify-center gap-4 md:justify-start w-full md:w-auto">
                      <div
                        className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-bold text-base sm:text-lg transition-all duration-300"
                        style={{
                          fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif",
                          background: dark ? `${t.accent}15` : `${t.accent}10`,
                          color: t.accent,
                          transform: expandedSession === i ? "scale(1.05)" : "scale(1)",
                        }}
                      >
                        {session.num}
                      </div>
                      <div className="text-center md:text-left">
                        <span
                          id={`growth-session-${i}-title`}
                          className="font-semibold text-sm sm:text-base block"
                          style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: t.text.primary }}
                        >
                          {session.title}
                        </span>
                        <span
                          className="text-xs"
                          style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.muted }}
                        >
                          {session.duration}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center md:justify-end shrink-0 w-full md:w-auto">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300"
                        style={{
                          background: dark ? `${t.accent}10` : `${t.accent}08`,
                          transform: expandedSession === i ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                        aria-hidden
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ color: t.accent }}>
                          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </button>

                  <div
                    id={`growth-session-${i}-panel`}
                    role="region"
                    aria-labelledby={`growth-session-${i}-title`}
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: expandedSession === i ? "1fr" : "0fr" }}
                  >
                    <div className="min-h-0 overflow-hidden">
                    <div className="px-4 sm:px-5 pb-5 pt-0">
                      <p
                        className="text-sm sm:text-base leading-relaxed mb-4 text-pretty text-center md:text-left"
                        style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}
                      >
                        {session.desc}
                      </p>
                      {session.reto && (
                        <div
                          className="p-3 rounded-xl"
                          style={{
                            background: dark ? `${t.accent}08` : `${t.accent}06`,
                            border: `1px solid ${t.border}`,
                          }}
                        >
                          <span
                            className="text-xs font-semibold uppercase tracking-wider block mb-1"
                            style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.accent }}
                          >
                            Reto
                          </span>
                          <p
                            className="text-sm sm:text-base text-center md:text-left"
                            style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.primary }}
                          >
                            {session.reto}
                          </p>
                        </div>
                      )}
                    </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Result */}
            <div
              className="mt-6 p-4 sm:p-5 rounded-2xl"
              style={{
                background: dark ? `${t.accent}08` : `${t.accent}06`,
                border: `1px solid ${t.border}`,
              }}
            >
              <h4
                className="font-semibold text-sm mb-2"
                style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: t.accent }}
              >
                Resultado
              </h4>
              <p
                className="text-sm sm:text-base leading-relaxed text-pretty text-center md:text-left"
                style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.primary }}
              >
                Primera campaña activa configurada por ti. Guía de referencia de la herramienta, mapa de contenidos de tu industria y criterio propio para seguir creciendo sin depender de nadie.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
              <CTACalendar
                variant="primary"
                dark={dark}
                accentColor={t.accent}
                accentSolidColor={t.accentSolid}
                label="Quiero aprender MetaAds"
              />
              <CTAWhatsApp
                variant="secondary"
                context="growth"
                dark={dark}
                accentColor={t.accent}
                label="Tengo preguntas"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mentoria 1:1 - Control de la marca */}
      <section className="py-16 relative" style={{ borderTop: `1px solid ${t.border}` }} id="mentoria">
        <div className="max-w-5xl mx-auto px-6">
          <div
            className="p-6 sm:p-8 lg:p-10 rounded-3xl backdrop-blur-xl transition-all duration-300"
            style={{
              background: t.card,
              border: `1px solid ${t.border}`,
              boxShadow: dark ? `0 4px 40px ${t.accent}08` : "0 4px 40px rgba(0,0,0,0.04)",
            }}
          >
            <div className="flex flex-col-reverse gap-6 mb-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1 text-center lg:text-left">
                <span
                  className="inline-block text-xs tracking-[0.22em] uppercase font-medium mb-4 px-4 py-2 rounded-full"
                  style={{
                    fontFamily: "var(--font-lato), 'Lato', sans-serif",
                    color: t.accent,
                    background: dark ? `${t.accent}15` : `${t.accent}10`,
                  }}
                >
                  Mentoría 1:1
                </span>
                <h2
                  className="font-bold mb-4"
                  style={{
                    fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif",
                    color: t.text.primary,
                    fontSize: "clamp(24px, 3.5vw, 36px)",
                  }}
                >
                  Control de la marca — Sprint mensual
                </h2>
                <p
                  className="text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 text-pretty"
                  style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}
                >
                  Si no sabes para dónde vas, cualquier camino sirve — y eso le sale caro a tu negocio. En un sprint de 6 sesiones construimos juntos la base estratégica de tu marca: desde el propósito que alinea a tus cofounders hasta el sistema que le da claridad total a tu equipo de marketing para ejecutar o delegar sin perderse.
                </p>
              </div>
              <div
                className="shrink-0 flex flex-col items-center text-center lg:items-end gap-1 lg:text-right p-5 rounded-2xl w-full max-w-sm mx-auto lg:mx-0 lg:max-w-none lg:w-auto"
                style={{
                  background: dark ? `${t.accent}08` : `${t.accent}06`,
                  border: `1px solid ${t.border}`,
                }}
              >
                <div
                  className="font-bold"
                  style={{
                    fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif",
                    color: t.accent,
                    fontSize: "clamp(24px, 3vw, 32px)",
                  }}
                >
                  $500 USD
                </div>
                <div className="text-sm" style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}>
                  $2.000.000 COP
                </div>
                <div className="text-xs mt-2" style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.muted }}>
                  Sprint mensual / 6 sesiones de 1h
                </div>
                <div
                  className="text-xs mt-2 px-2 py-1 rounded-lg"
                  style={{
                    fontFamily: "var(--font-lato), 'Lato', sans-serif",
                    color: t.accent,
                    background: dark ? `${t.accent}12` : `${t.accent}08`,
                  }}
                >
                  4 cupos disponibles
                </div>
                <CTACalendar
                  variant="primary"
                  dark={dark}
                  accentColor={t.accent}
                  accentSolidColor={t.accentSolid}
                  label="Agendar sprint"
                  className="mt-4 w-full lg:w-auto"
                />
              </div>
            </div>

          {/* Proceso */}
          <div className="space-y-5 mb-8">
            {/* Paso 1 */}
            <div
              className="p-5 sm:p-6 rounded-2xl transition-all duration-300"
              style={{
                background: dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
                border: `1px solid ${t.border}`,
              }}
            >
              <div className="flex flex-col items-center text-center gap-4 md:flex-row md:items-start md:text-left">
                <div
                  className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base"
                  style={{
                    fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif",
                    background: dark ? `${t.accent}15` : `${t.accent}10`,
                    color: t.accent,
                  }}
                >
                  1
                </div>
                <div className="flex-1 w-full md:w-auto">
                  <h3
                    className="font-semibold text-base sm:text-lg mb-2"
                    style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: t.text.primary }}
                  >
                    Círculo de Oro / Simon Sinek
                  </h3>
                  <p
                    className="text-sm sm:text-base leading-relaxed mb-4 text-pretty"
                    style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}
                  >
                    Antes de construir cualquier cosa, los founders necesitan ponerse de acuerdo en una sola dirección: por qué existen, cómo lo hacen y qué ofrecen. Esta es la piedra angular. Sin ella, todo lo que viene después está construido sobre arena.
                  </p>
                  <blockquote
                    className="pl-4 py-2 italic text-sm rounded-r-lg text-left"
                    style={{
                      fontFamily: "var(--font-lato), 'Lato', sans-serif",
                      color: t.text.muted,
                      borderLeft: `3px solid ${t.accent}`,
                      background: dark ? `${t.accent}05` : `${t.accent}03`,
                    }}
                  >
                    &ldquo;Los líderes que inspiran no empiezan por lo que hacen. Empiezan por el por qué.&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Paso 2 */}
            <div
              className="p-5 sm:p-6 rounded-2xl transition-all duration-300"
              style={{
                background: dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
                border: `1px solid ${t.border}`,
              }}
            >
              <div className="flex flex-col items-center text-center gap-4 mb-5 md:flex-row md:items-start md:text-left">
                <div
                  className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base"
                  style={{
                    fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif",
                    background: dark ? `${t.accent}15` : `${t.accent}10`,
                    color: t.accent,
                  }}
                >
                  2
                </div>
                <div>
                  <h3
                    className="font-semibold text-base sm:text-lg mb-1"
                    style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: t.text.primary }}
                  >
                    Control de la marca / 3 pilares
                  </h3>
                  <p
                    className="text-sm sm:text-base"
                    style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}
                  >
                    Con el propósito claro, estructuramos los tres pilares que convierten tu marca en un sistema operable y delegable.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {brandPillars.map((pillar, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      background: dark ? `${t.accent}08` : `${t.accent}06`,
                      border: `1px solid ${t.border}`,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold"
                        style={{ background: t.accent, color: dark ? "#000" : "#fff" }}
                      >
                        {pillar.num}
                      </span>
                      <h4
                        className="font-semibold text-sm"
                        style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: t.text.primary }}
                      >
                        {pillar.title}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.items.map((item, j) => (
                        <span
                          key={j}
                          className="text-xs sm:text-sm px-2 py-1 rounded-md"
                          style={{
                            fontFamily: "var(--font-lato), 'Lato', sans-serif",
                            background: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
                            color: t.text.secondary,
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Paso 3 */}
            <div
              className="p-5 sm:p-6 rounded-2xl transition-all duration-300"
              style={{
                background: dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
                border: `1px solid ${t.border}`,
              }}
            >
              <div className="flex flex-col items-center text-center gap-4 md:flex-row md:items-start md:text-left">
                <div
                  className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base"
                  style={{
                    fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif",
                    background: dark ? `${t.accent}15` : `${t.accent}10`,
                    color: t.accent,
                  }}
                >
                  3
                </div>
                <div>
                  <h3
                    className="font-semibold text-base sm:text-lg mb-2"
                    style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: t.text.primary }}
                  >
                    Mapa de stakeholders
                  </h3>
                  <p
                    className="text-sm sm:text-base leading-relaxed text-pretty"
                    style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}
                  >
                    Identificamos y documentamos los actores clave de tu modelo de negocio — quiénes son, qué los mueve y cómo se relacionan con tu marca. Esto define con quién hablas y cómo hablarles.
                  </p>
                </div>
              </div>
            </div>
          </div>

            <div
              className="p-4 sm:p-5 rounded-2xl text-center md:text-left"
              style={{
                background: dark ? `${t.accent}08` : `${t.accent}06`,
                border: `1px solid ${t.border}`,
              }}
            >
              <h4
                className="font-semibold text-sm mb-2"
                style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: t.accent }}
              >
                Entregable
              </h4>
              <p
                className="text-sm sm:text-base leading-relaxed text-pretty"
                style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.primary }}
              >
                Sistema completo en Notion con tu marca documentada y lista para implementar o delegar. Tu CEO, cofounders y equipo de marketing tendrán una guía sin ambigüedades sobre qué comunicar, cómo decirlo y a quién.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultoria para equipos - Microsistema */}
      <section className="py-16 relative" style={{ borderTop: `1px solid ${t.border}` }} id="consultoria">
        <div className="max-w-5xl mx-auto px-6">
          <div
            className="p-6 sm:p-8 lg:p-10 rounded-3xl backdrop-blur-xl transition-all duration-300"
            style={{
              background: t.card,
              border: `1px solid ${t.border}`,
              boxShadow: dark ? `0 4px 40px ${t.accent}08` : "0 4px 40px rgba(0,0,0,0.04)",
            }}
          >
            <div className="flex flex-col-reverse gap-6 mb-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1 text-center lg:text-left">
                <span
                  className="inline-block text-xs tracking-[0.22em] uppercase font-medium mb-4 px-4 py-2 rounded-full"
                  style={{
                    fontFamily: "var(--font-lato), 'Lato', sans-serif",
                    color: t.accent,
                    background: dark ? `${t.accent}15` : `${t.accent}10`,
                  }}
                >
                  Consultoría para equipos
                </span>
                <h2
                  className="font-bold mb-4"
                  style={{
                    fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif",
                    color: t.text.primary,
                    fontSize: "clamp(24px, 3.5vw, 36px)",
                  }}
                >
                  Microsistema de administración de RRSS
                </h2>
                <p
                  className="text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 text-pretty"
                  style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}
                >
                  Un equipo de marketing sin sistema no ejecuta — improvisa. Y la improvisación en redes sociales tiene un costo altísimo: contenido sin dirección, métricas sin sentido y un founder que termina haciendo el trabajo que delegó.
                </p>
              </div>
              <div
                className="shrink-0 flex flex-col items-center text-center lg:items-end gap-1 lg:text-right p-5 rounded-2xl w-full max-w-sm mx-auto lg:mx-0 lg:max-w-none lg:w-auto"
                style={{
                  background: dark ? `${t.accent}08` : `${t.accent}06`,
                  border: `1px solid ${t.border}`,
                }}
              >
                <div
                  className="font-bold"
                  style={{
                    fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif",
                    color: t.accent,
                    fontSize: "clamp(24px, 3vw, 32px)",
                  }}
                >
                  $630 USD
                </div>
                <div className="text-sm" style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}>
                  $2.520.000 COP
                </div>
                <div className="text-xs mt-2" style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.muted }}>
                  Sprint de 2.5 meses / 10 sesiones de 1h
                </div>
                <CTACalendar
                  variant="primary"
                  dark={dark}
                  accentColor={t.accent}
                  accentSolidColor={t.accentSolid}
                  label="Agendar consultoría"
                  className="mt-4 w-full lg:w-auto"
                />
              </div>
            </div>

          {/* Insight */}
          <div
            className="p-4 rounded-xl mb-8 flex flex-col items-center text-center gap-3 sm:flex-row sm:items-start sm:text-left"
            style={{
              background: dark ? `${t.accent}08` : `${t.accent}06`,
              border: `1px solid ${t.border}`,
            }}
          >
            <div
              className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center sm:mt-0.5"
              style={{ background: t.accent }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ color: dark ? "#000" : "#fff" }}>
                <path d="M6 3V6.5M6 8.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <p
              className="text-sm sm:text-base italic text-pretty"
              style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.primary }}
            >
              No es solo entregar una parrilla. Es acompañar al equipo hasta que el sistema se vuelve parte de cómo trabajan — con o sin ti presente.
            </p>
          </div>

          {/* Que incluye */}
          <div className="mb-8 text-center md:text-left">
            <h3
              className="font-semibold text-lg mb-4"
              style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: t.text.primary }}
            >
              Qué incluye
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {microsistemaIncludes.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl transition-all duration-300 hover:scale-[1.01]"
                  style={{
                    background: dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
                    border: `1px solid ${t.border}`,
                  }}
                >
                  <div className="flex flex-col items-center text-center gap-3 sm:flex-row sm:items-start sm:text-left">
                    <div
                      className="shrink-0 w-5 h-5 rounded-md flex items-center justify-center sm:mt-0.5"
                      style={{
                        background: dark ? `${t.accent}15` : `${t.accent}10`,
                      }}
                    >
                      <CheckIcon color={t.accent} />
                    </div>
                    <div>
                      <h4
                        className="font-semibold text-sm mb-1"
                        style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: t.text.primary }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="text-xs sm:text-sm leading-relaxed"
                        style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Canales */}
          <div className="mb-8 text-center md:text-left">
            <h3
              className="font-semibold text-sm mb-3"
              style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: t.text.muted }}
            >
              Canales trabajados
            </h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {channels.map((channel, i) => (
                <span
                  key={i}
                  className="text-sm px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:scale-105"
                  style={{
                    fontFamily: "var(--font-lato), 'Lato', sans-serif",
                    background: dark ? `${t.accent}12` : `${t.accent}08`,
                    border: `1px solid ${t.border}`,
                    color: t.accent,
                  }}
                >
                  {channel}
                </span>
              ))}
            </div>
          </div>

          <div
            className="p-4 sm:p-5 rounded-2xl text-center md:text-left"
            style={{
              background: dark ? `${t.accent}08` : `${t.accent}06`,
              border: `1px solid ${t.border}`,
            }}
          >
            <h4
              className="font-semibold text-sm mb-2"
              style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: t.accent }}
            >
              Resultado
            </h4>
            <p
              className="text-sm sm:text-base leading-relaxed text-pretty"
              style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.primary }}
            >
              Un equipo que no espera instrucciones para publicar. Saben qué crear, cuándo publicarlo, cómo medirlo y cómo mejorar — todo dentro de un sistema vivo en Notion que crece con ellos.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative" style={{ borderTop: `1px solid ${t.border}` }}>
        <div className="max-w-5xl mx-auto px-6">
          <CTASection
            dark={dark}
            accentColor={t.accent}
            accentSolidColor={t.accentSolid}
            context="growth"
            title="¿Listo para tomar el control?"
            description="Agenda una sesión de diagnóstico o escríbeme directamente para conocer tu caso."
          />
        </div>
      </section>
    </ThemedPageShell>
  );
}
