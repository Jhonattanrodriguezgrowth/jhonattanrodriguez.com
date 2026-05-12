"use client";

import { useTheme } from "@teispace/next-themes";
import { useEffect, useState } from "react";
import { ThemedPageShell } from "@/components/sections/themed-page-shell";
import { CheckIcon } from "@/components/shared/icons";
import { CTASection, CTACalendar, CTAWhatsApp } from "@/components/cta-buttons";
import { THEMES, GROWTH_TOOLS } from "@/lib/design-tokens";

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

  const metaAdsSessions = [
    {
      num: 1,
      title: "Domina el territorio",
      duration: "60 min",
      desc: "Recorrido completo por el administrador de anuncios: donde esta todo, que significa cada cosa y como funciona. Exploramos juntos la biblioteca de anuncios de tu competencia y salimos con una guia clara de lo que es posible hacer con la herramienta.",
      reto: "Construir una lista de 10 ideas de contenido ganadoras basadas en lo que ya esta funcionando en tu industria.",
    },
    {
      num: 2,
      title: "Contenido con objetivo",
      duration: "60 min",
      desc: "Aprendemos las categorias de contenido que existen en Meta y como conectar cada una con los objetivos reales del administrador de anuncios. Ejercicio 100% practico trabajando directamente con las 10 ideas del reto.",
      reto: "Tener listo el contenido de la primera campana para subir en vivo.",
    },
    {
      num: 3,
      title: "Primera campana en vivo",
      duration: "90 min",
      desc: "Subimos la campana juntos, en tiempo real. Configuramos cada parametro, revisamos la segmentacion, validamos el presupuesto y la dejamos activa. Sales con tu primera campana corriendo y sabiendo exactamente que mirar en los proximos dias.",
      reto: null,
    },
  ];

  const brandPillars = [
    {
      num: 1,
      title: "Personalidad de la marca",
      items: ["Arquetipo", "Mision", "Vision", "Valores", "PTM", "Colores", "Tipografia"],
    },
    {
      num: 2,
      title: "Identidad verbal",
      items: ["Naming", "Tagline", "Voz", "Tono", "Relato", "Canales", "Tipos de contenido"],
    },
    {
      num: 3,
      title: "Comunidad",
      items: ["Identidad", "La causa", "El gran sueno", "PUV", "Manifiesto", "Gamificacion", "Referentes"],
    },
  ];

  const microsistemaIncludes = [
    {
      title: "Parrilla de contenido",
      desc: "Calendario editorial con objetivos, responsables y estados de publicacion por canal.",
    },
    {
      title: "North Star Metrics",
      desc: "Indicadores clave por canal conectados al objetivo real del negocio.",
    },
    {
      title: "Arquitectura del guion",
      desc: "Framework Hook - Inicio - Nudo - Desenlace - CTA para producir contenido con intencion.",
    },
    {
      title: "Seguimiento de canales",
      desc: "Dashboard por red social con seguidores, objetivos y fecha de actualizacion en tiempo real.",
    },
  ];

  const channels = ["Instagram", "LinkedIn", "TikTok", "YouTube"];

  return (
    <ThemedPageShell pageBackground={t.bg} accentColor={t.accent} secondaryColor={t.secondary} dark={dark}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="max-w-5xl mx-auto px-6">
          <span
            className="inline-block text-xs tracking-[0.22em] uppercase font-semibold mb-4 px-4 py-2 rounded-full"
            style={{
              fontFamily: "var(--font-lato), 'Lato', sans-serif",
              color: t.accent,
              background: dark ? `${t.accent}15` : `${t.accent}10`,
            }}
          >
            Growth Hacker
          </span>
          <h1
            className="font-bold leading-[1.1] mb-6"
            style={{
              fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif",
              fontSize: "clamp(28px,4.5vw,52px)",
              color: t.text.primary,
            }}
          >
            <span className="text-balance">
              El founder que domina sus propias herramientas{" "}
              <span style={{ color: t.accent }}>no necesita permiso de nadie para crecer.</span>
            </span>
          </h1>
          <p
            className="text-base md:text-lg max-w-2xl leading-relaxed mb-8 text-pretty"
            style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}
          >
            Deja de pagar a agencias por lo que puedes hacer tu mismo. Te enseno a operar con sistemas agiles y las herramientas de IA que hoy definen quien escala y quien se queda atras.
          </p>
          <div className="flex flex-wrap gap-4">
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
              label="Hablemos de tu operacion"
            />
          </div>
        </div>
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
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
              <div className="flex-1">
                <div
                  className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4"
                  style={{
                    fontFamily: "var(--font-lato), 'Lato', sans-serif",
                    background: dark ? `${t.accent}15` : `${t.accent}10`,
                    color: t.accent,
                  }}
                >
                  Empieza aqui
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
                  La mayoria de founders le tienen miedo a Meta Ads porque nunca nadie se los explico bien. En 3 sesiones pasas de no saber donde hacer clic a tener tu primera campana activa — con una estrategia de contenido basada en lo que ya esta funcionando en tu industria.
                </p>
              </div>
              <div
                className="shrink-0 flex flex-col items-start lg:items-end gap-1 lg:text-right p-5 rounded-2xl"
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
                    onClick={() => setExpandedSession(expandedSession === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors duration-200"
                    style={{ background: expandedSession === i ? (dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.01)") : "transparent" }}
                  >
                    <div className="flex items-center gap-4">
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
                      <div>
                        <h3
                          className="font-semibold text-sm sm:text-base"
                          style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: t.text.primary }}
                        >
                          {session.title}
                        </h3>
                        <span
                          className="text-xs"
                          style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.muted }}
                        >
                          {session.duration}
                        </span>
                      </div>
                    </div>
                    <div
                      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300"
                      style={{
                        background: dark ? `${t.accent}10` : `${t.accent}08`,
                        transform: expandedSession === i ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ color: t.accent }}>
                        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: expandedSession === i ? "300px" : "0px",
                      opacity: expandedSession === i ? 1 : 0,
                    }}
                  >
                    <div className="px-4 sm:px-5 pb-5 pt-0">
                      <p
                        className="text-sm leading-relaxed mb-4 text-pretty"
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
                            className="text-sm"
                            style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.primary }}
                          >
                            {session.reto}
                          </p>
                        </div>
                      )}
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
                className="text-sm leading-relaxed text-pretty"
                style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.primary }}
              >
                Primera campana activa configurada por ti. Guia de referencia de la herramienta, mapa de contenidos de tu industria y criterio propio para seguir creciendo sin depender de nadie.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
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
          <div className="mb-8">
            <span
              className="inline-block text-xs tracking-[0.22em] uppercase font-medium mb-4 px-4 py-2 rounded-full"
              style={{
                fontFamily: "var(--font-lato), 'Lato', sans-serif",
                color: t.accent,
                background: dark ? `${t.accent}15` : `${t.accent}10`,
              }}
            >
              Mentoria 1:1
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
              className="text-sm sm:text-base leading-relaxed max-w-2xl text-pretty"
              style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}
            >
              Si no sabes para donde vas, cualquier camino sirve — y eso le sale caro a tu negocio. En un sprint de 6 sesiones construimos juntos la base estrategica de tu marca: desde el proposito que alinea a tus cofounders hasta el sistema que le da claridad total a tu equipo de marketing para ejecutar o delegar sin perderse.
            </p>
          </div>

          {/* Proceso */}
          <div className="space-y-5 mb-8">
            {/* Paso 1 */}
            <div
              className="p-5 sm:p-6 rounded-2xl transition-all duration-300"
              style={{
                background: t.card,
                border: `1px solid ${t.border}`,
              }}
            >
              <div className="flex items-start gap-4">
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
                <div className="flex-1">
                  <h3
                    className="font-semibold text-base sm:text-lg mb-2"
                    style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: t.text.primary }}
                  >
                    Circulo de Oro / Simon Sinek
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4 text-pretty"
                    style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}
                  >
                    Antes de construir cualquier cosa, los founders necesitan ponerse de acuerdo en una sola direccion: por que existen, como lo hacen y que ofrecen? Esta es la piedra angular. Sin ella, todo lo que viene despues esta construido sobre arena.
                  </p>
                  <blockquote
                    className="pl-4 py-2 italic text-sm rounded-r-lg"
                    style={{
                      fontFamily: "var(--font-lato), 'Lato', sans-serif",
                      color: t.text.muted,
                      borderLeft: `3px solid ${t.accent}`,
                      background: dark ? `${t.accent}05` : `${t.accent}03`,
                    }}
                  >
                    &ldquo;Los lideres que inspiran no empiezan por lo que hacen. Empiezan por el porque.&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Paso 2 */}
            <div
              className="p-5 sm:p-6 rounded-2xl transition-all duration-300"
              style={{
                background: t.card,
                border: `1px solid ${t.border}`,
              }}
            >
              <div className="flex items-start gap-4 mb-5">
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
                    className="text-sm"
                    style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}
                  >
                    Con el proposito claro, estructuramos los tres pilares que convierten tu marca en un sistema operable y delegable.
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
                          className="text-xs px-2 py-1 rounded-md"
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
                background: t.card,
                border: `1px solid ${t.border}`,
              }}
            >
              <div className="flex items-start gap-4">
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
                    className="text-sm leading-relaxed text-pretty"
                    style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}
                  >
                    Identificamos y documentamos los actores clave de tu modelo de negocio — quienes son, que los mueve y como se relacionan con tu marca. Esto define con quien hablas y como hablarles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Entregable y Precio */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div
              className="flex-1 p-5 rounded-2xl"
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
                className="text-sm leading-relaxed text-pretty"
                style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.primary }}
              >
                Sistema completo en Notion con tu marca documentada y lista para implementar o delegar. Tu CEO, cofounders y equipo de marketing tendran una guia sin ambiguedades sobre que comunicar, como decirlo y a quien.
              </p>
            </div>
            <div
              className="lg:w-72 p-5 rounded-2xl flex flex-col"
              style={{
                background: t.card,
                border: `1px solid ${t.border}`,
              }}
            >
              <div
                className="font-bold mb-1"
                style={{
                  fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif",
                  color: t.accent,
                  fontSize: "clamp(24px, 3vw, 32px)",
                }}
              >
                $500 USD
              </div>
              <div className="text-sm mb-2" style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}>
                $2.000.000 COP
              </div>
              <div className="text-xs" style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.muted }}>
                Sprint mensual / 6 sesiones de 1h
              </div>
              <div
                className="text-xs mt-2 px-2 py-1 rounded-lg inline-block w-fit"
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
                className="mt-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consultoria para equipos - Microsistema */}
      <section className="py-16 relative" style={{ borderTop: `1px solid ${t.border}` }} id="consultoria">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-8">
            <span
              className="inline-block text-xs tracking-[0.22em] uppercase font-medium mb-4 px-4 py-2 rounded-full"
              style={{
                fontFamily: "var(--font-lato), 'Lato', sans-serif",
                color: t.accent,
                background: dark ? `${t.accent}15` : `${t.accent}10`,
              }}
            >
              Consultoria para equipos
            </span>
            <h2
              className="font-bold mb-4"
              style={{
                fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif",
                color: t.text.primary,
                fontSize: "clamp(24px, 3.5vw, 36px)",
              }}
            >
              Microsistema de administracion de RRSS
            </h2>
            <p
              className="text-sm sm:text-base leading-relaxed max-w-2xl text-pretty"
              style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}
            >
              Un equipo de marketing sin sistema no ejecuta — improvisa. Y la improvisacion en redes sociales tiene un costo altisimo: contenido sin direccion, metricas sin sentido y un founder que termina haciendo el trabajo que delego.
            </p>
          </div>

          {/* Insight */}
          <div
            className="p-4 rounded-xl mb-8 flex items-start gap-3"
            style={{
              background: dark ? `${t.accent}08` : `${t.accent}06`,
              border: `1px solid ${t.border}`,
            }}
          >
            <div
              className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
              style={{ background: t.accent }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ color: dark ? "#000" : "#fff" }}>
                <path d="M6 3V6.5M6 8.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <p
              className="text-sm italic text-pretty"
              style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.primary }}
            >
              No es solo entregar una parrilla. Es acompanar al equipo hasta que el sistema se vuelve parte de como trabajan — con o sin ti presente.
            </p>
          </div>

          {/* Que incluye */}
          <div className="mb-8">
            <h3
              className="font-semibold text-lg mb-4"
              style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: t.text.primary }}
            >
              Que incluye
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {microsistemaIncludes.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl transition-all duration-300 hover:scale-[1.01]"
                  style={{
                    background: t.card,
                    border: `1px solid ${t.border}`,
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="shrink-0 w-5 h-5 rounded-md flex items-center justify-center mt-0.5"
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
                        className="text-xs leading-relaxed"
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
          <div className="mb-8">
            <h3
              className="font-semibold text-sm mb-3"
              style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: t.text.muted }}
            >
              Canales trabajados
            </h3>
            <div className="flex flex-wrap gap-2">
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

          {/* Resultado y Precio */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div
              className="flex-1 p-5 rounded-2xl"
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
                className="text-sm leading-relaxed text-pretty"
                style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.primary }}
              >
                Un equipo que no espera instrucciones para publicar. Saben que crear, cuando publicarlo, como medirlo y como mejorar — todo dentro de un sistema vivo en Notion que crece con ellos.
              </p>
            </div>
            <div
              className="lg:w-72 p-5 rounded-2xl flex flex-col"
              style={{
                background: t.card,
                border: `1px solid ${t.border}`,
              }}
            >
              <div
                className="font-bold mb-1"
                style={{
                  fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif",
                  color: t.accent,
                  fontSize: "clamp(24px, 3vw, 32px)",
                }}
              >
                $630 USD
              </div>
              <div className="text-sm mb-2" style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}>
                $2.520.000 COP
              </div>
              <div className="text-xs" style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.muted }}>
                Sprint de 2.5 meses / 10 sesiones de 1h
              </div>
              <CTACalendar
                variant="primary"
                dark={dark}
                accentColor={t.accent}
                accentSolidColor={t.accentSolid}
                label="Agendar consultoria"
                className="mt-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-12 relative" style={{ borderTop: `1px solid ${t.border}` }}>
        <div className="max-w-5xl mx-auto px-6">
          <span
            className="inline-block text-xs tracking-[0.22em] uppercase font-medium mb-4 px-4 py-2 rounded-full"
            style={{
              fontFamily: "var(--font-lato), 'Lato', sans-serif",
              color: t.accent,
              background: dark ? `${t.accent}15` : `${t.accent}10`,
            }}
          >
            Stack de herramientas
          </span>
          <div className="flex flex-wrap gap-2">
            {GROWTH_TOOLS.map((tool, i) => (
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
                {tool}
              </span>
            ))}
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
            title="Listo para tomar control?"
            description="Agenda una sesion de diagnostico o escribeme directamente para conocer tu caso."
          />
        </div>
      </section>
    </ThemedPageShell>
  );
}
