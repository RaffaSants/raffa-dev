import './styles.scss';

import { ToggleToDarkTheme } from '../../utils/buttons/toggleTheme/component';
import { Logo } from '../../utils/logo/component';
import { OffCanvasProvider } from '@/contexts/offcanvas';

export const Header = () => {
  return (
    <OffCanvasProvider>
      <header>
        <Logo />
        <ToggleToDarkTheme />
      </header>
    </OffCanvasProvider>
  );
};
