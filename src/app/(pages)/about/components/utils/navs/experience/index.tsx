'use client';

import { Nav } from '@/components/utils/navs';
import type * as T from '@/components/utils/navs/types';

const styles: T.LiStyle = {
  height: '4.5rem',
  width: '100%',
  maxwidth: '250px',
  padding: '0 1rem',
  bgcolor: 'tertiary',
  alignx: 'left',
  borderbottom: 'solid 1px hsl(222, 14%, 10%)',
  borderradius: '5px 0 0 5px'
};

const linkStyle: T.LinkStyle = {
  color: 'rgb(170, 105, 56)',
  align: 'left',
  fontSize: 'm',
  width: '100%'
};

const navItens: T.itens = [
  {
    id: 'experience-ônix',
    title: 'Ônix Formaturas',
    path: '/about#onix-formaturas',
    target: '_parent',
    linkstyle: linkStyle,
    style: styles
  },
  {
    id: 'experience-web',
    title: 'Web development',
    path: '/about#web-developer',
    target: '_parent',
    linkstyle: linkStyle,
    style: styles
  }
];

const nav: T.navigation = {
  id: 'nav-experience',
  itens: navItens,
  borderradius: '5px 0 0 5px',
  height: '292.5px',
  width: '100%',
  gap: '1.5rem'
};

export const NavExperience = () => {
  return (
    <Nav
      direction="column"
      alignx="center"
      aligny="center"
      navgations={[nav]}
      height="fit-content"
      width="100%"
    />
  );
};
