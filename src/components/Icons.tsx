import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function LogoMark({
  className,
  idPrefix = "logo",
}: {
  className?: string;
  idPrefix?: string;
}) {
  const clipId = `${idPrefix}-mark-clip`;

  return (
    <svg
      viewBox="0 0 48 32"
      className={className}
      role="img"
      aria-label="Banderas de Chile y México"
    >
      <defs>
        <clipPath id={clipId}>
          <rect width="48" height="32" rx="8" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect width="24" height="32" fill="#D52B1E" />
        <rect width="24" height="16" fill="#FFFFFF" />
        <rect width="16" height="16" fill="#0039A6" />
        <polygon
          fill="#FFFFFF"
          points="8,4.1 9.15,7.65 12.9,7.65 9.88,9.85 11.03,13.4 8,11.2 4.97,13.4 6.12,9.85 3.1,7.65 6.85,7.65"
        />
        <rect x="24" width="8" height="32" fill="#006847" />
        <rect x="32" width="8" height="32" fill="#FFFFFF" />
        <rect x="40" width="8" height="32" fill="#CE1126" />
        <g transform="translate(36 17.2)">
          <rect x="-0.45" y="0" width="0.9" height="3.6" fill="#006847" />
          <ellipse cx="0" cy="-0.35" rx="1.35" ry="1.5" fill="#006847" />
          <path
            fill="#5C3A1E"
            d="M0-3.1c.85.15 1.5.9 1.65 1.7.9.15 1.1.75 1.1.75-.7.2-1.15.1-1.4 0 .15.55.05 1.05-.2 1.4l1 .75c.1.4-.15.65-.6.5L.75 1.4C.55 1.85.25 2.15 0 2.35.25 2.15-.05 1.85-.25 1.4L-1.55 2c-.45.15-.7-.1-.6-.5l1-.75c-.25-.35-.35-.85-.2-1.4-.25.1-.7.2-1.4 0 0 0 .2-.6 1.1-.75.15-.8.8-1.55 1.65-1.7Z"
          />
        </g>
      </g>
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 7h16M4 12h16M4 17h10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="10" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 8v4.4l2.6 1.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="2.2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="m4.2 7.2 7.8 5.4 7.8-5.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 4.4a7.6 7.6 0 0 0-6.6 11.4L4.4 19.6l4-1a7.6 7.6 0 1 0 3.6-14.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M9.3 9.6c.2-.5.4-.5.7-.5h.6c.2 0 .4 0 .5.4.2.6.6 1.8.6 1.9s0 .3-.2.5l-.4.5c-.2.2-.3.4 0 .7.3.4.9 1.4 2 2 .8.5 1.1.4 1.4.2l.6-.4c.2-.1.4-.1.6 0l1.7.9c.2.1.3.3.2.6-.2.7-1.1 1.2-1.8 1.2-.5 0-3.2.1-5.3-2.1-1.7-1.8-2.1-3.5-2.2-4.1 0-.7.5-1.5 1-1.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.4" cy="7.6" r="1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M14.2 20v-7.1h2.4l.4-2.8h-2.8V8.5c0-.8.2-1.4 1.4-1.4h1.5V4.6c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H9.1v2.8h2.1V20h3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SunMountains({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 420"
      className={className}
      role="img"
      aria-label="Ilustración de montañas con los colores de las banderas de Chile y México"
    >
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0039A6" />
          <stop offset="42%" stopColor="#4d78c4" />
          <stop offset="100%" stopColor="#f4ece0" />
        </linearGradient>
        <clipPath id="hero-frame">
          <rect width="640" height="420" rx="28" />
        </clipPath>
      </defs>
      <g clipPath="url(#hero-frame)">
        <rect width="640" height="420" fill="url(#hero-sky)" />
        <polygon
          fill="#FFFFFF"
          points="470,58 486,108 540,108 496,139 512,190 470,160 428,190 444,139 400,108 454,108"
          opacity="0.95"
        />
        <path d="M0 292 148 168l92 86 86-128 118 150 76-74 120 90v128H0Z" fill="#0039A6" />
        <path d="M0 330 168 214l78 72 80-98 102 118 70-58 142 72v100H0Z" fill="#D52B1E" />
        <path
          d="M0 368c48-22 96-40 148-28 62 14 86 40 148 28 70-14 92-46 156-34 58 10 94 38 188 22v64H0Z"
          fill="#006847"
        />
        <g transform="translate(78 318)">
          <rect width="42" height="28" fill="#D52B1E" />
          <rect width="42" height="14" fill="#FFFFFF" />
          <rect width="14" height="14" fill="#0039A6" />
          <polygon
            fill="#FFFFFF"
            points="7,3.2 8.05,6.5 11.5,6.5 8.72,8.5 9.77,11.8 7,9.8 4.23,11.8 5.28,8.5 2.5,6.5 5.95,6.5"
          />
          <rect x="-3" y="28" width="3" height="36" fill="#1c1614" />
        </g>
        <g transform="translate(132 326)">
          <rect width="42" height="28" fill="#FFFFFF" />
          <rect width="14" height="28" fill="#006847" />
          <rect x="28" width="14" height="28" fill="#CE1126" />
          <rect x="20.3" y="14" width="1.4" height="7" fill="#006847" />
          <ellipse cx="21" cy="13.2" rx="2.4" ry="2.6" fill="#006847" />
          <rect x="-3" y="28" width="3" height="28" fill="#1c1614" />
        </g>
      </g>
    </svg>
  );
}
