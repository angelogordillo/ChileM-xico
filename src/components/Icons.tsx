import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <rect width="40" height="40" rx="12" className="fill-wine" />
      <path d="M7.5 28 20 10.5 32.5 28H7.5Z" className="fill-foam" />
      <circle cx="20" cy="14" r="3.6" className="fill-gold" />
      <rect x="8" y="30" width="24" height="2.4" rx="1.2" className="fill-navy" />
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
      aria-label="Ilustración de montañas andinas y un sol cálido"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f3d7b4" />
          <stop offset="55%" stopColor="#f6e7d2" />
          <stop offset="100%" stopColor="#efe0cc" />
        </linearGradient>
        <linearGradient id="sunGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0c14b" />
          <stop offset="100%" stopColor="#c4622d" />
        </linearGradient>
      </defs>
      <rect width="640" height="420" rx="28" fill="url(#sky)" />
      <circle cx="470" cy="128" r="58" fill="url(#sunGlow)" opacity="0.95" />
      <circle cx="470" cy="128" r="86" fill="#c9a04a" opacity="0.16" />
      <path d="M0 292 148 168l92 86 86-128 118 150 76-74 120 90v128H0Z" fill="#17324f" />
      <path d="M0 330 168 214l78 72 80-98 102 118 70-58 142 72v100H0Z" fill="#9b1d2e" />
      <path
        d="M0 368c48-22 96-40 148-28 62 14 86 40 148 28 70-14 92-46 156-34 58 10 94 38 188 22v64H0Z"
        fill="#c4622d"
        opacity="0.9"
      />
      <path d="M0 398h640v22H0Z" fill="#1c1614" opacity="0.12" />
    </svg>
  );
}
