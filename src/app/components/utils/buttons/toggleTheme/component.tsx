'use client';

import { useTheme } from '@/providers/theme/context/theme.context';
import './styles.scss';

export const ToggleToDarkTheme = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  return (
    <label>
      <input
        type="checkbox"
        name="toggleToDarkTheme"
        onChange={toggleTheme}
        checked={isDarkTheme}
      />
    </label>
  );
};
