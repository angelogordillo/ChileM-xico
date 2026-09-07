type FlagProps = {
  className?: string;
  idPrefix: string;
};

export function FlagChile({ className, idPrefix }: FlagProps) {
  const clipId = `${idPrefix}-chile-clip`;

  return (
    <svg
      viewBox="0 0 36 24"
      className={className}
      role="img"
      aria-label="Bandera de Chile"
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

export function FlagMexico({ className, idPrefix }: FlagProps) {
  const clipId = `${idPrefix}-mexico-clip`;

  return (
    <svg
      viewBox="0 0 36 24"
      className={className}
      role="img"
      aria-label="Bandera de México"
    >
      <defs>
        <clipPath id={clipId}>
          <rect width="36" height="24" rx="2.4" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect width="36" height="24" fill="#FFFFFF" />
        <rect width="12" height="24" fill="#006847" />
        <rect x="24" width="12" height="24" fill="#CE1126" />
        <g transform="translate(18 13)">
          <rect x="-0.7" y="0.2" width="1.4" height="5.4" fill="#006847" />
          <ellipse cx="0" cy="-0.4" rx="2.1" ry="2.3" fill="#006847" />
          <ellipse cx="-2.3" cy="0.7" rx="1.35" ry="1.7" fill="#006847" />
          <ellipse cx="2.3" cy="0.7" rx="1.35" ry="1.7" fill="#006847" />
          <path
            fill="#5C3A1E"
            d="M0-4.6c1.4.2 2.4 1.4 2.6 2.6.4 0 1.5.3 1.7 1.1-.9.3-1.6.2-2.1 0 .2.8.1 1.6-.3 2.2l1.6 1.1c.1.6-.3 1-1 .8L1.2 2.2c-.3.7-.8 1.2-1.2 1.5-.4-.3-.9-.8-1.2-1.5L-2.5 3.2c-.7.2-1.1-.2-1-.8l1.6-1.1c-.4-.6-.5-1.4-.3-2.2-.5.2-1.2.3-2.1 0 .2-.8 1.3-1.1 1.7-1.1.2-1.2 1.2-2.4 2.6-2.6Z"
          />
        </g>
      </g>
    </svg>
  );
}

export function FlagPair({
  className,
  idPrefix,
  size = "md",
  caption = false,
  tone = "light",
}: {
  className?: string;
  idPrefix: string;
  size?: "sm" | "md" | "lg" | "xl";
  caption?: boolean;
  tone?: "light" | "dark";
}) {
  const flagClass =
    size === "xl"
      ? "h-16 w-24 sm:h-[4.5rem] sm:w-[6.75rem]"
      : size === "lg"
        ? "h-10 w-[3.75rem] sm:h-12 sm:w-[4.5rem]"
        : size === "sm"
          ? "h-5 w-[1.875rem]"
          : "h-8 w-12";
  const ring = tone === "dark" ? "ring-1 ring-white/25" : "ring-1 ring-ink/10";
  const rule = tone === "dark" ? "bg-white/25" : "bg-ink/15";

  const gap = size === "xl" ? "gap-5 sm:gap-7" : "gap-2.5";

  return (
    <div className={`flex items-center ${gap} ${className ?? ""}`}>
      <figure className="flex items-center gap-2">
        <FlagChile
          idPrefix={`${idPrefix}-cl`}
          className={`${flagClass} ${ring}`}
        />
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
        <FlagMexico
          idPrefix={`${idPrefix}-mx`}
          className={`${flagClass} ${ring}`}
        />
        {caption ? (
          <figcaption className="hidden text-xs font-semibold uppercase tracking-[0.16em] text-mexico-green sm:block">
            México
          </figcaption>
        ) : null}
      </figure>
    </div>
  );
}

