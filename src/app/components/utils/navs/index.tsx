import { Nav } from '@/components/utils/navs';
import { navSocialMidias } from './socialmidia';
import { navPages } from './pages';
import { navOffCanvas } from './buttons';
//import { Responsiveness } from '@/app/style/responsiveness';

export const NavPage = () => {
  return (
    <Nav
      direction="row"
      alignx="between"
      aligny="center"
      height="fit-content"
      minwidth="100%"
      navgations={[navPages, navSocialMidias, navOffCanvas]}
    />
  );
};
