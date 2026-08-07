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
      display: "#86efac",
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
      display: "#15803d",
      accentSolid: "#15803d",
      text: { primary: "rgba(0,0,0,0.88)", secondary: "rgba(0,0,0,0.58)", muted: "rgba(0,0,0,0.38)" },
      border: "rgba(22,163,74,0.12)",
      card: "rgba(255,255,255,0.85)",
      cardHover: "rgba(255,255,255,1)",
    },
  },
  filmmaker: {
    dark: {
      bg: "#0a0704",
      accent: "#fb923c",
      secondary: "#fdba74",
      accentSolid: "#f97316",
      display: "#d4af6a",
      text: { primary: "rgba(255,255,255,0.92)", secondary: "rgba(255,255,255,0.58)", muted: "rgba(255,255,255,0.32)" },
      border: "rgba(251,146,60,0.12)",
      card: "rgba(251,146,60,0.04)",
      cardHover: "rgba(251,146,60,0.08)",
    },
    light: {
      bg: "#fffcfa",
      accent: "#ea580c",
      secondary: "#fb923c",
      accentSolid: "#c2410c",
      display: "#9a7b2e",
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
      display: "#93c5fd",
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
      display: "#1d4ed8",
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
  { year: "2015", color: "#a78bfa", title: "Ingenieria de Control, U. Nacional", desc: "El origen. La curiosidad por los sistemas y la logica que definen todo lo que vino despues." },
  { year: "2017", color: "#a78bfa", title: "Paso por el Politecnico", desc: "El quiebre que redirige el camino hacia la accion y el emprendimiento real." },
  { year: "2018", color: "#86efac", title: "Entrenador Personalizado", desc: "Primer negocio real. Sin sistemas ni metodologia, el talento solo no alcanza." },
  { year: "2019", color: "#fdba74", title: "Integrow · ExpoFitness 2019", desc: "El momento fundacional. La marca que nace de la necesidad de crecer con sistemas, no con intuicion." },
  { year: "2020+", color: "#93c5fd", title: "Growth - Filmmaker - Developer AI", desc: "Tres disciplinas que conviven y se potencian: el mismo sistema visto desde angulos distintos." },
];

// ─── FILMMAKER DATA (Real) ────────────────────────────────────────────────────
/** Opcional: ID de video YouTube para embed en sección Reel (ej. dQw4w9WgXcQ) */
/** https://youtu.be/VBgeWLdwaVw: reel destacado en /filmmaker */
export const FILM_FEATURED_VIDEO_ID = "VBgeWLdwaVw";

export const FILM_REEL = {
  kicker: "Crear contenido es un proceso",
  title: "No es solo grabar, es entender lo que se está haciendo.",
} as const;

export const FILM_SERVICE_PILLARS = [
  {
    title: "Producción en set",
    desc: "Sesiones intensivas con dirección creativa, múltiples ángulos y captura optimizada para redes.",
  },
  {
    title: "Postproducción",
    desc: "Edición, color, sonido, motion graphics y subtítulos listos para publicar.",
  },
  {
    title: "Estrategia de reels",
    desc: "Framework Valor, Ventas y Blockbuster: cada pieza cumple un objetivo antes de grabar.",
  },
  {
    title: "Entrega y publicación",
    desc: "Archivos en Drive de tu marca, copy sugerido y calendario de publicación recomendado.",
  },
];

export const FILM_PLANS_INTRO =
  "Producción con equipo ágil especializado en video corto para redes: Reels, TikTok y YouTube Shorts.";

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
    tagline: "Un día. Una locación. Ocho piezas listas para publicar con equipo ágil en set.",
    price: "$1.200.000 COP",
    featured: true,
    production: "1 día de producción (6–8 horas)",
    includes: [
      "Equipo ágil en locación: rodaje y dirección para piezas cortas en redes",
      "Sesión intensiva de grabación en locación acordada",
      "Captura de material para 8 reels estratégicos",
      "Múltiples ángulos, tomas y recursos visuales",
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
    addon: "Add-on opcional: sesión fotográfica, $300.000 COP",
    payment: [
      { stage: "Al confirmar", amount: "$600.000 COP", desc: "Asegura tu cupo; iniciamos pre-producción" },
      { stage: "Contra entrega", amount: "$600.000 COP", desc: "Pagas al recibir tus 8 reels listos" },
    ],
  },
  {
    id: "mensual",
    name: "Plan Mensual",
    tagline: "Tres sesiones. Tres locaciones. Presencia activa todo el mes.",
    price: "$2.520.000 COP",
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
      { stage: "Al confirmar", amount: "$840.000 COP", desc: "Asegura tus 3 fechas de producción" },
      { stage: "Contra entrega", amount: "$1.680.000 COP", desc: "Pagas al recibir todo el contenido del mes" },
    ],
  },
  {
    id: "legacy",
    name: "Plan Legacy",
    tagline: "Algunos momentos no se repiten. Este plan existe para que tampoco se olviden.",
    price: "Cotización personalizada",
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
    desc: "Concentrar la producción en sesiones intensivas no es un truco de eficiencia: es respeto por tu tiempo y tu presupuesto.",
  },
  {
    title: "El video ya gano",
    desc: "El 80 % del consumo de contenido en redes sociales es video. No es una tendencia: es el estándar. El formato vertical es donde se gana.",
  },
];

export const FILM_RESULTS = [
  { metric: "Autoridad", desc: "Posicionamiento como referente en tu nicho" },
  { metric: "Conversion", desc: "Pipeline constante de leads calificados" },
  { metric: "Eficiencia", desc: "Ahorro de tiempo con producción ágil" },
];

// ─── GROWTH STACK (hero) ──────────────────────────────────────────────────────
export const GROWTH_STACK = [
  "Notion",
  "Claude",
  "Meta Ads",
  "Obsidian",
  "Google Workspace",
  "Microsoft 365",
] as const;

// ─── FILM STACK (hero) ────────────────────────────────────────────────────────
export const FILM_STACK = [
  "CapCut",
  "OBS",
  "Stream Yard",
  "Higgsfield",
  "Canva",
  "Nano Banana",
] as const;

// ─── BUILDER DATA ─────────────────────────────────────────────────────────────
export const BUILDER_STACK = [
  "Claude Code",
  "Cursor",
  "Lovable/v0",
  "Supabase",
  "Vercel",
  "GitHub",
];
export type BuilderProject = {
  title: string;
  category: string;
  badge: string;
  status: "Activo" | "En construcción" | "En beta" | "Pausado";
  role: string;
  tagline: string;
  desc: string;
  problem: string;
  how: { label: string; desc: string }[];
  tech: { name: string; desc: string }[];
  stack: string[];
  result: string;
  expandedMedia?: { src: string; alt: string; width?: number; height?: number };
  ctaUrl?: string;
  ctaLabel?: string;
  closedNote?: string;
};

export const BUILDER_FILTERS = ["Todos", "Sistema IA", "Plataforma"];
export const BUILDER_PROJECTS: BuilderProject[] = [
  {
    title: "MurphyIA",
    category: "Sistema IA",
    badge: "Agente Clínico",
    status: "Activo",
    role: "Fundador & AI Developer",
    tagline: "Convierte WhatsApp en un sistema de monitoreo clínico continuo para pacientes con diabetes tipo 2.",
    desc: "MurphyIA nació de un problema familiar real: el seguimiento de la diabetes tipo 2 de mi abuela materna, donde los 90 días entre consultas eran territorio sin datos ni control. El agente captura datos clínicos diarios por WhatsApp (glucosa, insulina, sueño, estrés, tensión arterial) y los convierte en un historial estructurado que el médico consulta en tiempo real. El paciente nunca llena un formulario: solo escribe como le escribiría a un conocido. Es el primer producto de un ecosistema de salud digital en construcción, con la misma arquitectura replicada para otras enfermedades crónicas del sector.",
    problem: "Entre una consulta médica y la siguiente hay 90 días ciegos. El paciente anota sus glucosas en un cuaderno, olvida los episodios críticos y llega a la cita sin evidencia. El médico toma decisiones con información incompleta. Los tratamientos se ajustan tarde y las hospitalizaciones evitables se acumulan.",
    how: [
      { label: "Paciente", desc: "Registra sus datos por WhatsApp escribiendo en lenguaje natural. El agente Murphy interpreta el mensaje, infiere el contexto horario, hace la pregunta correcta si falta información y confirma el dato guardado. Un sistema de XP y racha mantiene la adherencia diaria." },
      { label: "Médico", desc: "Accede a un dashboard clínico con el historial longitudinal de cada paciente asignado. Solicita reportes médicos o briefings pre-consulta generados por IA con RAG sobre los registros reales. Puede marcar pacientes como críticos para activar monitoreo intensivo y módulos adicionales." },
      { label: "Cuidador", desc: "Accede al mismo dashboard del paciente con permisos de co-gestión. Monitorea los registros del día, recibe alertas activas y actúa como puente entre la familia y el equipo médico sin necesitar que el paciente reporte directamente." },
    ],
    tech: [
      { name: "Kapso + Meta WhatsApp Business API", desc: "Proxy que recibe el webhook entrante de Meta y entrega las respuestas salientes. Es el único canal de comunicación con el paciente: todo el pipeline se activa desde aquí." },
      { name: "GPT-4o-mini (interpretación)", desc: "Una sola llamada LLM por mensaje entrante. Convierte lenguaje natural en datos clínicos estructurados. El sistema degrada de forma transparente si el modelo no responde, sin interrumpir la conversación del paciente." },
      { name: "OpenAI + Gemini (RAG clínico)", desc: "Genera reportes médicos y briefings pre-consulta recuperando los registros clínicos del paciente como contexto. El modelo se selecciona según el tipo y profundidad del documento requerido." },
      { name: "Supabase Edge Functions (Deno)", desc: "Funciones serverless independientes que orquestan el pipeline de mensajes, la generación de reportes, las invitaciones y los webhooks. Cada función aislada, sin servidor compartido." },
      { name: "Pipeline V2: arquitectura modular", desc: "Orquestador central con 6 módulos clínicos intercambiables: glucosa, insulina, sueño, estrés, tensión arterial y mareos. Cada módulo encapsula su propia lógica de detección y respuesta sin exponer implementación al orquestador." },
      { name: "PipelineTracer", desc: "Sistema de observabilidad estructurada propio. Registra cada paso del pipeline con su latencia (parseo, interpretación, selección de módulo y respuesta) para auditoría y debugging en producción." },
      { name: "Supabase PostgreSQL + RLS", desc: "Base de datos clínica con Row Level Security. Registros de glucosa, insulina, sueño, estrés, tensión arterial y mareos aislados por paciente. Flujos multi-turno con control de idempotencia. Perfiles diferenciados por rol." },
      { name: "Supabase Auth", desc: "Autenticación con 3 roles: paciente, médico y coadmin. Rutas del frontend y funciones serverless validan el rol antes de ejecutar cualquier operación clínica." },
      { name: "React 18 + TanStack Query + Recharts", desc: "SPA clínica con dashboard diferenciado por rol. Recharts visualiza tendencias de glucosa e insulina. TanStack Query maneja el estado del servidor con caché granular. Shadcn/UI como sistema de componentes base." },
      { name: "XP System (gamificación clínica)", desc: "Motor propio de puntos y racha que calcula XP según glucosas en rango, completitud diaria y datos de bienestar. Sistema de niveles progresivos diseñado para mantener la adherencia a largo plazo." },
    ],
    stack: ["WhatsApp", "Kapso", "Supabase", "Deno", "OpenAI", "Gemini", "React", "Vercel"],
    result: "Pipeline V2 en producción activa desde abril 2026 con pacientes reales. 6 módulos clínicos desplegados con flujo multi-turno, encadenamiento automático y observabilidad completa por mensaje. Integraciones activas con Meta WhatsApp Business API vía Kapso y generación de reportes médicos por IA.",
    expandedMedia: {
      src: "/developer-ai/murphyia-hero.png",
      alt: "Dashboard clínico de MurphyIA con historial de glucosa e insulina",
      width: 1920,
      height: 1080,
    },
    ctaUrl: "https://murphyia.com",
    ctaLabel: "Ver producto",
  },
  {
    title: "Jhonattanrodriguez.com",
    category: "Plataforma",
    badge: "Plataforma",
    status: "Activo",
    role: "Arquitecto + Developer único",
    tagline: "Un solo dominio que agrupa identidad, trayectoria y tres verticales de servicio.",
    desc: "Construido por necesidad: operar como profesional multidisciplinario (Developer AI, Growth y Film) sin un hub central generaba fricción en cada conversación de venta. Cada ruta tiene su propio sistema de diseño, paleta de color y propuesta de valor, pero comparten la misma arquitectura base. Una sola URL que responde '¿quién eres y qué haces?' antes de que el prospecto lo pregunte.",
    problem: "La información de referencia de un profesional multidisciplinar estaba dispersa entre perfiles, PDFs y conversaciones. Sin un hub central, cada prospecto reconstruía el contexto desde cero antes de agendar.",
    how: [
      { label: "Prospecto", desc: "Llega al home, identifica su perfil (Developer AI / Growth / Film) y navega a la vertical correspondiente con su propia paleta, copy y CTA." },
      { label: "Cliente potencial", desc: "Explora el portafolio de proyectos expandible, entiende el proceso de construcción y agenda directamente por Calendly o WhatsApp desde la misma página." },
      { label: "Contacto frío / referido", desc: "Visita /mi-historia para leer la trayectoria cronológica con hitos reales antes de tomar una decisión de contacto." },
    ],
    tech: [
      { name: "Next.js 16 App Router", desc: "Framework base. Gestiona las 5 rutas del sitio, SSR, redirects de rutas antiguas y metadatos de SEO por página." },
      { name: "@teispace/next-themes", desc: "Sistema dark/light con detección del sistema operativo. Cada vertical aplica su paleta de color en tiempo real al cambiar el tema." },
      { name: "Design tokens propios", desc: "Sistema centralizado que define la paleta visual por ruta: index (púrpura), growth (verde), filmmaker (naranja), builder (azul). Cambiar el esquema de una vertical no afecta las demás." },
      { name: "Tailwind CSS 4 + clsx", desc: "Sistema de estilos utility-first combinado con clsx y tailwind-merge para composición condicional de clases sin conflictos en los componentes compartidos." },
      { name: "Radix UI / shadcn/ui", desc: "Componentes headless accesibles (accordion, dialog, navigation-menu, etc.). Base del sistema de UI sin estilos impuestos: la identidad visual la definen los tokens." },
      { name: "Next.js Google Fonts", desc: "Carga de Quicksand (títulos), Lato (cuerpo) y Engagement (decorativo) con cero layout shift via font-display: swap y variables CSS globales." },
      { name: "Vercel Analytics", desc: "Tracking de tráfico y engagement cargado únicamente en producción. Sin configuración extra: se activa automáticamente al hacer deploy en Vercel." },
      { name: "Calendly + WhatsApp API", desc: "CTAs centralizados en un único punto de configuración. Calendly para llamadas de reconocimiento; WhatsApp con mensajes preescritos por contexto (growth, filmmaker, builder)." },
    ],
    stack: ["Next.js", "React 19", "Tailwind CSS", "shadcn/ui", "Vercel", "TypeScript"],
    result: "Sitio live con 5 rutas activas (home, CV, Developer AI, Growth, Film), sistema de temas dark/light por vertical, portafolio expandible con 3 proyectos y analytics en producción.",
    expandedMedia: {
      src: "/developer-ai/jhonattanrodriguez-hero.png",
      alt: "Vista hero de jhonattanrodriguez.com en desktop",
      width: 1920,
      height: 1080,
    },
    ctaUrl: "https://jhonattanrodriguez.com",
    ctaLabel: "Explorar el sitio",
  },
  {
    title: "Insight Hub Campaña",
    category: "Sistema IA",
    badge: "Motor RAG",
    status: "Activo",
    role: "Arquitecto + Developer full-stack",
    tagline:
      "Ingreso y administración de informes en HTML que alimentan un sistema RAG, el cual genera insights mediante la Caja Mágica.",
    desc: "Plataforma de inteligencia para equipos de campaña electoral que centraliza informes de análisis político y los hace consultables mediante lenguaje natural. El sistema indexa automáticamente cada informe publicado y responde preguntas con contexto extraído de los documentos reales.",
    problem: "Los equipos de campaña producen decenas de informes semanales que nadie tiene tiempo de leer completos. La inteligencia queda atrapada en archivos, y tomar decisiones rápidas requiere buscar manualmente entre cientos de páginas.",
    how: [
      { label: "Super Admin", desc: "Gestiona usuarios, permisos y el estado de indexación del sistema. Puede forzar reindexaciones, monitorear errores del pipeline RAG y ejecutar backfills manuales sobre informes fallidos." },
      { label: "Informador", desc: "Redacta y publica informes de campaña desde el editor interno. Al publicar, el sistema indexa el contenido automáticamente al motor RAG sin ningún paso adicional." },
      { label: "Campaña", desc: "Consulta informes en lenguaje natural desde la Caja Mágica. Recibe respuestas tipo briefing estratégico con datos citados por código de informe, sin acceso a edición ni administración." },
    ],
    tech: [
      { name: "Claude Sonnet 4.6 (via Vercel AI Gateway)", desc: "Genera las respuestas finales en modo analista político: prosa directa, datos citados por fuente, sin inventar información fuera de los fragmentos recuperados." },
      { name: "OpenAI text-embedding-3-small (via Vercel AI Gateway)", desc: "Convierte cada chunk de informe y cada consulta del usuario en vectores de 1536 dimensiones para la búsqueda semántica." },
      { name: "Vercel AI Gateway", desc: "Proxy unificado para todos los modelos de IA. Permite cambiar de proveedor sin modificar el código del producto." },
      { name: "Supabase + pgvector", desc: "Almacena los chunks con sus embeddings y ejecuta la búsqueda vectorial por similitud coseno. RLS protege los datos por rol de usuario." },
      { name: "pg_net + pg_cron", desc: "pg_net dispara la indexación desde un trigger SQL al publicar un informe. pg_cron corre cada 5 minutos como safety net para reintentar fallos sin intervención manual." },
      { name: "Deno Edge Functions (Supabase)", desc: "Tres funciones serverless que orquestan la consulta RAG, la indexación unitaria de informes y la reindexación masiva del corpus cuando es necesario." },
      { name: "Búsqueda híbrida FTS + Vector", desc: "Fusiona full-text search (40%) con búsqueda vectorial semántica (60%) usando un algoritmo de ranking propio, lo que garantiza resultados incluso cuando la consulta no coincide lexicalmente." },
      { name: "React + Vite + Tailwind + shadcn/ui", desc: "Frontend SPA con rutas protegidas por rol. Incluye editor de informes enriquecido, dashboard de actividad, panel de administración y la interfaz de la Caja Mágica." },
      { name: "Lovable", desc: "Generación del frontend inicial: estructura de componentes, rutas, autenticación base y diseño del sistema de vistas." },
      { name: "Cursor", desc: "Edición, refactoring y toda la implementación del sistema RAG, auto-indexado y edge functions sobre la base generada por Lovable." },
      { name: "Vercel", desc: "Despliegue y hosting del frontend. CI/CD automático desde GitHub en cada push a main." },
      { name: "GoDaddy", desc: "Gestión del dominio personalizado conectado al despliegue de Vercel." },
    ],
    stack: ["Claude", "OpenAI", "Supabase", "pgvector", "AI Gateway", "Deno", "React", "Lovable", "Cursor", "Vercel"],
    result: "Más de 500 informes indexados y consultables en producción. La Caja Mágica transformó el flujo del equipo: de búsqueda manual entre PDFs a consultas en lenguaje natural con respuesta en segundos. Centralizar los informes, antes distribuidos como archivos HTML, aumentó la seguridad del contenido e integró al equipo editorial en un solo flujo de publicación. Pipeline RAG operativo con búsqueda híbrida y fallback inteligente.",
    expandedMedia: {
      src: "/developer-ai/insighthub-hero.png",
      alt: "Insight Hub Campaña: Motor RAG para análisis político",
      width: 1920,
      height: 1080,
    },
    closedNote:
      "Proyecto cerrado por seguridad; no puedo dar acceso a la ubicación de la plataforma.",
  },
];
