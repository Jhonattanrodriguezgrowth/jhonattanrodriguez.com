import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mi Historia | Jhonattan Rodriguez",
  description:
    "De donde vengo y hacia donde voy. La historia detras del sistema de crecimiento que combina Growth, Filmmaker e IA Builder.",
  openGraph: {
    title: "Mi Historia | Jhonattan Rodriguez",
    description:
      "De donde vengo y hacia donde voy. La historia detras del sistema de crecimiento.",
    type: "website",
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Historia | Jhonattan Rodriguez",
    description:
      "De donde vengo y hacia donde voy. La historia detras del sistema de crecimiento.",
  },
};

export default function MiHistoriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
