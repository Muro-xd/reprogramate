import type { SVGProps } from "react";

interface KairosLogoProps extends SVGProps<SVGSVGElement> {
  /** Color sólido opcional. Si se omite usa el gradiente de marca. */
  color?: string;
}

/**
 * Isotipo Kairos — Chacana (cruz andina) + Flor de la Vida.
 * Escala libre: pasa width/height o className (ej: "w-8 h-8").
 *
 * Nota: si usas múltiples instancias en la misma página los IDs SVG
 * internos se duplicarán. Para ese caso pasa un `id` único como prop
 * y el componente lo usará como prefijo.
 */
export default function KairosLogo({ color, ...props }: KairosLogoProps) {
  const from = color ?? "var(--logo-color-from, #A78BFA)";
  const to   = color ?? "var(--logo-color-to,   #F472B6)";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      fill="none"
      aria-label="Kairos"
      {...props}
    >
      <defs>
        <linearGradient id="kg" x1="350" y1="50" x2="50" y2="350" gradientUnits="userSpaceOnUse">
          <stop stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
        <clipPath id="kclip">
          <circle cx="200" cy="200" r="96.25" />
        </clipPath>
      </defs>

      {/* Chacana — 20 vértices, cruz escalonada 3 niveles, u = 50 */}
      <polygon
        points="250,350 250,300 300,300 300,250 350,250 350,150 300,150 300,100 250,100 250,50 150,50 150,100 100,100 100,150 50,150 50,250 100,250 100,300 150,300 150,350"
        stroke="url(#kg)"
        strokeWidth={3.5}
        strokeLinejoin="miter"
      />

      {/* Círculo — R = 1.925 × u = 96.25 */}
      <circle cx="200" cy="200" r="96.25" stroke="url(#kg)" strokeWidth={3} />

      {/* Flor de la Vida — 19 círculos, r = R/3 ≈ 32.083 */}
      <g clipPath="url(#kclip)" stroke="url(#kg)" strokeWidth={2.2}>
        {/* Centro */}
        <circle cx="200"     cy="200"     r="32.083" />
        {/* Anillo 1 — d = r */}
        <circle cx="232.083" cy="200"     r="32.083" />
        <circle cx="216.042" cy="172.208" r="32.083" />
        <circle cx="183.958" cy="172.208" r="32.083" />
        <circle cx="167.917" cy="200"     r="32.083" />
        <circle cx="183.958" cy="227.792" r="32.083" />
        <circle cx="216.042" cy="227.792" r="32.083" />
        {/* Anillo 2 — d = r√3 */}
        <circle cx="248.124" cy="172.215" r="32.083" />
        <circle cx="200"     cy="144.430" r="32.083" />
        <circle cx="151.876" cy="172.215" r="32.083" />
        <circle cx="151.876" cy="227.785" r="32.083" />
        <circle cx="200"     cy="255.570" r="32.083" />
        <circle cx="248.124" cy="227.785" r="32.083" />
        {/* Anillo 3 — d = 2r */}
        <circle cx="264.167" cy="200"     r="32.083" />
        <circle cx="232.083" cy="144.430" r="32.083" />
        <circle cx="167.917" cy="144.430" r="32.083" />
        <circle cx="135.833" cy="200"     r="32.083" />
        <circle cx="167.917" cy="255.570" r="32.083" />
        <circle cx="232.083" cy="255.570" r="32.083" />
      </g>
    </svg>
  );
}
