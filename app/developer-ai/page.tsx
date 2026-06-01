"use client";

import Image from "next/image";
import { useTheme } from "@teispace/next-themes";
import { useEffect, useState, type CSSProperties } from "react";
import { ThemedPageShell } from "@/components/sections/themed-page-shell";
import { CTACalendar, CTAWhatsApp } from "@/components/cta-buttons";
import { GlowButton } from "@/components/shared/glow-button";
import { getGitHubProfileLink } from "@/lib/cta-links";
import { THEMES, BUILDER_STACK, BUILDER_PROJECTS } from "@/lib/design-tokens";

export default function DeveloperAIPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen" style={{ background: THEMES.builder.dark.bg }} />;
  }

  const dark = theme === "dark";
  const t = dark ? THEMES.builder.dark : THEMES.builder.light;
  /** RGB de t.bg: dark #04080f → 4,8,15 | light #fafbff → 250,251,255 */
  const heroBgRgb = dark ? "4, 8, 15" : "250, 251, 255";
  const terminalLabelClass = "inline-block text-sm font-mono mb-4 px-3 py-1.5 rounded-lg";
  const terminalLabelStyle = {
    color: dark ? "rgba(255,255,255,0.86)" : t.text.secondary,
    background: dark ? `${t.accent}22` : `${t.accent}10`,
    border: `1px solid ${t.border}`,
  };

  const services = [
    {
      title: "Sistemas integrados con IA",
      desc: "Ecosistemas que conectan personas, procesos y datos mediante IA. Eliminan cuellos de botella, cierran puntos ciegos operativos y escalan la capacidad de cualquier equipo sin aumentar el headcount.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
    },
    {
      title: "Agentes IA a medida",
      desc: "Asistentes que operan donde los equipos no pueden estar: monitoreando, registrando y respondiendo en tiempo real. Desde salud hasta operaciones de campaña o cualquier flujo de datos crítico.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8V4H8"/>
          <rect x="8" y="8" width="8" height="8" rx="2"/>
          <path d="M12 16v4h4"/>
          <path d="M4 12h4"/>
          <path d="M16 12h4"/>
        </svg>
      ),
    },
    {
      title: "MVPs en tiempo récord",
      desc: "Frontend, base de datos, lógica y automatización — orquestado por un solo developer con stack completo. Sin agencias, sin equipos enormes, sin meses de espera, sin grandes e insostenibles presupuestos.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
    },
  ];

  return (
    <ThemedPageShell pageBackground={t.bg} accentColor={t.accent} secondaryColor={t.teal} dark={dark}>
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ "--hero-fade-color": t.bg, backgroundColor: t.bg } as CSSProperties}
      >
        {/* GIF background layer */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/developer-ai/developer-ai-hero-bg.gif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: dark ? 0.62 : 0.28,
          }}
          aria-hidden
        />
        {/* Contrast overlays for text legibility */}
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
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="mb-6 flex justify-center">
            <GlowButton
              href="https://www.instagram.com/jhonattansdev/"
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
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" />
                </svg>
                @jhonattansdev
              </span>
            </GlowButton>
          </div>
          <h1
            className="font-bold leading-tight mb-6 text-center"
            style={{
              fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif",
              fontSize: "clamp(32px,5vw,56px)",
              color: t.text.primary,
            }}
          >
            <span className="block lg:inline">
              La tecnología es lo
              <br className="lg:hidden" aria-hidden />
              más cercano a la{" "}
              <span style={{ color: t.accent }}>magia.</span>
            </span>
          </h1>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-pretty mb-8"
            style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}
          >
            Creo firmemente que el software y la inteligencia artificial pueden transformar la calidad
            de vida en Colombia y Latinoamérica. Desde 2025, el desarrollo de software se ha
            democratizado y hoy construir soluciones está al alcance de más personas.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTACalendar variant="primary" dark={dark} accentColor={t.accent} accentSolidColor={t.accentSolid} />
            <CTAWhatsApp variant="secondary" context="builder" dark={dark} accentColor={t.accent} />
          </div>

          <div className="mt-12">
            <span
              className={terminalLabelClass}
              style={terminalLabelStyle}
            >
              {"> stack --developer_ai"}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 justify-items-stretch">
              {BUILDER_STACK.map((name) => (
                <div
                  key={name}
                  className="p-4 text-center rounded-2xl transition-all duration-200 hover:scale-105"
                  style={{ background: t.card, border: `1px solid ${t.border}` }}
                >
                  <div className="text-xs font-mono" style={{ color: t.accent }}>
                    {name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-bottom-fade hero-bottom-fade--developer-ai" aria-hidden />
      </section>

      {/* Projects */}
      <section className="py-12 relative" style={{ borderTop: `1px solid ${t.border}` }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2
              className="font-bold text-2xl mb-2"
              style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: t.text.primary }}
            >
              Portafolio AI Developer
            </h2>
            <p
              className="text-sm text-pretty"
              style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}
            >
              “Las personas que son tan locas y creen que pueden cambiar el mundo, son las que lo hacen.” — Steve Paul Jobs
            </p>
          </div>

          {/* Project Cards — Accordion */}
          <div className="flex flex-col gap-4">
            {BUILDER_PROJECTS.map((project, i) => {
              const isOpen = expandedIndex === i;
              const titleId = `project-title-${i}`;
              const panelId = `project-panel-${i}`;
              const mediaSrc = project.expandedMedia?.src?.trim();
              const statusColor =
                project.status === "Activo"
                  ? t.teal
                  : project.status === "En construcción"
                  ? t.accent
                  : project.status === "En beta"
                  ? "#f59e0b"
                  : t.text.muted;

              return (
                <div
                  key={project.title}
                  className="rounded-2xl transition-all duration-300"
                  style={{
                    background: isOpen ? t.cardHover : t.card,
                    border: `1px solid ${isOpen ? `${t.accent}40` : t.border}`,
                    boxShadow: isOpen ? `0 8px 32px ${t.accent}15` : "none",
                  }}
                >
                  {/* Trigger */}
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setExpandedIndex(isOpen ? null : i)}
                    className="w-full text-left p-6 rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:ring-[color:var(--project-focus)]"
                    style={{ ["--project-focus" as string]: t.accent }}
                  >
                    {/* Badges + toggle */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex flex-wrap gap-2">
                        <span
                          className="text-xs font-mono px-2 py-1 rounded-lg"
                          style={{
                            color: t.accent,
                            background: dark ? `${t.accent}15` : `${t.accent}10`,
                          }}
                        >
                          {project.badge}
                        </span>
                        <span
                          className="text-xs font-mono px-2 py-1 rounded-lg"
                          style={{
                            color: statusColor,
                            background: dark ? `${statusColor}20` : `${statusColor}12`,
                          }}
                        >
                          {project.status}
                        </span>
                      </div>
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0"
                        style={{
                          background: t.card,
                          border: `1px solid ${t.border}`,
                          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        }}
                        aria-hidden
                      >
                        <span style={{ color: dark ? "rgba(255,255,255,0.82)" : t.text.secondary, fontSize: 14 }}>+</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      id={titleId}
                      className="font-semibold text-xl mb-2"
                      style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: t.text.primary }}
                    >
                      {project.title}
                    </h3>

                    {/* Tagline */}
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}
                    >
                      {project.tagline}
                    </p>

                    {/* Role chip */}
                    <div className="mb-4">
                      <span
                        className="text-xs font-mono px-2 py-1 rounded-lg"
                        style={{
                          color: t.text.muted,
                          background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                          border: `1px solid ${t.border}`,
                        }}
                      >
                        {project.role}
                      </span>
                    </div>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-2 py-1 rounded-lg font-mono"
                          style={{
                            background: dark ? `${t.teal}15` : `${t.teal}10`,
                            color: t.teal,
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </button>

                  {/* Expanded panel */}
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={titleId}
                    aria-hidden={!isOpen}
                    className="overflow-hidden transition-all duration-500"
                    style={{
                      maxHeight: isOpen ? "2400px" : "0px",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div
                      className="px-6 pb-6 pt-4"
                      style={{ borderTop: `1px solid ${t.border}` }}
                    >
                      {/* Desc */}
                      <p
                        className="text-sm leading-relaxed mb-6"
                        style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}
                      >
                        {project.desc}
                      </p>

                      {/* Problem */}
                      <div className="mb-6">
                        <span
                          className="text-xs font-mono block mb-2"
                          style={{ color: t.accent }}
                        >
                          {"> problema"}
                        </span>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}
                        >
                          {project.problem}
                        </p>
                      </div>

                      {/* How */}
                      <div className="mb-6">
                        <span
                          className="text-xs font-mono block mb-3"
                          style={{ color: t.accent }}
                        >
                          {"> cómo funciona"}
                        </span>
                        <div className="flex flex-col gap-3">
                          {project.how.map((h) => (
                            <div key={h.label} className="flex gap-3 items-start">
                              <span
                                className="text-xs font-mono px-2 py-1 rounded-lg shrink-0 mt-0.5"
                                style={{
                                  color: t.teal,
                                  background: dark ? `${t.teal}15` : `${t.teal}10`,
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {h.label}
                              </span>
                              <p
                                className="text-sm leading-relaxed"
                                style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}
                              >
                                {h.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech — solo si está poblado */}
                      {project.tech.length > 0 && (
                        <div className="mb-6">
                          <span
                            className="text-xs font-mono block mb-3"
                            style={{ color: t.accent }}
                          >
                            {"> tecnología aplicada"}
                          </span>
                          <div className="flex flex-col gap-3">
                            {project.tech.map((tech) => (
                              <div key={tech.name} className="flex gap-3 items-start">
                                <span
                                  className="text-xs font-mono px-2 py-1 rounded-lg shrink-0 mt-0.5"
                                  style={{
                                    color: t.accent,
                                    background: dark ? `${t.accent}15` : `${t.accent}10`,
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {tech.name}
                                </span>
                                <p
                                  className="text-sm leading-relaxed"
                                  style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}
                                >
                                  {tech.desc}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Result */}
                      <div className="mb-6">
                        <span
                          className="text-xs font-mono block mb-2"
                          style={{ color: t.accent }}
                        >
                          {"> resultado"}
                        </span>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}
                        >
                          {project.result}
                        </p>
                      </div>

                      {/* Imagen 16:9 */}
                      <div className="relative w-full mb-6">
                        <div
                          className="relative aspect-video w-full overflow-hidden rounded-xl"
                          style={{ border: `1px solid ${t.border}`, background: t.card }}
                        >
                          {mediaSrc ? (
                            <Image
                              src={mediaSrc}
                              alt={project.expandedMedia?.alt ?? ""}
                              fill
                              sizes="(max-width: 768px) 100vw, 960px"
                              className="object-cover object-top"
                            />
                          ) : (
                            <div
                              className="absolute inset-0 flex items-center justify-center p-4"
                              aria-hidden
                            >
                              <div
                                className="h-full w-full rounded-lg border border-dashed flex items-center justify-center"
                                style={{ borderColor: `${t.text.muted}55` }}
                              >
                                <span
                                  className="text-xs font-mono"
                                  style={{ color: dark ? "rgba(255,255,255,0.72)" : t.text.secondary }}
                                >
                                  hero screenshot · próximamente
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* CTA o nota de cierre */}
                      {project.closedNote ? (
                        <p
                          className="text-sm leading-relaxed italic"
                          style={{
                            fontFamily: "var(--font-lato), 'Lato', sans-serif",
                            color: t.text.muted,
                          }}
                        >
                          {project.closedNote}
                        </p>
                      ) : (
                        project.ctaUrl &&
                        project.ctaLabel && (
                          <div className="flex justify-center md:justify-start">
                            <GlowButton
                              href={project.ctaUrl}
                              external
                              variant="secondary"
                              size="md"
                              accentColor={t.accentSolid}
                              secondaryColor={t.accent}
                            >
                              {project.ctaLabel}
                            </GlowButton>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 relative" style={{ borderTop: `1px solid ${t.border}` }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span
            className={terminalLabelClass}
            style={terminalLabelStyle}
          >
            {"> services --list"}
          </span>
          <h2
            className="font-bold text-2xl mb-8"
            style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: t.text.primary }}
          >
            ¿Qué podemos construir?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] text-center"
                style={{ background: t.card, border: `1px solid ${t.border}` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto"
                  style={{ background: dark ? `${t.accent}15` : `${t.accent}10`, color: t.accent }}
                >
                  {s.icon}
                </div>
                <h3
                  className="font-semibold text-lg mb-3"
                  style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: t.text.primary }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process (oculto temporalmente, se mantiene en código) */}
      {false && (
        <section className="py-12 relative" style={{ borderTop: `1px solid ${t.border}` }}>
          <div className="max-w-5xl mx-auto px-6 text-center">
            <span
              className="inline-block text-xs font-mono mb-4 px-3 py-1.5 rounded-lg"
              style={{ color: t.text.muted, background: dark ? `${t.accent}10` : `${t.accent}08` }}
            >
              {"> workflow --show"}
            </span>
            <h2
              className="font-bold text-2xl mb-8"
              style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: t.text.primary }}
            >
              Proceso de construcción de un sistema integrado con IA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  step: "01",
                  title: "Diagnóstico del punto ciego",
                  desc: "Mapeo el problema real antes de abrir cualquier herramienta de código. Identifico qué datos son fundamentales de rastrear, qué proceso se hace a mano y dónde se rompe el flujo. El punto ciego no es técnico — es operativo, y resolverlo bien es la diferencia entre un sistema que funciona y uno que nadie usa.",
                },
                {
                  step: "02",
                  title: "Arquitectura del ecosistema",
                  desc: "Diseño los flujos entre actores y datos: quién produce información, quién la consume y qué decisiones activa. Defino qué viaja, cuándo y hacia dónde. No construyo plataformas aisladas — construyo ecosistemas donde cada pieza tiene un rol claro.",
                },
                {
                  step: "03",
                  title: "Construcción con agentes de IA",
                  desc: "Orquesto las herramientas: Lovable/v0 para el frontend, Cursor para la lógica, Supabase para la base de datos, Claude Code para la automatización (Orquestador + Pipeline), MCP para las integraciones. Resultado: MVP funcional y testeable en semanas.",
                },
                {
                  step: "04",
                  title: "Iteración con datos reales",
                  desc: "El MVP es el inicio, no el destino. Con usuarios reales itero sobre lo que funciona, elimino lo que no y escalo lo que sí. Cada ciclo trabaja en la optimización final del producto.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col items-center text-center gap-4 p-5 rounded-2xl transition-all duration-300 hover:scale-[1.01] sm:flex-row sm:items-start"
                  style={{ background: t.card, border: `1px solid ${t.border}` }}
                >
                  <div
                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg font-mono"
                    style={{ background: dark ? `${t.accent}15` : `${t.accent}10`, color: t.accent }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h3
                      className="font-semibold text-base mb-1"
                      style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: t.text.primary }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm sm:text-base leading-relaxed"
                      style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 relative" style={{ borderTop: `1px solid ${t.border}` }}>
        <div className="max-w-5xl mx-auto px-6">
          <div
            className="p-10 rounded-3xl text-center backdrop-blur-xl"
            style={{
              background: t.card,
              border: `1px solid ${t.border}`,
              boxShadow: dark ? `0 4px 60px ${t.accent}10` : "0 8px 40px rgba(0,0,0,0.06)",
            }}
          >
            <div
              className={`${terminalLabelClass} mx-auto`}
              style={terminalLabelStyle}
            >
              {"> ¿tienes un problema que necesita solución?"}
            </div>
            <h3
              className="font-bold text-xl mb-3 mx-auto max-w-xl"
              style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: t.text.primary }}
            >
              Construyamos algo juntos.
            </h3>
            <p
              className="text-sm sm:text-base mb-7 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}
            >
              Si en tu organización hay un proceso que se hace a mano, un dato que nadie está midiendo
              o un flujo que nadie está automatizando — ese es el punto ciego que podemos cerrar. Sin agencias.
              Sin equipos enormes. Con un sistema integrado con IA construido para tu contexto específico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTACalendar
                variant="primary"
                dark={dark}
                accentColor={t.accent}
                accentSolidColor={t.accentSolid}
                label="Hablemos del sistema"
              />
              <GlowButton
                href={getGitHubProfileLink()}
                external
                variant="secondary"
                size="md"
                accentColor={t.accentSolid}
                secondaryColor={t.accent}
              >
                Ver el repositorio
              </GlowButton>
            </div>
          </div>
        </div>
      </section>
    </ThemedPageShell>
  );
}
