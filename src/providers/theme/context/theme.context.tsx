'use client';
import { createContext, useContext } from 'react';

interface ThemeContext {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

export const useTheme = () => useContext(ThemeContext);
