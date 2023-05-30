import type * as T from '@/components/utils/navs/types';

const styles: T.LiStyle = {
  hover: {
    after: `
      content: ' ';
      height: 2px;
      width: 0%;
      background-color: #aa6938;
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      transition: .5s linear;`,
    comands: 'width: 100%;'
  }
};

const itemStyle: T.LinkStyle = {
  color: 'primary',
  fontSize: 'm',
  align: 'center',
  selected: {
    after: `
    content: ' ';
    height: 2px;
    width: 100%;
    background-color: #aa6938;
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    `
  }
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

export const navPages: T.navigation = {
  id: 'navpages',
  align: 'center',
  height: 'fit-content',
  gap: '1.8rem',
  itens: Pages,
  breakpoints: [
    {
      sizes: { maxWidth: '768px' },
      comands: 'display: none'
    }
  ]
};
