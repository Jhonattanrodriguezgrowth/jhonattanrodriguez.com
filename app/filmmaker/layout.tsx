import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filmmaker | Jhonattan Rodriguez",
  description:
    "Produccion de video para founders y marcas. Planes Sprint y Mensual con estrategia, produccion y postproduccion incluida. Desde Bogota para LATAM.",
  keywords: [
    "Produccion de Video",
    "Filmmaker",
    "Video Marketing",
    "Contenido para Redes",
    "Bogota",
    "Colombia",
    "Video Corporativo",
    "Reels",
    "TikTok",
  ],
  openGraph: {
    title: "Filmmaker | Jhonattan Rodriguez",
    description:
      "Produccion de video para founders y marcas. Planes Sprint y Mensual con estrategia incluida.",
    type: "website",
    locale: "es_CO",
  },
};

export default function FilmmakerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
