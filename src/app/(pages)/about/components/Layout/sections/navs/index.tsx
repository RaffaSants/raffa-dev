import { Side } from '@/components/blocks/contents/side';
import { NavSections } from '../../../utils/navs/cards';

export const SideNav = () => {
  return (
    <Side
      position="sticky"
      top="14.5rem"
      alignx="center"
      aligny="center"
      bgcolor="primary"
      width="10%"
      height="400px"
      margin="0 0 0 5rem"
      padding="1rem 0 0 0"
      borderradius="15px"
      color="primary"
    >
      <NavSections />
    </Side>
  );
};
