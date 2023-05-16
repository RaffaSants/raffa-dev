import type * as T from '@/components/utils/navs/types';

const styles: T.LiStyle = {};

const itemStyle: T.LinkStyle = {
  selected: {
    color: '#aa6938'
  },
  fontSize: 'xxl',
  color: 'primary',
  align: 'center'
};

export const Pages: T.itens = [
  {
    id: 'li-home',
    title: 'Home',
    path: '/',
    style: styles,
    linkstyle: itemStyle
  },
  {
    id: 'li-sobre',
    title: 'Sobre',
    path: '/about',
    style: styles,
    linkstyle: itemStyle
  },
  {
    id: 'li-projetos',
    title: 'Projetos',
    path: '/projects',
    style: styles,
    linkstyle: itemStyle
  },
  {
    id: 'li-article',
    title: 'Blog',
    path: '/articles',
    style: styles,
    linkstyle: itemStyle
  }
];

export const offCanvasPages: T.navigation = {
  id: 'navpages-offCanvas',
  direction: 'column',
  width: '100vw',
  align: 'right',
  bgcolor: 'tertiary',
  gap: '6.8rem',
  itens: Pages
};
