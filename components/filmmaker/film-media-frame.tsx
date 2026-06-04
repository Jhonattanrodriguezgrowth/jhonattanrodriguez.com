"use client";

import type { CSSProperties, ReactNode } from "react";
import {
  filmImageOverlay,
  filmPlaceholderBackground,
  filmYouTubeEmbedUrl,
} from "@/lib/filmmaker-media";

type FilmMediaFrameProps = {
  variant: "image" | "video" | "placeholder";
  pageBg: string;
  dark: boolean;
  className?: string;
  imageSrc?: string;
  imagePosition?: string;
  videoId?: string;
  children?: ReactNode;
  "aria-hidden"?: boolean;
};

const frameStyle = (pageBg: string): CSSProperties => ({
  ["--film-media-bg" as string]: pageBg,
});

function RatioBox({ children }: { children: ReactNode }) {
  return <div className="relative w-full pb-[56.25%]">{children}</div>;
}

export function FilmMediaFrame({
  variant,
  pageBg,
  dark,
  className = "",
  imageSrc,
  imagePosition = "center",
  videoId,
  children,
  "aria-hidden": ariaHidden,
}: FilmMediaFrameProps) {
  const baseClass = `film-media-frame w-full ${className}`.trim();

  if (variant === "video" && videoId) {
    return (
      <div className={baseClass} style={frameStyle(pageBg)}>
        <RatioBox>
          <iframe
            title="Reel destacado: jhonattansfilm"
            src={filmYouTubeEmbedUrl(videoId)}
            className="film-media-iframe absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </RatioBox>
      </div>
    );
  }

  if (variant === "placeholder") {
    return (
      <div className={baseClass} style={frameStyle(pageBg)}>
        <RatioBox>
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: filmPlaceholderBackground(dark) }}
          >
            {children}
          </div>
        </RatioBox>
      </div>
    );
  }

  if (variant === "image" && imageSrc) {
    return (
      <div
        className={baseClass}
        style={{
          ...frameStyle(pageBg),
          backgroundImage: `${filmImageOverlay(dark)}, url('${imageSrc}')`,
          backgroundSize: "cover",
          backgroundPosition: imagePosition,
        }}
        aria-hidden={ariaHidden}
      />
    );
  }

  return null;
}
