import { ReactNode } from 'react';
import { GridMain } from '@/components/blocks/containers/main/grid';

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <GridMain
      columns="auto-fill"
      gap="1rem"
      columnsminmaxsize="repeat(auto-fit, minmax(320px, 1fr))"
      minheight="80vh"
      padding="0 5%"
      margin="25px 0"
    >
      {children}
    </GridMain>
  );
};
