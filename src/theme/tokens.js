const palette = {
  blue: {
    50:  '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#0066cc',
    700: '#0052a3',
    800: '#003f7d',
    900: '#002b57',
  },
  neutral: {
    0:   '#ffffff',
    50:  '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    1000: '#000000',
  },
  accent: {
    500: '#14b8a6',
    600: '#0d9488',
  },
  danger: '#dc2626',
  warning: '#f59e0b',
  success: '#16a34a',
};

export const colors = {
  brand:          palette.blue[600],
  brandHover:     palette.blue[700],
  brandSoft:      palette.blue[50],
  brandSoftAlt:   palette.blue[100],
  brandDark:      palette.blue[800],

  bg:             palette.neutral[0],
  bgAlt:          palette.neutral[50],
  bgMuted:        palette.neutral[100],

  surface:        palette.neutral[0],
  surfaceAlt:     palette.neutral[50],

  text:           palette.neutral[800],
  textMuted:      palette.neutral[600],
  textSubtle:     palette.neutral[500],
  textInverse:    palette.neutral[0],

  border:         palette.neutral[200],
  borderStrong:   palette.neutral[300],

  overlay:        'rgba(15, 23, 42, 0.55)',
  overlaySoft:    'rgba(15, 23, 42, 0.25)',

  accent:         palette.accent[500],
  danger:         palette.danger,
  warning:        palette.warning,
  success:        palette.success,

  palette,
};

export const typography = {
  fontFamily: {
    sans: "'Noto Sans KR', 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    mono: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
  fontSize: {
    xs:   '0.75rem',
    sm:   '0.875rem',
    base: '1rem',
    md:   '1.125rem',
    lg:   '1.25rem',
    xl:   '1.5rem',
    '2xl':'1.875rem',
    '3xl':'2.25rem',
    '4xl':'3rem',
    '5xl':'3.75rem',
  },
  lineHeight: {
    tight: 1.2,
    snug: 1.35,
    normal: 1.55,
    relaxed: 1.75,
  },
  letterSpacing: {
    tight:  '-0.02em',
    normal: '0',
    wide:   '0.04em',
  },
};

export const spacing = {
  0:  '0',
  1:  '0.25rem',
  2:  '0.5rem',
  3:  '0.75rem',
  4:  '1rem',
  5:  '1.25rem',
  6:  '1.5rem',
  8:  '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
};

export const radii = {
  none: '0',
  sm:   '4px',
  md:   '8px',
  lg:   '12px',
  xl:   '16px',
  '2xl':'24px',
  full: '9999px',
};

export const shadows = {
  xs: '0 1px 2px rgba(15, 23, 42, 0.04)',
  sm: '0 2px 4px rgba(15, 23, 42, 0.06)',
  md: '0 6px 16px rgba(15, 23, 42, 0.08)',
  lg: '0 12px 28px rgba(15, 23, 42, 0.12)',
  xl: '0 24px 48px rgba(15, 23, 42, 0.16)',
  focus: `0 0 0 3px ${palette.blue[200]}`,
};

export const breakpoints = {
  sm:  '640px',
  md:  '768px',
  lg:  '1024px',
  xl:  '1280px',
  '2xl': '1536px',
};

export const media = {
  sm:  `@media (min-width: ${breakpoints.sm})`,
  md:  `@media (min-width: ${breakpoints.md})`,
  lg:  `@media (min-width: ${breakpoints.lg})`,
  xl:  `@media (min-width: ${breakpoints.xl})`,
  mdDown: `@media (max-width: ${parseInt(breakpoints.md) - 1}px)`,
  lgDown: `@media (max-width: ${parseInt(breakpoints.lg) - 1}px)`,
};

export const transitions = {
  fast: '150ms ease',
  base: '250ms ease',
  slow: '400ms ease',
  easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
};

export const layout = {
  container: '1200px',
  containerWide: '1440px',
  gutter: '5vw',
  headerHeight: '72px',
};

export const zIndex = {
  base: 1,
  dropdown: 100,
  sticky: 500,
  header: 800,
  overlay: 900,
  modal: 1000,
  toast: 1100,
};
