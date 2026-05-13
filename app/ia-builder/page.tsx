"use client";

import { useTheme } from "@teispace/next-themes";
import { useEffect, useState } from "react";
import { ThemedPageShell } from "@/components/sections/themed-page-shell";
import { CTACalendar, CTAWhatsApp } from "@/components/cta-buttons";
import { THEMES, BUILDER_STACK, BUILDER_FILTERS, BUILDER_PROJECTS } from "@/lib/design-tokens";

export default function IABuilderPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState("Todos");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen" style={{ background: THEMES.builder.dark.bg }} />;
  }

  const dark = theme === "dark";
  const t = dark ? THEMES.builder.dark : THEMES.builder.light;

  const filtered = filter === "Todos" ? BUILDER_PROJECTS : BUILDER_PROJECTS.filter((p) => p.category === filter);

  const services = [
    {
      title: "Automatizaciones",
      desc: "Flujos que conectan tus herramientas y eliminan tareas repetitivas. n8n, Make, Zapier.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
    },
    {
      title: "Aplicaciones Web",
      desc: "MVPs, dashboards, portales. Construido rápido con las mejores herramientas low-code.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
    },
    {
      title: "Agentes IA",
      desc: "Asistentes que responden, procesan y ejecutan. Integrados con tu operación.",
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
  ];

  return (
    <ThemedPageShell pageBackground={t.bg} accentColor={t.accent} secondaryColor={t.teal} dark={dark}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="max-w-5xl mx-auto px-6 text-center md:text-left">
          {/* Terminal chrome */}
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2.5 rounded-full backdrop-blur-sm mx-auto md:mx-0"
            style={{
              background: t.card,
              border: `1px solid ${t.border}`,
            }}
          >
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ef4444" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#eab308" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#22c55e" }} />
            <span className="text-xs ml-2 font-mono" style={{ color: t.text.muted }}>
              ~/jhonattan/ia-builder
            </span>
          </div>

          <span
            className="text-xs font-mono block mb-4 px-3 py-1.5 rounded-lg w-fit mx-auto md:mx-0"
            style={{
              color: t.teal,
              background: dark ? `${t.teal}15` : `${t.teal}10`,
            }}
          >
            {"> init portfolio --mode=ia_builder"}
          </span>
          <h1
            className="font-bold leading-tight mb-6"
            style={{
              fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif",
              fontSize: "clamp(32px,5vw,56px)",
              color: t.text.primary,
            }}
          >
            Construyo herramientas
            <br />
            que <span style={{ color: t.accent }}>trabajan</span> mientras
            <br />
            tú escalas.
          </h1>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}
          >
            Automatizaciones, agentes y aplicaciones construidas con las herramientas que están
            redefiniendo cómo se trabaja. Cada proyecto resuelve un problema real.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <CTACalendar variant="primary" dark={dark} accentColor={t.accent} accentSolidColor={t.accentSolid} />
            <CTAWhatsApp variant="secondary" context="builder" dark={dark} accentColor={t.accent} />
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-12 relative">
        <div className="max-w-5xl mx-auto px-6 text-center md:text-left">
          <span
            className="inline-block text-xs font-mono mb-4 px-3 py-1.5 rounded-lg"
            style={{
              color: t.text.muted,
              background: dark ? `${t.accent}10` : `${t.accent}08`,
            }}
          >
            {"> stack --personal"}
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 justify-items-stretch">
            {BUILDER_STACK.map((name, i) => (
              <div
                key={i}
                className="p-4 text-center rounded-2xl transition-all duration-200 hover:scale-105"
                style={{
                  background: t.card,
                  border: `1px solid ${t.border}`,
                }}
              >
                <div className="text-xs font-mono" style={{ color: t.accent }}>
                  {name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 relative" style={{ borderTop: `1px solid ${t.border}` }}>
        <div className="max-w-5xl mx-auto px-6 text-center md:text-left">
          <span
            className="inline-block text-xs font-mono mb-4 px-3 py-1.5 rounded-lg"
            style={{
              color: t.text.muted,
              background: dark ? `${t.accent}10` : `${t.accent}08`,
            }}
          >
            {"> services --list"}
          </span>
          <h2
            className="font-bold text-2xl mb-8"
            style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: t.text.primary }}
          >
            Qué puedo construir para ti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] text-center md:text-left"
                style={{
                  background: t.card,
                  border: `1px solid ${t.border}`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0"
                  style={{
                    background: dark ? `${t.accent}15` : `${t.accent}10`,
                    color: t.accent,
                  }}
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

      {/* Projects */}
      <section className="py-12 relative" style={{ borderTop: `1px solid ${t.border}` }}>
        <div className="max-w-5xl mx-auto px-6 text-center md:text-left">
          <span
            className="inline-block text-xs font-mono mb-4 px-3 py-1.5 rounded-lg"
            style={{
              color: t.text.muted,
              background: dark ? `${t.accent}10` : `${t.accent}08`,
            }}
          >
            {"> projects --filter"}
          </span>

          {/* Filters */}
          <div
            className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start"
            role="group"
            aria-label="Filtrar proyectos por categoría"
          >
            {BUILDER_FILTERS.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className="min-h-[44px] min-w-[44px] px-4 py-3 rounded-xl text-sm font-mono transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{
                  background: filter === cat ? t.accent : "transparent",
                  border: `1px solid ${filter === cat ? t.accent : t.border}`,
                  color: filter === cat ? t.accentSolid : t.text.secondary,
                }}
                aria-pressed={filter === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filtered.map((project, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] text-center md:text-left"
                style={{
                  background: t.card,
                  border: `1px solid ${t.border}`,
                  opacity: project.soon ? 0.6 : 1,
                }}
              >
                <div className="flex items-start mb-4 flex-wrap gap-2 justify-center md:justify-between">
                  <span
                    className="text-xs px-2 py-1 rounded-lg font-mono"
                    style={{
                      background: dark ? `${t.accent}12` : `${t.accent}08`,
                      color: t.accent,
                    }}
                  >
                    {project.category}
                  </span>
                  {project.soon && (
                    <span className="text-xs font-mono" style={{ color: t.text.muted }}>
                      Próximamente
                    </span>
                  )}
                </div>
                <h3
                  className="font-semibold text-lg mb-2"
                  style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: t.text.primary }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm sm:text-base leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}
                >
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {project.stack.map((s, j) => (
                    <span
                      key={j}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 relative" style={{ borderTop: `1px solid ${t.border}` }}>
        <div className="max-w-5xl mx-auto px-6 text-center md:text-left">
          <span
            className="inline-block text-xs font-mono mb-4 px-3 py-1.5 rounded-lg"
            style={{
              color: t.text.muted,
              background: dark ? `${t.accent}10` : `${t.accent}08`,
            }}
          >
            {"> workflow --show"}
          </span>
          <h2
            className="font-bold text-2xl mb-8"
            style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: t.text.primary }}
          >
            Cómo desarrollo tu proyecto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Entendemos tu problema, mapeamos el proceso actual y definimos el alcance.",
              },
              {
                step: "02",
                title: "Prototipo",
                desc: "Construyo un MVP funcional para validar la solución antes de invertir más.",
              },
              {
                step: "03",
                title: "Desarrollo",
                desc: "Itero sobre el prototipo hasta tener la solución completa y robusta.",
              },
              {
                step: "04",
                title: "Entrega",
                desc: "Documentación, capacitación y soporte inicial incluido.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-4 p-5 rounded-2xl transition-all duration-300 hover:scale-[1.01] sm:flex-row sm:items-start sm:text-left"
                style={{
                  background: t.card,
                  border: `1px solid ${t.border}`,
                }}
              >
                <div
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg font-mono"
                  style={{
                    background: dark ? `${t.accent}15` : `${t.accent}10`,
                    color: t.accent,
                  }}
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

      {/* CTA Section */}
      <section className="py-16 relative" style={{ borderTop: `1px solid ${t.border}` }}>
        <div className="max-w-5xl mx-auto px-6">
          <div
            className="p-10 rounded-3xl text-center backdrop-blur-xl md:text-left"
            style={{
              background: t.card,
              border: `1px solid ${t.border}`,
              boxShadow: dark ? `0 4px 60px ${t.accent}10` : "0 8px 40px rgba(0,0,0,0.06)",
            }}
          >
            <div
              className="inline-block text-xs font-mono mb-4 px-3 py-1.5 rounded-lg mx-auto md:mx-0"
              style={{
                color: t.teal,
                background: dark ? `${t.teal}15` : `${t.teal}10`,
              }}
            >
              {"> ¿tienes un problema que necesita solución?"}
            </div>
            <h3
              className="font-bold text-2xl mb-3 mx-auto md:mx-0 max-w-xl"
              style={{ fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif", color: t.text.primary }}
            >
              Construyamos algo juntos
            </h3>
            <p
              className="text-sm sm:text-base mb-7 max-w-md mx-auto md:mx-0 leading-relaxed"
              style={{ fontFamily: "var(--font-lato), 'Lato', sans-serif", color: t.text.secondary }}
            >
              Si tienes un proceso repetitivo, una idea de app o quieres implementar IA en tu
              operación — hablemos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center md:justify-start">
              <CTACalendar variant="primary" dark={dark} accentColor={t.accent} accentSolidColor={t.accentSolid} />
              <CTAWhatsApp variant="secondary" context="builder" dark={dark} accentColor={t.accent} />
            </div>
          </div>
        </div>
      </section>
    </ThemedPageShell>
  );
}
