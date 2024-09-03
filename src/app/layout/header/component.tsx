import { Logo } from '@/app/components/logo/component';
import './styles.scss';
import { ToggleToDarkTheme } from '@/app/components/buttons/toggleTheme/component';

export const Header = () => {
  return (
    <header>
      <Logo />
      <ul>
        <li>
          <a href="#Services">Serviços</a>
        </li>
        <li>
          <a href="#Projects">Projetos</a>
        </li>
        <li>
          <a href="#Tools">Tecnologias</a>
        </li>
      </ul>
      <ToggleToDarkTheme />
    </header>
  );
};
