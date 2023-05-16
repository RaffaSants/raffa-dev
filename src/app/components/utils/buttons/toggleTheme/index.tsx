'use client';

import { useContext } from 'react';
import { FiSun } from 'react-icons/fi';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { ThemeContext } from '@/contexts/theme';
import { ButtonCircle } from '@/components/utils/buttons/circle';

export const ToggleTheme = (id: { id: string }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return theme.title === 'Light' ? (
    <ButtonCircle
      id={`button-toggle-theme-${id}-dark`}
      arialabel="alterar a página para o tema dark"
      bgcolor="transparent"
      color="dark"
      height="m"
      onClick={toggleTheme}
      animation={{
        from: 'transform: rotate(0deg);',
        to: 'transform: rotate(15deg);',
        duration: '2s',
        repeat: 'infinite',
        direction: 'alternate'
      }}
    >
      <BsFillMoonStarsFill fill="black" />
    </ButtonCircle>
  ) : (
    <ButtonCircle
      id={`button-toggle-theme-${id}-light`}
      arialabel="alterar a página para o tema light"
      bgcolor="transparent"
      color="light"
      height="m"
      onClick={toggleTheme}
      animation={{
        from: 'transform: rotate(0deg);',
        to: 'transform: rotate(360deg);',
        duration: '25s',
        repeat: 'infinite'
      }}
    >
      <FiSun fill="white" stroke="white"></FiSun>
    </ButtonCircle>
  );
};
