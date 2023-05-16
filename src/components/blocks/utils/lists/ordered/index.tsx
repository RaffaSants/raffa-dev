import { BlocksUtils } from '../../style';
import type { utilsProps } from '../../types';

export const OrderedList = ({ children, ...args }: utilsProps) => {
  return (
    <BlocksUtils variant="ol" {...args}>
      {children}
    </BlocksUtils>
  );
};
