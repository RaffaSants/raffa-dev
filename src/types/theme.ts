export type colorsBase = {
  primary: string;
  secondary: string;
  tertiary?: string;
};

export type colosBaseProps = keyof colorsBase;

export type sizes = {
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
};

export type height = sizes;

export type minWidth = sizes;

export type colors = colorsBase & {
  info: string;
  success: string;
  warning: string;
  danger: string;
  dark: string;
  light: string;
};

export type typography = {
  sizes: sizes;
  colors: colors;
};

export type buttons = {
  colors: colors;
  sizes: {
    height: height;
    minWidth: minWidth;
  };
};

export type theme = {
  title: string;
  transitions: string;
  colors: colorsBase;
  typography: typography;
  buttons: buttons;
};
