import Image from "next/image";

type FlagProps = {
  className?: string;
  idPrefix?: string;
};

const mexicoFlag = {
  src: "/flags/mexico.png",
  width: 1920,
  height: 1098,
} as const;

export function FlagChile({ className, idPrefix = "cl" }: FlagProps) {
  const clipId = `${idPrefix}-chile-clip`;

  return (
    <svg
      viewBox="0 0 36 24"
      className={className}
      role="img"
      aria-label="Bandera de Chile"
      style={{ aspectRatio: "3 / 2" }}
    >
      <defs>
        <clipPath id={clipId}>
          <rect width="36" height="24" rx="2.4" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect width="36" height="24" fill="#D52B1E" />
        <rect width="36" height="12" fill="#FFFFFF" />
        <rect width="12" height="12" fill="#0039A6" />
        <polygon
          fill="#FFFFFF"
          points="6,3.05 6.95,5.95 10,5.95 7.52,7.74 8.47,10.64 6,8.85 3.53,10.64 4.48,7.74 2,5.95 5.05,5.95"
        />
      </g>
    </svg>
  );
}

export function FlagMexico({
  className,
  sizes = "(min-width: 640px) 130px, 112px",
  priority = false,
}: FlagProps & { sizes?: string; priority?: boolean }) {
  return (
    <Image
      src={mexicoFlag.src}
      alt="Bandera de México"
      width={mexicoFlag.width}
      height={mexicoFlag.height}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}

const heightClass = {
  sm: "h-5",
  md: "h-8",
  lg: "h-10 sm:h-12",
  xl: "h-16 sm:h-[4.5rem]",
} as const;

const mexicoSizes = {
  sm: "36px",
  md: "56px",
  lg: "(min-width: 640px) 84px, 70px",
  xl: "(min-width: 640px) 130px, 112px",
} as const;

export function FlagPair({
  className,
  idPrefix,
  size = "md",
  caption = false,
  tone = "light",
  priority = false,
}: {
  className?: string;
  idPrefix: string;
  size?: "sm" | "md" | "lg" | "xl";
  caption?: boolean;
  tone?: "light" | "dark";
  priority?: boolean;
}) {
  const frame = heightClass[size];
  const ring = tone === "dark" ? "ring-1 ring-white/25" : "ring-1 ring-ink/10";
  const rule = tone === "dark" ? "bg-white/25" : "bg-ink/15";
  const gap = size === "xl" ? "gap-5 sm:gap-7" : "gap-2.5";

  return (
    <div className={`flex items-center ${gap} ${className ?? ""}`}>
      <figure className="flex items-center gap-2">
        <span className={`${frame} inline-flex overflow-hidden rounded-[2px] ${ring}`}>
          <FlagChile
            idPrefix={`${idPrefix}-cl`}
            className="h-full w-auto"
          />
        </span>
        {caption ? (
          <figcaption className="hidden text-xs font-semibold uppercase tracking-[0.16em] text-chile-blue sm:block">
            Chile
          </figcaption>
        ) : null}
      </figure>
      <span
        className={`${size === "xl" ? "h-10" : "h-5"} w-px ${rule}`}
        aria-hidden="true"
      />
      <figure className="flex items-center gap-2">
        <span className={`${frame} inline-flex overflow-hidden rounded-[2px] ${ring}`}>
          <FlagMexico
            className="h-full w-auto max-w-none"
            sizes={mexicoSizes[size]}
            priority={priority}
          />
        </span>
        {caption ? (
          <figcaption className="hidden text-xs font-semibold uppercase tracking-[0.16em] text-mexico-green sm:block">
            México
          </figcaption>
        ) : null}
      </figure>
    </div>
  );
}
