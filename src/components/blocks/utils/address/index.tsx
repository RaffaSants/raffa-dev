import { BlocksUtils } from '../style';
import type { utilsProps } from '../types';

export const Addrees = ({ children, ...args }: utilsProps) => {
  return (
    <BlocksUtils variant="address" {...args}>
      {children}
    </BlocksUtils>
  );
};
