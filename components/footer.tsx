"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { WhatsAppIcon, CalendarIcon } from "./shared/icons";
import { getWhatsAppLink, getCalendarLink } from "@/lib/cta-links";

const FOOTER_LINKS = [
  { href: "/growth", label: "Growth" },
  { href: "/filmmaker", label: "Filmmaker" },
  { href: "/ia-builder", label: "IA Builder" },
];

export function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Default to dark during SSR to match the initial HTML
  const dark = mounted ? theme === "dark" : true;

  const ts = dark ? "rgba(255,255,255,0.28)" : "rgba(0,0,0,0.30)";
  const linkColor = dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)";

  return (
    <footer
      className="py-12 relative"
      style={{
        background: dark ? "#07080f" : "#f0f2f8",
        borderTop: dark
          ? "1px solid rgba(255,255,255,0.07)"
          : "1px solid rgba(0,0,0,0.07)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="transition-opacity hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-md"
            style={{
              fontFamily: "'Engagement', cursive",
              fontSize: 24,
              color: dark ? "#f4f0e8" : "#1a1a1a",
            }}
          >
            JR
          </Link>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            {FOOTER_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm transition-colors duration-200 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded px-1"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  color: linkColor,
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="#contacto"
              className="text-sm transition-colors duration-200 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded px-1"
              style={{
                fontFamily: "'Lato', sans-serif",
                color: linkColor,
              }}
              onClick={(e) => {
                e.preventDefault();
                window.open(getCalendarLink(), "_blank");
              }}
            >
              Contacto
            </Link>
          </div>

          {/* CTA Icons */}
          <div className="flex gap-3">
            <a
              href={getCalendarLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{
                background: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
                color: dark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)",
              }}
              aria-label="Agenda una llamada"
            >
              <CalendarIcon size={18} />
            </a>
            <a
              href={getWhatsAppLink("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
              style={{
                background: "#25D366",
                color: "#ffffff",
              }}
              aria-label="Escribeme por WhatsApp"
            >
              <WhatsAppIcon size={18} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t text-center" style={{ borderColor: dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)" }}>
          <p
            className="text-sm"
            style={{ fontFamily: "'Lato', sans-serif", color: ts }}
          >
            {new Date().getFullYear()} Jhonattan Rodriguez - Bogota, Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
