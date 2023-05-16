import type * as layoutTypes from '@/types/layouts';
import type * as themeTypes from '@/types/theme';

type contentVariants =
  | 'section'
  | 'article'
  | 'aside'
  | 'footer'
  | 'header'
  | 'div'
  | 'address';

export interface contentStylesProps {
  id?: string;
  height?: string;
  maxheight?: string;
  minheight?: string;
  width?: string;
  maxwidth?: string;
  minwidth?: string;
  flexwrap?: 'nowrap ' | 'wrap' | 'wrap-reverse';
  aligny?: layoutTypes.alignY;
  alignx?: layoutTypes.alignX;
  gap?: string;
  padding?: string;
  margin?: string;
  bgcolor?: keyof themeTypes.colorsBase | string;
  animation?: layoutTypes.animation;
  position?: layoutTypes.position;
  color?: keyof themeTypes.colors | string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  index?: string;
  shadow?: string;
  opacity?: string;
  border?: string;
  borderradius?: string;
  target?: layoutTypes.target;
  notarget?: layoutTypes.target;
}

export interface ContentStyle extends contentStylesProps {
  variant: contentVariants;
  direction: layoutTypes.direction;
}
