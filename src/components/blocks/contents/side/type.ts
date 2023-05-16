import * as layoutTypes from '@/types/layouts';
import { contentStylesProps } from '../types';

export interface contentSideProps extends contentStylesProps {
  children: layoutTypes.children;
}
