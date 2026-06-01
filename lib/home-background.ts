/** Hero background — image + overlays (hero section only). */
export const HOME_THEME_BACKGROUND = {
  dark: {
    image: "/images/hero-bg.jpg",
    position: "center 30%",
    linear:
      "linear-gradient(to bottom, rgba(7,8,15,0.4) 0%, rgba(7,8,15,0.7) 50%, rgba(7,8,15,0.95) 100%)",
    radial:
      "radial-gradient(ellipse at center top, transparent 30%, rgba(7,8,15,0.8) 70%)",
  },
  light: {
    image: "/images/hero-bg-light.jpg",
    position: "center center",
    linear:
      "linear-gradient(to bottom, rgba(250,251,252,0.3) 0%, rgba(250,251,252,0.6) 50%, rgba(250,251,252,0.95) 100%)",
    radial:
      "radial-gradient(ellipse at center, transparent 20%, rgba(250,251,252,0.7) 70%)",
  },
} as const;

export function getHomeThemeBackground(dark: boolean) {
  return dark ? HOME_THEME_BACKGROUND.dark : HOME_THEME_BACKGROUND.light;
}
