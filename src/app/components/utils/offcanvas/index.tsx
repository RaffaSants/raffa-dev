import { RiMenu5Line, RiCloseLine } from 'react-icons/ri';

import { OffCanvas } from '@/components/utils/offcanvas';
import { Nav } from '@/components/utils/navs';
import { offCanvasPages } from './navPages';

import type * as typeOffCanvas from '@/components/utils/offcanvas/types';

const buttonOpen: typeOffCanvas.buttonCanvas = {
  variant: 'circle',
  height: 'm',
  icon: <RiMenu5Line fill="currentColor" />,
  color: 'dark',
  bgcolor: 'transparent'
};

const buttonclose: typeOffCanvas.buttonCanvas = {
  variant: 'circle',
  height: 'm',
  icon: <RiCloseLine fill="currentColor" />,
  color: 'dark',
  bgcolor: 'transparent'
};

const navigations = [offCanvasPages];

const body = (
  <Nav
    key="nav-offCanvas"
    alignx="around"
    direction="column"
    minwidth="100vw"
    height="calc(100vh - 5rem)"
    bgcolor="tertiary"
    navgations={navigations}
    isOffCanvas={true}
  />
);

const card: typeOffCanvas.cardOffCanvas = {
  top: '0px',
  left: '0px',
  bgcolor: 'tertiary',
  height: '100vh',
  width: '100vw',
  buttonclose: buttonclose,
  body: body
};

export const OffCanvasNav = () => {
  return (
    <OffCanvas keyid="offCanvas-nav" buttonopen={buttonOpen} card={card} />
  );
};
