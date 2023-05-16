import * as typeTheme from '@/types/theme';
import * as layoutTypes from '@/types/layouts';

export type variant =
  | 'default'
  | 'outline'
  | 'circle'
  | 'circle-outline'
  | 'switch'
  | 'text';

export type buttonStyle = {
  variant: variant;
  color?: keyof typeTheme.colors;
  bgcolor: keyof typeTheme.colors | 'transparent';
  height: keyof typeTheme.height;
  minWidth?: string;
  hover?: boolean;
  animation?: layoutTypes.animation;
};

export type buttonProps = {
  id: string;
  color: keyof typeTheme.colors;
  bgcolor: keyof typeTheme.colors | 'transparent';
  height: keyof typeTheme.height;
  minWidth?: string;
  hover?: boolean;
  onClick: () => void;
  children: layoutTypes.children;
  animation?: layoutTypes.animation;
};
