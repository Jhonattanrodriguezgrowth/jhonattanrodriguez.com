import { getHomeThemeBackground } from "@/lib/home-background";

type ThemeImageBackgroundProps = {
  dark: boolean;
};

export function ThemeImageBackground({ dark }: ThemeImageBackgroundProps) {
  const bg = getHomeThemeBackground(dark);

  return (
    <>
      <div
        className={`theme-bg-image absolute inset-0 z-0 pointer-events-none${dark ? "" : " theme-bg-image--light"}`}
        style={{
          backgroundImage: `url('${bg.image}')`,
          backgroundSize: "cover",
          backgroundPosition: bg.position,
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: bg.linear }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: bg.radial }}
      />
    </>
  );
}
