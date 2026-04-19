import {
  colors,
  typography,
  spacing,
  radii,
  shadows,
  breakpoints,
  media,
  transitions,
  layout,
  zIndex,
} from './tokens';

const { palette } = colors;

export const lightTheme = {
  mode: 'light',
  colors,
  typography,
  spacing,
  radii,
  shadows,
  breakpoints,
  media,
  transitions,
  layout,
  zIndex,
};

export const darkTheme = {
  ...lightTheme,
  mode: 'dark',
  colors: {
    ...colors,
    brand:        palette.blue[400],
    brandHover:   palette.blue[300],
    brandSoft:    'rgba(59, 130, 246, 0.12)',
    brandSoftAlt: 'rgba(59, 130, 246, 0.22)',
    brandDark:    palette.blue[200],

    bg:        palette.neutral[900],
    bgAlt:     palette.neutral[800],
    bgMuted:   palette.neutral[700],

    surface:    palette.neutral[800],
    surfaceAlt: palette.neutral[900],

    text:       palette.neutral[100],
    textMuted:  palette.neutral[300],
    textSubtle: palette.neutral[400],
    textInverse: palette.neutral[900],

    border:       palette.neutral[700],
    borderStrong: palette.neutral[600],

    overlay:     'rgba(0, 0, 0, 0.65)',
    overlaySoft: 'rgba(0, 0, 0, 0.35)',
  },
  shadows: {
    ...shadows,
    xs: '0 1px 2px rgba(0, 0, 0, 0.35)',
    sm: '0 2px 4px rgba(0, 0, 0, 0.45)',
    md: '0 6px 16px rgba(0, 0, 0, 0.5)',
    lg: '0 12px 28px rgba(0, 0, 0, 0.55)',
    xl: '0 24px 48px rgba(0, 0, 0, 0.6)',
    focus: `0 0 0 3px ${palette.blue[600]}`,
  },
};

export { default as GlobalStyle } from './GlobalStyle';
