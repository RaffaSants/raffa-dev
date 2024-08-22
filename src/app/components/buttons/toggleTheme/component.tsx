'use client';
import './styles.scss';

import { useTheme } from '@/providers/theme/context/theme.context';

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
