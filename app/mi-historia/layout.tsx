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
  },
};

export default function MiHistoriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
