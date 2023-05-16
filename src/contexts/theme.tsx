'use client';

import { ReactNode, createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import lightTheme from '@/styles/themes/light';
import darkTheme from '@/styles/themes/dark';
import type { theme } from '@/types/theme';

interface ThemeContext {
  theme: theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<theme>(darkTheme);
  const toggleTheme = () =>
    setTheme(theme.title === 'Light' ? darkTheme : lightTheme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
