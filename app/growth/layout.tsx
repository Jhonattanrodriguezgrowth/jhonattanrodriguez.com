import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growth Hacker | Jhonattan Rodriguez",
  description:
    "Aprende a dominar MetaAds, construir tu marca y operar tus redes sociales con sistemas agiles. Entrenamientos y mentorias 1:1 en Bogota y remoto.",
  keywords: [
    "Growth Hacking",
    "MetaAds",
    "Facebook Ads",
    "Instagram Ads",
    "Marketing Digital",
    "Mentoria",
    "Bogota",
    "Colombia",
  ],
  openGraph: {
    title: "Growth Hacker | Jhonattan Rodriguez",
    description:
      "Aprende a dominar MetaAds y operar tu marca con sistemas agiles. Entrenamientos y mentorias 1:1.",
    type: "website",
    locale: "es_CO",
  },
};

export default function GrowthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
