import { BlocksUtils } from '../../style';
import type { utilsProps } from '../../types';

export const UnorderedList = ({ children, ...args }: utilsProps) => {
  return (
    <BlocksUtils variant="ul" {...args}>
      {children}
    </BlocksUtils>
  );
};
