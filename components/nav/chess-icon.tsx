type ChessIconProps = {
  size?: number;
  className?: string;
  strokeWidth?: number;
};

/** Pieza de ajedrez (reina): Growth en nav; trazo alineado con Lucide */
export function ChessIcon({ size = 20, className, strokeWidth = 1.75 }: ChessIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 17h10l-1-4H8l-1 4z" />
      <path d="M9 9c0-1.5 1.2-2.5 3-2.5s3 1 3 2.5c0 1.2-.8 2-2 2.5l1 2.5H10l1-2.5c-1.2-.5-2-1.3-2-2.5z" />
      <circle cx="12" cy="5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
