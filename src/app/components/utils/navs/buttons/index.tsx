import type * as T from '@/components/utils/navs/types';
import { OffCanvasNav } from '../../offcanvas';
import { ToggleTheme } from '@/app/components/utils/buttons/toggleTheme';

const styles: T.LiStyle = {
  alignx: 'center',
  aligny: 'center'
};

const itemStyle: T.LinkStyle = {
  fontSize: 'l',
  align: 'center',
  color: 'primary'
};

const navButtons: T.itens = [
  {
    id: 'nav-button-toggleTheme',
    icon: { icon: <ToggleTheme id="nav" /> },
    style: styles,
    linkstyle: itemStyle
  },
  {
    id: 'nav-button-offCanvas',
    icon: { icon: <OffCanvasNav /> },
    style: styles,
    linkstyle: itemStyle
  }
];

export const navOffCanvas: T.navigation = {
  id: 'navOffCanvas',
  align: 'center',
  gap: '1rem',
  height: 'fit-content',
  itens: navButtons,
  breakpoints: [{ sizes: { minWidth: '769px' }, comands: 'display: none;' }]
};
