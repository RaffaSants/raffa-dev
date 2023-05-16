import * as layoutTypes from '@/types/layouts';
import { contentStylesProps } from '../types';

export interface contentHeaderProps extends contentStylesProps {
  children: layoutTypes.children;
}
