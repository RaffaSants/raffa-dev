import * as layoutTypes from '@/types/layouts';
import * as themeTypes from '@/types/theme';

interface footerProps {
  position?: layoutTypes.position;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  height?: string;
  minheight?: string;
  width?: string;
  minwidth?: string;
  padding?: string;
  aligny?: layoutTypes.alignY;
  alignx?: layoutTypes.alignX;
  bgcolor?: keyof themeTypes.colorsBase | string;
  color?: keyof themeTypes.colors | string;
  children?: layoutTypes.children;
}

export type footerFlex = footerProps;

export type footerGrid = footerProps & {
  columns: layoutTypes.columns;
  columnsminmaxsize?: string;
  rows?: layoutTypes.rows;
  rowsminmaxsize?: string;
  gap?: string;
};
