import * as layoutTypes from '@/types/layouts';
import * as themeTypes from '@/types/theme';

export type utilsProps = {
  keyid: string;
  type: 'flex' | 'grid';
  direction?: layoutTypes.direction;
  columns?: string;
  minmaxcolumns?: string;
  rows?: string;
  position?: layoutTypes.position;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  alignx?: layoutTypes.alignX;
  aligny?: layoutTypes.alignY;
  padding?: string;
  margin?: string;
  height?: string;
  maxheight?: string;
  minheight?: string;
  width?: string;
  maxwidth?: string;
  minwidth?: string;
  color?: keyof themeTypes.colors | string;
  bgcolor?: keyof themeTypes.colorsBase;
  gap?: string;
  autowrap?: boolean;
  borderradius?: string;
  index?: number;
  transform?: string;
  breakpoints?: Array<layoutTypes.breakPoint>;
  children?: layoutTypes.children;
};

export interface utilsStyle extends utilsProps {
  variant: 'address' | 'audio' | 'figure' | 'ul' | 'ol' | 'table' | 'video';
}
