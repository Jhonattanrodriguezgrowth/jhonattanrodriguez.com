"use client";

import { useTheme } from "@teispace/next-themes";
import { useEffect, useState } from "react";
import { GlowButton, ArrowRightIcon } from "@/components/shared/glow-button";
import { CTASection } from "@/components/cta-buttons";
import { THEMES } from "@/lib/design-tokens";

// Timeline — orden cronológico (year, title, desc = párrafo 1, expanded = párrafo 2)
const HISTORIA_TIMELINE = [
  {
    year: "2013",
    color: "#a78bfa",
    title: "Ingeniería de Control — Universidad Nacional",
    desc: "Mi paso por la ingeniería de control en la UNAL me dejó algo que no estaba en el pensum: el pensamiento sistémico. Aprender a ver cómo las cosas se conectan entre sí, cómo un sistema responde, falla y se regula. Eso no se olvida.",
    expanded:
      "Plantó en mí la semilla de la automatización. No lo sabía en ese momento, pero estaba aprendiendo el lenguaje con el que más adelante iba a construir todo lo demás.",
  },
  {
    year: "2015 – 2018",
    color: "#93c5fd",
    title: "Ciencias del Deporte — Politécnico JIC",
    desc: "Mis bases en ciencias del deporte, nutrición y fisiología me enseñaron cómo funciona y cómo falla nuestro metabolismo. El cuerpo humano es el sistema más complejo y maravilloso que existe, y estudiarlo me dio una perspectiva que ningún lenguaje de programación puede reemplazar.",
    expanded:
      "Siete semestres de fisiología, kinesiología, bioquímica y anatomía aplicados en la práctica. Entendí el cuerpo humano como un sistema perfecto que responde a los datos correctos. Esa fue la base clínica que hoy traduzco en arquitecturas de datos.",
  },
  {
    year: "2017 – 2019",
    color: "#86efac",
    title: "Personal Trainer, Action Fitness & primer MVP HealthTech",
    desc: "Dos años como Personal Trainer me revelaron una verdad fundamental: en la salud, el mayor reto no es la falta de teoría clínica. Es la psicología, la adherencia a los hábitos y la falta de trazabilidad diaria. La fuerza de voluntad es frágil. El cuerpo necesita ecosistemas de datos para no fallar.",
    expanded:
      "Ante la necesidad de escalar el seguimiento de mis pacientes, conceptualicé mi primera startup de salud y la presenté en Expofitness 2019. Un entrenador virtual semi-personalizado. Era mi primer MVP HealthTech y el inicio de una idea que no pude soltar.",
  },
  {
    year: "2019 – 2025",
    color: "#fdba74",
    title: "InteGrowHome — Growth Hacker, Filmmaker & Ecosistema Startup",
    desc: "InteGrowHome fue mi campo de ingreso y entrenamiento en el ecosistema startup. Durante más de 5 años aprendí en la práctica el valor de la perseverancia. Lideré y co-creé con 3 equipos de ingeniería diferentes la iteración constante de MVPs. Ingresé en paralelo en dos ecosistemas: el inmobiliario y el de startups tecnológicas. Eso me dio una perspectiva única que hoy es el núcleo de mi trabajo como AI Builder.",
    expanded:
      "Fue también la etapa donde descubrí el lenguaje visual como herramienta de growth. El Filmmaker no nació en un set: nació de la necesidad de comunicar con precisión lo que los datos solos no podían decir. Growth, producto y narrativa terminaron siendo, para mí, tres caras de la misma moneda.",
  },
  {
    year: "2025 – 2026",
    color: "#93c5fd",
    title: "AI Builder — Soberanía en la creación de productos",
    desc: "Mi trayectoria no es la de un desarrollador tradicional que solo observa una oportunidad de mercado. Con Cursor, Claude Code, Lovable, Supabase y n8n aprendí que un operador único con las herramientas correctas puede orquestar todas las piezas del rompecabezas: producto, growth y visión clínica en un solo rol.",
    expanded:
      "Aquí es donde conecté los puntos de mi pasado: traduje mi conocimiento fisiológico en arquitecturas de bases de datos, y mi experiencia en growth en un modelo escalable. No solo creando software. Orquestando ecosistemas.",
  },
  {
    year: "2026",
    color: "#a78bfa",
    title: "Murphyia — El sistema que mi abuela necesitaba",
    desc: "Tras observar el problema de trazabilidad que enfrentan los pacientes con enfermedades crónicas, incluyendo a mi propia abuela, decidí construir la solución. Un diagnóstico médico no debería ser una sentencia de por vida por falta de datos en la toma de decisiones.",
    expanded:
      "Murphyia.com es el ecosistema donde pacientes, cuidadores y médicos recuperan el control y el seguimiento de la Diabetes Tipo 2. No llegué aquí por accidente. Cada paso construyó el sistema que hoy uso para ayudar a otros.",
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
      {/* Fondo plexus + scrims en toda la página (hero, timeline, CTA) */}
      <div
        className="absolute inset-0 z-0 min-h-full overflow-x-hidden pointer-events-none"
        aria-hidden
      >
        {dark ? (
          <>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/images/hero-mi-historia-dark.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center 38%",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(7,8,15,0.5) 0%, rgba(7,8,15,0.68) 42%, rgba(7,8,15,0.9) 100%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 90% 55% at 14% 18%, rgba(168,85,247,0.18), transparent 50%), radial-gradient(ellipse 75% 48% at 90% 12%, rgba(34,211,238,0.1), transparent 48%)",
              }}
            />
          </>
        ) : (
          <>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/images/hero-mi-historia-light.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.52) 0%, rgba(248,250,252,0.78) 48%, rgba(244,246,251,0.95) 100%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 88% 52% at 20% 24%, rgba(99,102,241,0.07), transparent 52%), radial-gradient(ellipse 70% 46% at 84% 22%, rgba(14,165,233,0.06), transparent 48%)",
              }}
            />
          </>
        )}
      </div>

      <section className="relative z-10 min-h-[72vh] flex flex-col justify-center overflow-x-hidden pt-28 pb-20 sm:pb-24">
        <div className="max-w-3xl mx-auto px-6 w-full">
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
            className="inline-block text-xs tracking-[0.22em] uppercase font-semibold mb-6 px-4 py-2 rounded-full"
            style={{
              fontFamily: "var(--font-lato), sans-serif",
              color: t.accent,
              background: dark ? `${t.accent}18` : `${t.accent}12`,
            }}
          >
            Mi historia
          </span>

          <h1
            className="font-bold mb-5 text-balance"
            style={{
              fontFamily: "var(--font-quicksand), sans-serif",
              fontSize: "clamp(32px, 6vw, 52px)",
              lineHeight: 1.15,
              color: t.text.primary,
              letterSpacing: "-0.02em",
            }}
          >
            Encontrar eso que{" "}
            <span style={{ color: t.accent }}>amamos.</span>
          </h1>

          <blockquote
            cite="https://news.stanford.edu/news/2005/june15/jobs-061505.html"
            className="max-w-2xl mb-8 pl-4 sm:pl-5 border-l-[3px] rounded-sm text-pretty"
            style={{
              borderColor: dark ? `${t.accent}4d` : `${t.accent}40`,
            }}
          >
            <p
              className="text-[17px] sm:text-lg font-normal m-0"
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                color: t.text.secondary,
                lineHeight: 1.55,
              }}
            >
              «No se pueden conectar los puntos mirando hacia el pasado, por lo que tienen que confiar en que
              los puntos, de alguna forma, se conectarán en el futuro.»
            </p>
            <footer
              className="mt-3 text-[15px] leading-snug"
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                color: t.text.muted,
                fontWeight: 500,
              }}
            >
              — Steve Jobs
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="relative z-10 pb-24 pt-4">
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
                  key={`${item.year}-${item.title}`}
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
                        maxHeight: expandedIndex === i ? "1200px" : "0px",
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

      <section className="relative z-10" style={{ borderTop: `1px solid ${t.border}` }}>
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
