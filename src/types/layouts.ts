import { ReactNode } from 'react';
import { IconType } from 'react-icons';
//import type * as themeTypes from './theme';

export type height = 'fix-content' | string;

export type width = 'fix-content' | string;

export type direction = 'row' | 'column';

export type alignX = 'left' | 'center' | 'right' | 'around' | 'between';

export type alignY = 'top' | 'center' | 'botton';

export type animation = {
  title?: string;
  from?: string;
  to: string;
  delay?: string;
  duration?: string;
  direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
  repeat?: 'infinite' | number;
};

export type breakPoint = {
  sizes: {
    minWidth?: string;
    maxWidth?: string;
  };
  comands: string;
};

export type hover = {
  itemid?: string;
  comands: string;
  before?: string;
  after?: string;
};

export type position = 'absolute' | 'fixed' | 'relative' | 'sticky';

export type children = ReactNode;

export type columns = 12 | 16 | 'auto-fill';

export type rows = 'auto-fill' | number;

export type icons = IconType | string;

export type target = {
  id: string;
  comands: string;
  before?: string;
  after?: string;
  animation?: {
    variant?: 'opacity';
    time?: string;
    delay?: string;
  };
};
