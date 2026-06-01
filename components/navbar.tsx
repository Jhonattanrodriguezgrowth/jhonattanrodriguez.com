"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@teispace/next-themes";
import { THEMES } from "@/lib/design-tokens";
import { hexToRgba, resolveRouteThemeId } from "@/lib/route-theme";
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from "./shared/icons";

const NAV_ITEMS = [
  { href: "/", label: "Inicio" },
  { href: "/developer-ai", label: "Developer AI" },
  { href: "/growth", label: "Growth" },
  { href: "/filmmaker", label: "Filmmaker" },
  { href: "/mi-historia", label: "CV" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const dark = theme === "dark";

  const closeMenu = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      // Close mobile menu on scroll
      if (mobileOpen) {
        closeMenu();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen, closeMenu]);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const routeId = resolveRouteThemeId(pathname);
  /** Hasta hidratar asumimos modo oscuro (defaultTheme en layout) para no mostrar nav vacío. */
  const paletteDark = !mounted ? true : dark;
  const pt = THEMES[routeId][paletteDark ? "dark" : "light"];
  const navScrolledBg = paletteDark ? hexToRgba(pt.bg, 0.88) : hexToRgba(pt.bg, 0.92);
  const mobilePanelBg = hexToRgba(pt.bg, 0.98);
  const textC = pt.text.muted;
  const hoverC = pt.text.secondary;

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? navScrolledBg : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? `1px solid ${pt.border}` : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="transition-opacity hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-current rounded-md whitespace-nowrap"
            style={{
              fontFamily: "'Engagement', cursive",
              color: pt.text.primary,
              letterSpacing: 1,
            }}
          >
            <span className="text-2xl sm:text-3xl font-bold">JR</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className="px-4 py-2 min-h-[44px] flex items-center rounded-lg text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    color: active ? pt.text.primary : textC,
                    background: active
                      ? paletteDark
                        ? "rgba(255,255,255,0.08)"
                        : "rgba(0,0,0,0.06)"
                      : "transparent",
                    // @ts-ignore
                    "--tw-ring-color": paletteDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) e.currentTarget.style.color = hoverC;
                  }}
                  onMouseLeave={(e) => {
                    if (!active) e.currentTarget.style.color = textC;
                  }}
                >
                  {label}
                </Link>
              );
            })}
            <button
              onClick={() => setTheme(paletteDark ? "light" : "dark")}
              aria-label={paletteDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              className="ml-3 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg transition-opacity hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{ 
                color: textC,
                // @ts-ignore
                "--tw-ring-color": paletteDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)",
              }}
            >
              {paletteDark ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="flex md:hidden items-center gap-1">
            <button
              onClick={() => setTheme(paletteDark ? "light" : "dark")}
              aria-label={paletteDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              style={{ color: textC }}
              className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg focus-visible:outline-none focus-visible:ring-2"
            >
              {paletteDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
              style={{ color: textC }}
              className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg focus-visible:outline-none focus-visible:ring-2"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={closeMenu}
          style={{
            background: "rgba(0,0,0,0.5)",
          }}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 right-0 z-50 md:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{
          background: mobilePanelBg,
          borderBottom: `1px solid ${pt.border}`,
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map(({ href, label }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className="text-left px-4 py-3 min-h-[48px] flex items-center rounded-lg text-base transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  color: active ? pt.text.primary : pt.text.secondary,
                  background: active
                    ? paletteDark
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(0,0,0,0.06)"
                    : "transparent",
                }}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
