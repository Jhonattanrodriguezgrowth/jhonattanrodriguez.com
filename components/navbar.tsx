"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@teispace/next-themes";
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from "./shared/icons";

const NAV_ITEMS = [
  { href: "/", label: "Inicio" },
  { href: "/mi-historia", label: "Mi historia" },
  { href: "/growth", label: "Growth" },
  { href: "/filmmaker", label: "Filmmaker" },
  { href: "/ia-builder", label: "IA Builder" },
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

  const textC = dark ? "rgba(255,255,255,0.48)" : "rgba(0,0,0,0.44)";
  const hoverC = dark ? "rgba(255,255,255,0.88)" : "rgba(0,0,0,0.86)";

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  if (!mounted) {
    return <nav className="fixed top-0 left-0 right-0 z-50 h-16" />;
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? dark
              ? "rgba(7,8,15,0.88)"
              : "rgba(240,242,248,0.88)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? dark
              ? "1px solid rgba(255,255,255,0.07)"
              : "1px solid rgba(0,0,0,0.07)"
            : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="transition-opacity hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-current rounded-md whitespace-nowrap"
            style={{
              fontFamily: "'Engagement', cursive",
              color: dark ? "#f4f0e8" : "#1a1a1a",
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
                    color: active ? (dark ? "#fff" : "#000") : textC,
                    background: active
                      ? dark
                        ? "rgba(255,255,255,0.08)"
                        : "rgba(0,0,0,0.06)"
                      : "transparent",
                    // @ts-ignore
                    "--tw-ring-color": dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)",
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
              onClick={() => setTheme(dark ? "light" : "dark")}
              aria-label={dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              className="ml-3 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg transition-opacity hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{ 
                color: textC,
                // @ts-ignore
                "--tw-ring-color": dark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)",
              }}
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="flex md:hidden items-center gap-1">
            <button
              onClick={() => setTheme(dark ? "light" : "dark")}
              aria-label={dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              style={{ color: textC }}
              className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg focus-visible:outline-none focus-visible:ring-2"
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
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
          background: dark ? "rgba(7,8,15,0.98)" : "rgba(240,242,248,0.98)",
          borderBottom: dark
            ? "1px solid rgba(255,255,255,0.07)"
            : "1px solid rgba(0,0,0,0.07)",
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
                  color: active 
                    ? (dark ? "#fff" : "#000") 
                    : (dark ? "rgba(255,255,255,0.70)" : "rgba(0,0,0,0.70)"),
                  background: active
                    ? dark
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
