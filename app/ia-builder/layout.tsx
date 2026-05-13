import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IA Builder | Jhonattan Rodriguez",
  description:
    "Automatizaciones, agentes IA y aplicaciones web para escalar tu negocio. Construyo herramientas que trabajan mientras tu creces.",
  keywords: [
    "IA Builder",
    "Automatización",
    "Agentes IA",
    "n8n",
    "Make",
    "Inteligencia Artificial",
    "No Code",
    "Low Code",
    "Bogota",
    "Colombia",
  ],
  openGraph: {
    title: "IA Builder | Jhonattan Rodriguez",
    description:
      "Automatizaciones, agentes IA y aplicaciones web para escalar tu negocio.",
    type: "website",
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "IA Builder | Jhonattan Rodriguez",
    description:
      "Automatizaciones, agentes IA y aplicaciones web para escalar tu negocio.",
  },
};

export default function IABuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
