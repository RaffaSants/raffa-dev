'use client';

import { ReactNode, useState, useEffect } from 'react';
import { ThemeContext } from './context/theme.context';

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkTheme, setTheme] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('isDarkTheme');
    if (storedTheme) {
      setTheme(storedTheme === 'true');
    }
  }, []);

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
