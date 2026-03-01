/**
 * Brand color constants for use in JS/TS props (Magic UI components, inline styles, etc.)
 * For Tailwind classes, use the `brand-*` and `cta-*` utilities defined in globals.css.
 *
 * To update the site's color scheme, change these values AND the matching
 * CSS custom properties in globals.css under @theme inline.
 */
export const brand = {
  /** Primary blue — logos, headlines, section labels */
  primary: "#2563eb",
  /** Darker blue — badge text, hover states */
  primaryDark: "#1e40af",
  /** Lighter blue — secondary icons */
  primaryLight: "#3b82f6",

  /** CTA orange — buttons, call-to-action backgrounds */
  accent: "#f97316",
  /** CTA hover — darker orange */
  accentHover: "#ea580c",
  /** CTA shimmer — lighter orange for shimmer effects */
  accentLight: "#fb923c",

  /** Purple — decorative accent for variety */
  purple: "#8b5cf6",
} as const;
