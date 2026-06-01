import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV | Storytelling | Jhonattan Rodriguez",
  description:
    "En 2026 conecto los puntos mirando hacia el pasado: trayectoria desde ingeniería y ciencias del deporte hasta producto, growth, film y Murphyia.",
  openGraph: {
    title: "CV | Storytelling | Jhonattan Rodriguez",
    description:
      "Línea del tiempo y narrativa personal: de la UNAL y el deporte a startups, Developer AI y Murphyia.",
    type: "website",
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV | Storytelling | Jhonattan Rodriguez",
    description:
      "CV y storytelling: trayectoria profesional y los puntos que conectan cada etapa del camino.",
  },
};

export default function MiHistoriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
