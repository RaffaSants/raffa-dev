import * as layoutTypes from '@/types/layouts';
//import * as themeTypes from '@/types/theme';

export interface containerFlexBody {
  position?: layoutTypes.position;
  direction: layoutTypes.direction;
  height?: string;
  minheight: string;
  children: layoutTypes.children;
  className?: string;
}

export interface containerGridBody {
  columns: layoutTypes.columns;
  columnsminmaxsize?: string;
  rows?: layoutTypes.rows;
  rowsminmaxsize?: string;
  gap?: string;
  children?: layoutTypes.children;
}
