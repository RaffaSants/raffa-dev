import { ReactNode } from 'react';
import { ThemeContextProvider } from './theme/theme.provider';

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
};
