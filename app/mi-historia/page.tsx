"use client";

import { useTheme } from "@teispace/next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CTASection } from "@/components/cta-buttons";
import { THEMES } from "@/lib/design-tokens";

type HistoriaTimelineItem = {
  year: string;
  color: string;
  title: string;
  desc: string;
  expanded: string;
  /** Miniatura 16:9 recomendada 1280×720; archivos en `public/mi-historia/`. */
  expandedMedia?: { src: string; alt: string; fit?: "cover" | "contain" };
};

// Timeline — orden cronológico (year, title, desc = párrafo 1, expanded = párrafo 2)
const HISTORIA_TIMELINE: HistoriaTimelineItem[] = [
  {
    year: "2013",
    color: "#a78bfa",
    title: "Ingeniería de Control & Automatizaciones | Universidad Nacional",
    desc: "El paso por la carrera de ingeniería de control en la UNAL de Medellín aunque algo corto me dejó integrada la semilla de la investigación y desarrollo de productos.",
    expanded:
      "Aunque se podría decir que es un poco tarde para retomar este proceso, actualmente, en el primer semestre de 2026, me encuentro en gestión de reingreso para terminar lo que inicié.",
    expandedMedia: {
      src: "/mi-historia/unal-ingenieria-control.png",
      alt: "Logo oficial de la Universidad Nacional de Colombia",
      fit: "contain",
    },
  },
  {
    year: "2015 – 2018",
    color: "#93c5fd",
    title: "Profesional en Deportes | Politécnico JIC",
    desc: "A nivel deportivo, el Politécnico JIC es top 3 en Colombia, razón por la cual escogí esta institución para buscar el sueño de convertirme en entrenador de fútbol. En esta época de mi vida, era mi mayor obsesión.",
    expanded:
      "En los siete semestres, la carga académica en materias como fisiología, kinesiología, bioquímica, biología y anatomía me permitió entender el cuerpo humano como un sistema perfecto e integrado, donde cada acción o inacción genera un resultado.",
    expandedMedia: {
      src: "/mi-historia/jic-profesional-deportes.png",
      alt: "Politécnico Colombiano Jaime Isaza Cadavid: escudo institucional y escena en gimnasio con compañeros de formación en deportes",
    },
  },
  {
    year: "2017 – 2019",
    color: "#86efac",
    title: "Personal Trainer & primer MVP HealthTech con InteGrow",
    desc: "Este camino inició al ingresar en paralelo a un diplomado como Personal Trainer con Group Fit y culminó con el lanzamiento de InteGrow en Expofitness 2019. Contábamos con marketing, pero aún no con un producto testeable de la idea.",
    expanded:
      "El Action Fitness fue el lugar que me permitió, a los 23 años, ser entrenador personalizado y vivir una de las etapas con mayor propósito en mi vida. Conectar con los usuarios y mejorar su calidad de vida era apasionante. Buscando innovar y tener más alcance, al observar la poca guía con la que llegan los usuarios al gimnasio que no tienen la capacidad de pagar un entrenador personalizado, surge la idea de InteGrow: el primer intento de app que tenía el objetivo de ser el entrenador personalizado y nutricionista de los usuarios comunes en el gimnasio. Con el apoyo del profesor del diplomado y organizador del congreso internacional de Expofitness en 2019, logramos tener stand de lanzamiento, un momento tan dulce como amargo en mi historia de vida.",
    expandedMedia: {
      src: "/mi-historia/personal-trainer-integrow-collage.png",
      alt: "Collage de la etapa como entrenador personalizado: Group Fit, material promocional, gimnasio Action Fitness y equipo en evento InteGrow",
      fit: "contain",
    },
  },
  {
    year: "2019 – 2025",
    color: "#fdba74",
    title: "InteGrowHome | Ecosistema Startup, Growth Hacker & Filmmaker",
    desc: "InteGrowHome fue mi campo de ingreso y entrenamiento en el ecosistema startup y empresarial. Durante más de 5 años, tanto el sector tech como el inmobiliario intentaron sacarme en muchas ocasiones: equipos que se desbarataban a raíz de mi inexperiencia como CEO y líder, tiempos complejos en los cierres y problemas de flujo de caja. Todo esto hace parte de lo que nadie te habla sobre el mundo real de emprender en el ecosistema colombiano, pero que forma a un ser humano capaz de resistir cualquier adversidad y continuar adelante",
    expanded:
      "Desde los inicios, e inspirado por la película Steve Jobs (2013), busqué que InteGrowHome fuera una empresa de base tecnológica (PropTech), trabajando con 3 equipos diferentes de desarrolladores en Colombia y Ecuador durante ese periodo de tiempo. Además, formé en paralelo mi perfil como Growth Hacker y Filmmaker, al observar la importancia de estos roles en el mundo moderno de las empresas de base tecnológica.",
    expandedMedia: {
      src: "/mi-historia/integrowhome-collage.png",
      alt: "InteGrowHome: app PWA y web, logo, alianzas (iNNpulsa, Apps.co, Ruta N, Alcaldía de Medellín, CCB y otras), equipo y diagrama de arquitectura del ecosistema PropTech",
      fit: "contain",
    },
  },
  {
    year: "2025 – 2026",
    color: "#93c5fd",
    title: "Developer AI | Soberanía en la creación de productos",
    desc: "No es la trayectoria de un desarrollador tradicional que se centra exclusivamente en lo técnico. Creo que los productos deben representar el lenguaje y el propósito de las marcas, además de ser fáciles de usar e implementar. Con Cursor, Claude Code, Lovable/v0, Supabase y Vercel comprendí que un operador único, con las herramientas correctas, puede orquestar todas las piezas del rompecabezas en tiempo récord, haciendo el software más accesible y escalable.",
    expanded:
      "Después de trabajar con varios equipos de desarrollo y observar lo complejo que era sacar un producto con los sistemas tradicionales, principalmente por el tiempo y los salarios de los ingenieros o programadores, al ver la integración de la IA en el código de programación con herramientas como Lovable y Cursor en 2025 entendí que era mi oportunidad de implementar todo lo aprendido empíricamente con los equipos de desarrollo de InteGrowHome y alcanzar lo que denomino como soberanía en la creación de productos tecnológicos. Al fin y al cabo, con todos los equipos mi rol era crear la arquitectura de la solución y, después de hacerlo durante más de 5 años, todo tomó sentido.",
    expandedMedia: {
      src: "/mi-historia/ai-builder-lab10.png",
      alt: "LAB 10, comunidad de AI builders en Latinoamérica: logos de Vercel, Supabase, Lovable, GitHub, Cursor y Claude; foto de encuentro comunitario y branding LAB 10",
      fit: "contain",
    },
  },
  {
    year: "2026",
    color: "#a78bfa",
    title: "Murphyia.com | Conectar los puntos",
    desc: "Tras observar de primera mano el problema de trazabilidad que enfrentan los pacientes con enfermedades crónicas a través de mi abuela, decidí construir una solución para ayudarle con el seguimiento de su diabetes tipo 2. Con esta idea me presenté a un hackathon y, junto a un equipo conformado en diciembre de 2025, logramos ganarlo, dando inicio en febrero de 2026 a Murphyia.com como empresa de base tecnológica, con la que aspiro a convertirnos en la mano derecha del sector salud en Colombia y Latinoamérica.",
    expanded:
      "Murphyia.com es el ecosistema donde pacientes, cuidadores y médicos recuperan el control y el seguimiento de la diabetes tipo 2, la hipertensión y las enfermedades osteomusculares relacionadas con la obesidad, el sedentarismo y el estrés. No llegué aquí por accidente. Cada paso construyó el conocimiento, la experiencia y el sistema que hoy utilizo para ayudar a otros y aportar mi grano de arena para que el mundo sea un lugar mejor.",
    expandedMedia: {
      src: "/mi-historia/murphyia-collage.png",
      alt: "Murphyia.com: equipo con premio del hackathon 24H, participación en StartCo y stand de salud digital Murphy con murphyia.com",
      fit: "contain",
    },
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
        <div className="max-w-3xl mx-auto px-6 w-full text-center flex flex-col items-center">
          <span
            className="inline-block text-[11px] sm:text-xs tracking-[0.14em] sm:tracking-[0.22em] uppercase font-semibold mb-6 px-4 py-2 rounded-full"
            style={{
              fontFamily: "var(--font-lato), 'Lato', sans-serif",
              color: t.accent,
              background: dark ? `${t.accent}18` : `${t.accent}12`,
            }}
          >
            CV | Storytelling
          </span>

          <h1
            className="font-bold leading-tight mb-5 text-center text-balance max-w-4xl mx-auto"
            style={{
              fontFamily: "var(--font-quicksand), 'Quicksand', sans-serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              color: t.text.primary,
            }}
          >
            <span className="md:hidden">
              <span className="block">En 2026 me encuentro</span>
              <span className="block">conectando los puntos</span>
              <span className="block" style={{ color: t.accent }}>
                mirando hacia el pasado.
              </span>
            </span>
            <span className="hidden md:block">
              <span className="block">En 2026 me encuentro conectando los puntos</span>
              <span className="block" style={{ color: t.accent }}>
                mirando hacia el pasado.
              </span>
            </span>
          </h1>

          <blockquote
            cite="https://news.stanford.edu/news/2005/june15/jobs-061505.html"
            className="max-w-2xl mx-auto mb-8 text-center text-pretty"
          >
            <p
              className="text-base md:text-lg font-normal m-0"
              style={{
                fontFamily: "var(--font-lato), 'Lato', sans-serif",
                color: t.text.secondary,
                lineHeight: 1.7,
              }}
            >
              «No puedes conectar los puntos mirando hacia el futuro; solo puedes conectarlos mirando hacia el
              pasado. Así que tienes que confiar en que los puntos, de algún modo, se conectarán en tu futuro.»
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
              {HISTORIA_TIMELINE.map((item, i) => {
                const isOpen = expandedIndex === i;
                const titleId = `mi-historia-timeline-title-${i}`;
                const panelId = `mi-historia-timeline-panel-${i}`;
                const mediaSrc = item.expandedMedia?.src?.trim();
                const mediaFit = item.expandedMedia?.fit ?? "cover";

                return (
                  <div
                    key={`${item.year}-${item.title}`}
                    className="flex gap-4 sm:gap-6 relative group w-full"
                  >
                    {/* Dot */}
                    <div className="shrink-0 z-10 mt-1 hidden sm:block">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: dark ? `${item.color}20` : `${item.color}15`,
                          border: `2px solid ${item.color}`,
                          boxShadow: isOpen ? `0 0 24px ${item.color}40` : `0 0 16px ${item.color}20`,
                        }}
                      >
                        <div
                          className="w-3 h-3 rounded-full transition-transform duration-300"
                          style={{
                            background: item.color,
                            transform: isOpen ? "scale(1.3)" : "scale(1)",
                          }}
                        />
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      className="flex-1 p-6 rounded-2xl transition-all duration-300"
                      style={{
                        background: isOpen ? t.cardHover : t.card,
                        border: `1px solid ${isOpen ? item.color + "40" : t.border}`,
                        boxShadow: isOpen ? `0 8px 32px ${item.color}15` : "none",
                      }}
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setExpandedIndex(isOpen ? null : i)}
                        className="w-full text-left cursor-pointer rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:ring-[color:var(--timeline-focus)]"
                        style={{ ["--timeline-focus" as string]: item.color }}
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
                            className="w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0"
                            style={{
                              background: t.card,
                              border: `1px solid ${t.border}`,
                              transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                            }}
                            aria-hidden
                          >
                            <span style={{ color: t.text.muted, fontSize: 14 }}>+</span>
                          </div>
                        </div>

                        <h3
                          id={titleId}
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
                      </button>

                      {/* Expanded content: fuera del botón (enlaces / media sin HTML inválido) */}
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={titleId}
                        aria-hidden={!isOpen}
                        className="overflow-hidden transition-all duration-500"
                        style={{
                          maxHeight: isOpen ? "1600px" : "0px",
                          opacity: isOpen ? 1 : 0,
                          marginTop: isOpen ? "16px" : "0px",
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

                          {/* Contenedor 16:9 fijo; con `expandedMedia.src` se muestra la imagen, si no hay src el placeholder con borde punteado */}
                          <div className="relative mx-auto mt-4 w-full max-w-2xl">
                            <div
                              className="relative aspect-video w-full overflow-hidden rounded-xl"
                              style={{
                                border: `1px solid ${t.border}`,
                                background:
                                  mediaSrc && mediaFit === "contain"
                                    ? "#ffffff"
                                    : isOpen
                                      ? t.cardHover
                                      : t.card,
                              }}
                            >
                              {mediaSrc ? (
                                <Image
                                  src={mediaSrc}
                                  alt={item.expandedMedia?.alt ?? ""}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 672px"
                                  className={
                                    mediaFit === "contain"
                                      ? "object-contain object-center"
                                      : "object-cover object-center"
                                  }
                                />
                              ) : (
                                <div
                                  className="absolute inset-0 flex items-center justify-center p-2"
                                  aria-hidden
                                >
                                  <div
                                    className="h-full w-full rounded-lg border border-dashed"
                                    style={{ borderColor: t.text.muted + "55" }}
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
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
            title="Quieres saber más?"
            description="Agenda una llamada para hablar de tu proyecto o escribeme directamente por WhatsApp."
          />
        </div>
      </section>
    </div>
  );
}
