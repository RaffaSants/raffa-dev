'use client';
import './styles.scss';

import { useTheme } from '@/providers/theme/context/theme.context';
import { BsBrightnessHighFill, BsMoonStarsFill } from 'react-icons/bs';

export const ToggleToDarkTheme = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  console.log(isDarkTheme);

  return (
    <label className="toggleTheme">
      <input
        type="checkbox"
        name="toggleToDarkTheme"
        onChange={toggleTheme}
        checked={isDarkTheme}
      />
      <figure>
        <BsBrightnessHighFill aria-label="desativar tema escuro" />
        <BsMoonStarsFill aria-label="ativar tema escuro" />
      </figure>
    </label>
  );
};
