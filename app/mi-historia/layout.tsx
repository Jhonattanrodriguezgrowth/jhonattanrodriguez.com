import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV | Jhonattan Rodriguez",
  description:
    "Encontrar eso que amamos: confiar en que los puntos se conectarán. Trayectoria desde ingeniería y ciencias del deporte hasta producto, growth y Murphyia.",
  openGraph: {
    title: "CV | Jhonattan Rodriguez",
    description:
      "Línea del tiempo y una idea que guía el camino: confiar en el futuro mientras cada etapa cobra sentido al mirar atrás.",
    type: "website",
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV | Jhonattan Rodriguez",
    description:
      "Trayectoria y puntos de conexión: de la UNAL y el cuerpo humano a startups, Developer AI y Murphyia — con una cita que enmarca el porqué.",
  },
};

export default function MiHistoriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
