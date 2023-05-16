import { BlocksUtils } from '../style';
import type { utilsProps } from '../types';

export const Audio = ({ children, ...args }: utilsProps) => {
  return (
    <BlocksUtils variant="audio" {...args}>
      {children}
    </BlocksUtils>
  );
};
