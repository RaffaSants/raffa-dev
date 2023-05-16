import * as layoutTypes from '@/types/layouts';
//import * as themeTypes from '@/types/theme';

export interface containerFlexMain {
  direction: layoutTypes.direction;
  margin: string;
  height: string;
  width: string;
  minwidth?: string;
  alignY: layoutTypes.alignY;
  alignX: layoutTypes.alignX;
  children: layoutTypes.children;
}

export interface containerGridMain {
  columns?: 'auto-fill' | 12 | 16;
  minheight?: string;
  columnsminmaxsize?: string;
  rows?: 'auto' | number;
  rowsminmaxsize?: string;
  gap?: string;
  padding?: string;
  margin: string;
  height?: string;
  children: layoutTypes.children;
}
