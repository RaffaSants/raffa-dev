'use client';

import { ReactNode, useState } from 'react';
import { ThemeContext } from './context/theme.context';

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkTheme, setTheme] = useState<boolean>(() => {
    if (window) {
      return localStorage.getItem('isDarkTheme')?.toLowerCase() === 'true'
        ? true
        : false;
    }
    return false;
  });

  const toggleTheme = () => {
    localStorage.setItem('isDarkTheme', isDarkTheme ? 'false' : 'true');
    setTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
