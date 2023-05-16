import * as layoutTypes from '@/types/layouts';
import * as themeTypes from '@/types/theme';

export interface containerStyle {
  variant: 'div' | 'header' | 'main' | 'footer' | 'aside' | 'body';
  type: 'flex' | 'grid';
  position?: layoutTypes.position;
  direction?: layoutTypes.direction;
  columns?: layoutTypes.columns;
  columnsminmaxsize?: string;
  rows?: string | number;
  rowsminmaxsize?: string;
  gap?: string;
  padding?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  height?: string;
  minheight?: string;
  width?: string;
  minwidth?: string;
  aligny?: layoutTypes.alignY;
  alignx?: layoutTypes.alignX;
  bgcolor?: keyof themeTypes.colorsBase | string;
  color?: keyof themeTypes.colors | string;
  margin?: string;
  zindex?: number;
  breakpoints?: Array<layoutTypes.breakPoint>;
}
