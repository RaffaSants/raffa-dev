import './styles.scss';

import { Logo } from '@/app/components/logo/component';
import { ToggleToDarkTheme } from '@/app/components/buttons/toggleTheme/component';
import { Nav } from '@/app/components/nav/componente';
import { BtMenu } from '@/app/components/buttons/toggleMenu/component';

export const Header = () => {
  return (
    <header>
      <Logo />
      <Nav />
      <section className="butons">
        <ToggleToDarkTheme />
        <BtMenu />
      </section>
    </header>
  );
};
