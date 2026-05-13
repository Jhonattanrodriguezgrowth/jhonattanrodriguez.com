// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────
// Modern color palette inspired by Nicepay design - each section keeps its brand color
export const THEMES = {
  index: {
    dark: { 
      bg: "#07080f", 
      accent: "#a78bfa", // Purple for home
      accentSolid: "#8b5cf6",
      secondary: "#93c5fd",
      text: { primary: "rgba(255,255,255,0.92)", secondary: "rgba(255,255,255,0.58)", muted: "rgba(255,255,255,0.32)" },
      border: "rgba(255,255,255,0.08)",
      card: "rgba(255,255,255,0.04)",
      cardHover: "rgba(255,255,255,0.07)",
    },
    light: { 
      bg: "#fafbfc", 
      accent: "#8b5cf6", // Purple for home
      accentSolid: "#7c3aed",
      secondary: "#3b82f6",
      text: { primary: "rgba(0,0,0,0.88)", secondary: "rgba(0,0,0,0.58)", muted: "rgba(0,0,0,0.38)" },
      border: "rgba(0,0,0,0.06)",
      card: "rgba(255,255,255,0.8)",
      cardHover: "rgba(255,255,255,0.95)",
    },
  },
  growth: {
    dark: { 
      bg: "#060d04", 
      accent: "#4ade80", // Green
      secondary: "#86efac",
      accentSolid: "#22c55e",
      text: { primary: "rgba(255,255,255,0.92)", secondary: "rgba(255,255,255,0.58)", muted: "rgba(255,255,255,0.32)" },
      border: "rgba(134,239,172,0.12)",
      card: "rgba(134,239,172,0.04)",
      cardHover: "rgba(134,239,172,0.08)",
    },
    light: { 
      bg: "#fafdfb", 
      accent: "#16a34a", // Green
      secondary: "#4ade80",
      accentSolid: "#15803d",
      text: { primary: "rgba(0,0,0,0.88)", secondary: "rgba(0,0,0,0.58)", muted: "rgba(0,0,0,0.38)" },
      border: "rgba(22,163,74,0.12)",
      card: "rgba(255,255,255,0.85)",
      cardHover: "rgba(255,255,255,1)",
    },
  },
  filmmaker: {
    dark: { 
      bg: "#0f0704", 
      accent: "#fb923c", // Orange
      secondary: "#fdba74",
      accentSolid: "#f97316",
      text: { primary: "rgba(255,255,255,0.92)", secondary: "rgba(255,255,255,0.58)", muted: "rgba(255,255,255,0.32)" },
      border: "rgba(251,146,60,0.12)",
      card: "rgba(251,146,60,0.04)",
      cardHover: "rgba(251,146,60,0.08)",
    },
    light: { 
      bg: "#fffcfa", 
      accent: "#ea580c", // Orange
      secondary: "#fb923c",
      accentSolid: "#c2410c",
      text: { primary: "rgba(0,0,0,0.88)", secondary: "rgba(0,0,0,0.58)", muted: "rgba(0,0,0,0.38)" },
      border: "rgba(234,88,12,0.10)",
      card: "rgba(255,255,255,0.85)",
      cardHover: "rgba(255,255,255,1)",
    },
  },
  builder: {
    dark: { 
      bg: "#04080f", 
      accent: "#3b82f6", // Blue
      secondary: "#93c5fd",
      teal: "#34d399",
      accentSolid: "#2563eb",
      text: { primary: "rgba(255,255,255,0.92)", secondary: "rgba(255,255,255,0.58)", muted: "rgba(255,255,255,0.32)" },
      border: "rgba(59,130,246,0.12)",
      card: "rgba(59,130,246,0.04)",
      cardHover: "rgba(59,130,246,0.08)",
    },
    light: { 
      bg: "#fafbff", 
      accent: "#2563eb", // Blue
      secondary: "#60a5fa",
      teal: "#059669",
      accentSolid: "#1d4ed8",
      text: { primary: "rgba(0,0,0,0.88)", secondary: "rgba(0,0,0,0.58)", muted: "rgba(0,0,0,0.38)" },
      border: "rgba(37,99,235,0.10)",
      card: "rgba(255,255,255,0.85)",
      cardHover: "rgba(255,255,255,1)",
    },
  },
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
export const TIMELINE = [
  { year: "2015", color: "#a78bfa", title: "Ingenieria de Control — U. Nacional", desc: "El origen. La curiosidad por los sistemas y la logica que definen todo lo que vino despues." },
  { year: "2017", color: "#a78bfa", title: "Paso por el Politecnico", desc: "El quiebre que redirige el camino hacia la accion y el emprendimiento real." },
  { year: "2018", color: "#86efac", title: "Entrenador Personalizado", desc: "Primer negocio real. Sin sistemas ni metodologia, el talento solo no alcanza." },
  { year: "2019", color: "#fdba74", title: "Integrow — ExpoFitness 2019", desc: "El momento fundacional. La marca que nace de la necesidad de crecer con sistemas, no con intuicion." },
  { year: "2020+", color: "#93c5fd", title: "Growth - Filmmaker - IA Builder", desc: "Tres disciplinas que conviven y se potencian — el mismo sistema visto desde angulos distintos." },
];

// ─── FILMMAKER DATA (Real) ────────────────────────────────────────────────────
export const FILM_TARGET_AUDIENCE = [
  {
    title: "Emprendedores de alto ticket",
    desc: "Buscan diferenciarse de la competencia en calidad de contenido y posicionamiento en redes sociales, y consideran que necesitan un equipo pero no quieren asumir toda la inversión.",
  },
  {
    title: "Startups y PyMEs con pauta en Meta",
    desc: "Ejecutan o planean ejecutar campañas publicitarias en Meta Ads y requieren contenido de pauta para mantener actualizada a la audiencia.",
  },
  {
    title: "Departamentos de universidades",
    desc: "Buscan publicitar sus cursos y actividades en redes sociales de forma orgánica o de pago.",
  },
];

export const FILM_PLANS = [
  {
    id: "sprint",
    name: "Plan Sprint",
    tagline: "Un día. Una locación. Ocho piezas listas para publicar.",
    price: "$1.200.000 COP",
    priceUSD: "$400 USD",
    featured: true,
    production: "1 día de producción (6–8 horas)",
    includes: [
      "Sesión intensiva de grabación en locación acordada",
      "Dirección creativa y producción para redes sociales",
      "Captura de material para 8 reels estratégicos",
      "Multiples angulos, tomas y recursos visuales",
      "Dirección de talento (fundador, equipo o embajadores)",
    ],
    postproduction: [
      "Edición profesional de 8 reels en formato vertical",
      "Color grading y diseño sonoro",
      "Motion graphics, subtítulos y elementos gráficos",
      "Optimización para Instagram Reels, TikTok, YouTube Shorts",
      "Entrega en carpeta de Drive propia de la marca",
    ],
    framework: [
      { type: "Valor", count: 3, goal: "Posicionar expertise y atraer audiencia" },
      { type: "Ventas", count: 3, goal: "Convertir y generar leads calificados" },
      { type: "Blockbuster", count: 2, goal: "Destacar en calidad frente a la competencia" },
    ],
    savings: "Más del 50 % comparado con producción tradicional",
    costPerPiece: "$150.000 COP vs. $300.000–$500.000 en producción tradicional",
    addon: "Sesión fotográfica profesional: $300.000 COP / $75 USD",
    payment: [
      { stage: "Al confirmar", amount: "$400.000 COP ($100 USD)", desc: "Asegura tu cupo; iniciamos pre-producción" },
      { stage: "Contra entrega", amount: "$800.000 COP ($300 USD)", desc: "Pagas al recibir tus 8 reels listos" },
    ],
  },
  {
    id: "mensual",
    name: "Plan Mensual",
    tagline: "Tres sesiones. Tres locaciones. Presencia activa todo el mes.",
    price: "$2.520.000 COP",
    priceUSD: "$630 USD",
    featured: false,
    production: "3 días de producción (3 horas cada sesión)",
    includes: [
      "3 días de producción al mes en locaciones distintas",
      "Cada día entrega: 1 Valor + 1 Ventas + 1 Blockbuster",
      "1 sesión fotográfica profesional por día",
      "Setup propio y edición independiente por sesión",
      "Entrega progresiva semana a semana",
    ],
    postproduction: [
      "Edición profesional de 9 reels totales",
      "Color grading y diseño sonoro por sesión",
      "Motion graphics, subtítulos y elementos gráficos",
      "Optimización para todas las plataformas",
      "Entrega en carpeta de Drive propia de la marca",
    ],
    deliverables: [
      { type: "Piezas de Valor", count: 3 },
      { type: "Piezas de Ventas", count: 3 },
      { type: "Piezas Blockbuster", count: 3 },
      { type: "Sesiones fotográficas", count: 3 },
    ],
    costPerPiece: "$280.000 COP por pieza de video",
    payment: [
      { stage: "Al confirmar", amount: "$840.000 COP ($210 USD)", desc: "Asegura tus 3 fechas de producción" },
      { stage: "Contra entrega", amount: "$1.680.000 COP ($420 USD)", desc: "Pagas al recibir todo el contenido del mes" },
    ],
  },
  {
    id: "legacy",
    name: "Plan Legacy",
    tagline: "Algunos momentos no se repiten. Este plan existe para que tampoco se olviden.",
    price: "Cotización personalizada",
    priceUSD: "",
    featured: false,
    isCustom: true,
    description: "Matrimonios, lanzamientos corporativos icónicos, eventos que marcan un antes y un después. Dirección narrativa en tiempo real con el ojo puesto en lo que vale la pena preservar para siempre.",
    forWho: [
      "Matrimonios que quieren mas que un video de recuerdo",
      "Eventos corporativos iconicos (GoFest, AI Summit, Startco, etc.)",
    ],
    deliverables: [
      { type: "Highlight para redes", desc: "Pieza corta en formato vertical, menos de 60 segundos" },
      { type: "Reportaje completo", desc: "Video documental con entrevistas, momentos clave y edición cinematográfica" },
    ],
  },
];

export const FILM_PROCESS = [
  {
    step: "01",
    title: "Pre-producción",
    items: [
      "Briefing estratégico y definición de objetivos",
      "Desarrollo de temas y storyboards",
      "Planificación de locaciones y recursos",
      "Coordinación de talento y logística",
    ],
  },
  {
    step: "02",
    title: "Producción",
    items: [
      "Setup tecnico y pruebas",
      "Grabación secuencial de todas las piezas",
      "Supervision de calidad en tiempo real",
      "Captura de material adicional y B-roll",
    ],
  },
  {
    step: "03",
    title: "Post-producción",
    items: [
      "Seleccion y organizacion del material",
      "Edición, corrección de color y diseño sonoro",
      "Revisión interna de calidad",
      "Entrega de piezas finales",
    ],
  },
  {
    step: "04",
    title: "Entrega",
    items: [
      "Archivos optimizados en Drive",
      "Sugerencias de copy y hashtags",
      "Calendario de publicación recomendado",
      "Guía de mejores prácticas",
    ],
  },
];

export const FILM_WHY_WORKS = [
  {
    title: "Un realizador que opera como equipo",
    desc: "No hay tres personas coordinando lo que uno puede ejecutar con sistema. Menos fricciones, menos costos, misma calidad.",
  },
  {
    title: "Cada pieza tiene un trabajo que hacer",
    desc: "Antes de encender la cámara ya sabemos qué tiene que lograr cada video: atraer, nutrir o convertir. Estrategia aplicada al set.",
  },
  {
    title: "El tiempo de tu marca vale",
    desc: "Concentrar la producción en sesiones intensivas no es un truco de eficiencia — es respeto por tu tiempo y tu presupuesto.",
  },
  {
    title: "El video ya gano",
    desc: "El 80 % del consumo de contenido en redes sociales es video. No es una tendencia — es el estándar. El formato vertical es donde se gana.",
  },
];

export const FILM_RESULTS = [
  { metric: "Autoridad", desc: "Posicionamiento como referente en tu nicho" },
  { metric: "Conversion", desc: "Pipeline constante de leads calificados" },
  { metric: "Eficiencia", desc: "Ahorro de tiempo con producción ágil" },
];

// ─── BUILDER DATA ─────────────────────────────────────────────────────────────
export const BUILDER_STACK = ["Claude", "Cursor", "v0", "Supabase", "n8n", "Lovable"];
export const BUILDER_FILTERS = ["Todos", "Automatización", "App", "Agente IA"];
export const BUILDER_PROJECTS = [
  { title: "Proyecto 1", category: "Automatización", stack: ["Claude", "n8n"], desc: "Descripción próximamente.", soon: true },
  { title: "Proyecto 2", category: "App", stack: ["v0", "Supabase"], desc: "Descripción próximamente.", soon: true },
  { title: "Proyecto 3", category: "Agente IA", stack: ["Claude", "Cursor"], desc: "Descripción próximamente.", soon: true },
];
