"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ModernBg } from "@/components/shared/modern-bg";
import { GlowButton, ArrowRightIcon } from "@/components/shared/glow-button";
import { CTASection } from "@/components/cta-buttons";
import { THEMES } from "@/lib/design-tokens";

// Timeline data expandido para la pagina completa
const HISTORIA_TIMELINE = [
  {
    year: "2015",
    color: "#a78bfa",
    title: "Ingenieria de Control — Universidad Nacional",
    desc: "El origen de todo. Entrar a la Nacional fue el primer filtro real que pase en mi vida. No era solo estudiar — era aprender a pensar en sistemas, en logica, en como las cosas se conectan entre si.",
    expanded: "Ahi entendi que cualquier cosa que funciona tiene una estructura detras. No importa si es un circuito, un negocio o una marca personal. La ingenieria me dio la forma de ver el mundo que todavia uso hoy.",
  },
  {
    year: "2017",
    color: "#a78bfa",
    title: "El quiebre — Paso por el Politecnico",
    desc: "Deje la Nacional. No por incapacidad — por necesidad de moverme. La teoria sin accion me estaba matando. Necesitaba hacer, no solo entender.",
    expanded: "El Politecnico fue el puente. Menos prestigio academico, mas tiempo para construir cosas reales. Ahi empece a experimentar con negocios mientras terminaba de estudiar.",
  },
  {
    year: "2018",
    color: "#86efac",
    title: "Primer negocio — Entrenador Personalizado",
    desc: "Mi primer intento serio de monetizar algo propio. Certificaciones, clientes, horarios. Todo manual, todo desde cero, todo con el talento como unica herramienta.",
    expanded: "Funciono... hasta que no. Sin sistemas, sin metodologia, sin forma de escalar. El talento solo no alcanza para crecer. Esa leccion me costo tiempo y dinero, pero valio cada segundo.",
  },
  {
    year: "2019",
    color: "#fdba74",
    title: "Integrow — ExpoFitness 2019",
    desc: "El momento fundacional. Integrow nace como la marca que unifica todo lo que habia aprendido: el fitness, el emprendimiento, los sistemas y la comunicacion.",
    expanded: "ExpoFitness fue el bautizo. Primera exposicion masiva, primeras ventas a escala, primer contacto con lo que significa tener una marca que la gente reconoce. De ahi en adelante, todo cambio.",
  },
  {
    year: "2020",
    color: "#93c5fd",
    title: "Pandemia — El pivot forzado",
    desc: "Como a todos, el COVID me obligo a replantear todo. El fitness presencial murio de un dia para otro. Pero lo digital estaba esperando.",
    expanded: "Aprendi a grabar, a editar, a vender en redes. No por gusto — por supervivencia. Esa urgencia me convirtio en filmmaker sin darme cuenta.",
  },
  {
    year: "2021",
    color: "#fdba74",
    title: "Filmmaker — De necesidad a servicio",
    desc: "Lo que empezo como contenido para mi marca se convirtio en un servicio para otras marcas. Emprendedores que necesitaban lo mismo que yo habia construido para mi.",
    expanded: "Produccion agil, entregas rapidas, contenido estrategico. No era solo hacer videos bonitos — era hacer videos que vendieran. Esa diferencia me separo del resto.",
  },
  {
    year: "2022",
    color: "#86efac",
    title: "Growth Hacker — Sistematizando el crecimiento",
    desc: "MetaAds, embudos, automatizaciones. El contenido ya no era suficiente — habia que ponerle gasolina. Aprendi a escalar lo que ya funcionaba.",
    expanded: "Me certifique, experimente, queme presupuesto propio hasta entender que funcionaba. Ahora ayudo a otros a saltarse esa curva de aprendizaje.",
  },
  {
    year: "2023",
    color: "#93c5fd",
    title: "IA Builder — La nueva frontera",
    desc: "ChatGPT cambio todo. No solo como herramienta — como paradigma. Entendi rapido que esto no era una moda. Era el nuevo juego.",
    expanded: "Empece a construir automatizaciones, agentes, aplicaciones. No por hype — porque vi que podia multiplicar mi capacidad de ejecucion 10x. Ahora ayudo a otros a hacer lo mismo.",
  },
  {
    year: "2024+",
    color: "#a78bfa",
    title: "Tres disciplinas, un sistema",
    desc: "Growth, Filmmaker, IA Builder. Tres caras de la misma moneda. No son servicios separados — son capas de un mismo sistema de crecimiento.",
    expanded: "Cada proyecto que tomo puede usar una, dos o las tres. Depende de donde este el cliente y a donde quiera llegar. El sistema se adapta, no al reves.",
  },
];

export default function MiHistoriaPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen" style={{ background: THEMES.index.dark.bg }} />;
  }

  const dark = theme === "dark";
  const t = dark ? THEMES.index.dark : THEMES.index.light;

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: t.bg }}>
      <ModernBg accentColor={t.accent} secondaryColor={t.secondary} dark={dark} />

      {/* Hero */}
      <section className="relative pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <GlowButton
            href="/"
            variant="ghost"
            size="sm"
            accentColor={t.accent}
            secondaryColor={t.secondary}
            icon={<span className="rotate-180"><ArrowRightIcon /></span>}
            iconPosition="left"
            className="mb-8"
          >
            Volver al inicio
          </GlowButton>

          <span
            className="inline-block text-xs tracking-[0.22em] uppercase font-semibold mb-5 px-4 py-2 rounded-full"
            style={{
              fontFamily: "var(--font-lato), sans-serif",
              color: t.accent,
              background: dark ? `${t.accent}15` : `${t.accent}10`,
            }}
          >
            Mi historia
          </span>

          <h1
            className="font-bold mb-6"
            style={{
              fontFamily: "var(--font-quicksand), sans-serif",
              fontSize: "clamp(32px, 6vw, 52px)",
              color: t.text.primary,
              letterSpacing: "-0.02em",
            }}
          >
            De donde vengo y{" "}
            <span style={{ color: t.accent }}>hacia donde voy.</span>
          </h1>

          <p
            className="text-base sm:text-lg leading-relaxed mb-8"
            style={{
              fontFamily: "var(--font-lato), sans-serif",
              color: t.text.secondary,
              lineHeight: 1.7,
            }}
          >
            No llegue aqui por accidente. Cada paso — incluidos los errores — construyo el sistema 
            que hoy uso para ayudar a otros. Esta es la version larga de como Growth, Filmmaker 
            y IA Builder terminaron siendo tres caras de la misma moneda.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-[19px] top-8 bottom-8 w-px hidden sm:block"
              style={{
                background: dark
                  ? "linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0.03))"
                  : `linear-gradient(to bottom, ${t.accent}30, ${t.accent}05)`,
              }}
            />

            <div className="flex flex-col gap-6">
              {HISTORIA_TIMELINE.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                  className="flex gap-4 sm:gap-6 relative group text-left w-full"
                >
                  {/* Dot */}
                  <div className="shrink-0 z-10 mt-1 hidden sm:block">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: dark ? `${item.color}20` : `${item.color}15`,
                        border: `2px solid ${item.color}`,
                        boxShadow: expandedIndex === i ? `0 0 24px ${item.color}40` : `0 0 16px ${item.color}20`,
                      }}
                    >
                      <div
                        className="w-3 h-3 rounded-full transition-transform duration-300"
                        style={{ 
                          background: item.color,
                          transform: expandedIndex === i ? "scale(1.3)" : "scale(1)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 p-6 rounded-2xl transition-all duration-300"
                    style={{
                      background: expandedIndex === i ? t.cardHover : t.card,
                      border: `1px solid ${expandedIndex === i ? item.color + "40" : t.border}`,
                      boxShadow: expandedIndex === i ? `0 8px 32px ${item.color}15` : "none",
                    }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <span
                        className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                        style={{
                          fontFamily: "var(--font-lato), sans-serif",
                          color: item.color,
                          background: dark ? `${item.color}20` : `${item.color}12`,
                        }}
                      >
                        {item.year}
                      </span>
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300"
                        style={{
                          background: t.card,
                          border: `1px solid ${t.border}`,
                          transform: expandedIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                        }}
                      >
                        <span style={{ color: t.text.muted, fontSize: 14 }}>+</span>
                      </div>
                    </div>

                    <h3
                      className="font-semibold text-lg mb-3"
                      style={{
                        fontFamily: "var(--font-quicksand), sans-serif",
                        color: t.text.primary,
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: "var(--font-lato), sans-serif",
                        color: t.text.secondary,
                      }}
                    >
                      {item.desc}
                    </p>

                    {/* Expanded content */}
                    <div
                      className="overflow-hidden transition-all duration-500"
                      style={{
                        maxHeight: expandedIndex === i ? "200px" : "0px",
                        opacity: expandedIndex === i ? 1 : 0,
                        marginTop: expandedIndex === i ? "16px" : "0px",
                      }}
                    >
                      <div
                        className="pt-4"
                        style={{ borderTop: `1px solid ${t.border}` }}
                      >
                        <p
                          className="text-sm leading-relaxed"
                          style={{
                            fontFamily: "var(--font-lato), sans-serif",
                            color: t.text.secondary,
                          }}
                        >
                          {item.expanded}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: `1px solid ${t.border}` }}>
        <div className="max-w-3xl mx-auto px-6">
          <CTASection
            dark={dark}
            accentColor={t.accent}
            accentSolidColor={t.accentSolid}
            title="Quieres saber mas?"
            description="Agenda una llamada para hablar de tu proyecto o escribeme directamente por WhatsApp."
          />
        </div>
      </section>
    </div>
  );
}
