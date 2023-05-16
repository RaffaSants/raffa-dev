import { BlocksUtils } from '../style';
import type { utilsProps } from '../types';

export const table = ({ children, ...args }: utilsProps) => {
  return (
    <BlocksUtils variant="table" {...args}>
      {children}
    </BlocksUtils>
  );
};
