import * as layoutTypes from '@/types/layouts';
//import * as themeTypes from '@/types/theme';

export interface containerFlexSide {
  height: string;
  width: string;
  minwidth: string;
  aligny: layoutTypes.alignY;
  alignx: layoutTypes.alignX;
  children: layoutTypes.children;
}

export interface containerGridSide {
  columns?: layoutTypes.columns;
  columnsminmaxsize?: string;
  rows?: layoutTypes.rows;
  rowsminmaxsize?: string;
  gap?: string;
  children: layoutTypes.children;
}
