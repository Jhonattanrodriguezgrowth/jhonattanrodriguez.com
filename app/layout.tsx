import type { Metadata } from "next";
import { Engagement, Quicksand, Lato } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const engagement = Engagement({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-engagement",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jhonattan Rodriguez | Growth Hacker, Filmmaker & IA Builder",
  description:
    "Construyo sistemas que hacen crecer negocios. Growth Hacking, Produccion de Video y soluciones con IA desde Bogota, Colombia.",
  generator: "v0.app",
  keywords: [
    "Growth Hacker",
    "Filmmaker",
    "IA Builder",
    "Bogota",
    "Colombia",
    "MetaAds",
    "Automatizacion",
    "Video Marketing",
  ],
  authors: [{ name: "Jhonattan Rodriguez" }],
  openGraph: {
    title: "Jhonattan Rodriguez | Growth Hacker, Filmmaker & IA Builder",
    description:
      "Construyo sistemas que hacen crecer negocios. Growth Hacking, Produccion de Video y soluciones con IA.",
    type: "website",
    locale: "es_CO",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`${engagement.variable} ${quicksand.variable} ${lato.variable} font-sans antialiased overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
