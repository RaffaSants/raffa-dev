import { BlocksUtils } from '../style';
import type { utilsProps } from '../types';

export const BlockFigure = ({ children, ...args }: utilsProps) => {
  return (
    <BlocksUtils variant="figure" {...args}>
      {children}
    </BlocksUtils>
  );
};
