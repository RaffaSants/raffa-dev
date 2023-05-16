import { BlocksUtils } from '../style';
import type { utilsProps } from '../types';

export const Video = ({ children, ...args }: utilsProps) => {
  return (
    <BlocksUtils variant="video" {...args}>
      {children}
    </BlocksUtils>
  );
};
