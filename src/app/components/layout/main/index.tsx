import { ReactNode } from 'react';
import { GridMain } from '@/components/blocks/containers/main/grid';

export const Main = ({ children }: { children: ReactNode }) => {
  return (
    <GridMain
      columns="auto-fill"
      gap="1rem"
      columnsminmaxsize="repeat(auto-fit, minmax(320px, 1fr))"
      minheight="calc(100vh - 17rem)"
      padding="0 5%"
      margin="2.5rem 0"
    >
      {children}
    </GridMain>
  );
};
