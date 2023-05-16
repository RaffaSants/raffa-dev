import * as layoutTypes from '@/types/layouts';
import { contentStylesProps } from '../types';

export interface contentArticleProps extends contentStylesProps {
  children?: layoutTypes.children;
}
