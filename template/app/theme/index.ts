import {createText, createBox} from '@shopify/restyle';

const palette = {
  primary: '#000',
  secondary: 'blue',
  danger: 'red',
  white: 'white',
};

export const theme = {
  colors: {
    primary: palette.primary,
    secondary: palette.secondary,
    danger: palette.danger,
    white: palette.white,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  breakpoints: {},
  textVariants: {
    hero: {
      fontSize: 32,
      textAlign: 'center',
      fontWeight: '800',
      color: 'danger',
    },
    default: {
      fontSize: 16,
      color: 'primary',
      textAlign: 'center',
    },
  },
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
