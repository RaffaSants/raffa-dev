import { Logo } from '@/app/components/logo/component';
import './styles.scss';
import { ToggleToDarkTheme } from '@/app/components/buttons/toggleTheme/component';

export const Header = () => {
  return (
    <header>
      <Logo />
      <ToggleToDarkTheme />
    </header>
  );
};
