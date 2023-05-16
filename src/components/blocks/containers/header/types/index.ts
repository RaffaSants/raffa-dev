import * as layoutTypes from '@/types/layouts';
import * as themeTypes from '@/types/theme';

export interface containerFlexHeader {
  zindex?: number;
  position?: layoutTypes.position;
  top?: string;
  bottom?: string;
  height: string;
  width?: string;
  minwidth?: string;
  padding?: string;
  aligny: layoutTypes.alignY;
  alignx: layoutTypes.alignX;
  bgcolor?: keyof themeTypes.colorsBase | string;
  children?: layoutTypes.children;
}

export interface containerGridHeader {
  position: layoutTypes.position;
  columns?: layoutTypes.columns;
  columnsminmaxsize?: string;
  rows?: layoutTypes.rows;
  rowsminmaxsize?: string;
  gap?: string;
  children?: layoutTypes.children;
}
