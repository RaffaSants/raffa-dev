import { Nav } from '@/components/utils/navs';
import type * as T from '@/components/utils/navs/types';
import { BsFillPersonVcardFill } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { MdOutlineWork } from 'react-icons/md';
import { RiCodeView } from 'react-icons/ri';

const after = `
content: " ";
position: absolute;
bottom: -4.7rem;
right: 50%;
height: 4.5rem;
width: 1px;
background-color: rgb(40, 44, 52);
`;

const styleItens: T.LiStyle = {
  alignx: 'center',
  aligny: 'center',
  width: '5rem',
  height: '5rem',
  border: '1px solid rgb(40, 44, 52)',
  borderradius: '50%',
  after: after
};

const linkStyle: T.LinkStyle = {
  color: 'rgb(170, 105, 56)',
  align: 'center',
  fontSize: 'm',
  height: '95%',
  width: '95%'
};

const item: T.itens = [
  {
    id: 'nav-sections-about',
    path: `/about#card-about`,
    icon: { icon: <BsFillPersonVcardFill /> },
    target: '_parent',
    style: styleItens,
    linkstyle: linkStyle
  },
  {
    id: 'nav-sections-education',
    path: `/about#card-education`,
    icon: { icon: <FaGraduationCap /> },
    target: '_parent',
    style: styleItens,
    linkstyle: linkStyle
  },
  {
    id: 'nav-sections-experience',
    path: `/about#card-experience`,
    icon: { icon: <MdOutlineWork /> },
    target: '_parent',
    style: styleItens,
    linkstyle: linkStyle
  },
  {
    id: 'nav-sections-skills',
    path: `/about#card-skills`,
    icon: { icon: <RiCodeView /> },
    target: '_parent',
    style: styleItens,
    linkstyle: linkStyle
  }
];

const nav: T.navigation = {
  id: 'nav-sections',
  itens: item,
  height: '390px',
  bgcolor: 'primary',
  gap: '4.5rem',
  direction: 'column'
};

export const NavSections = () => {
  return (
    <Nav
      key={'nav-sections'}
      direction="column"
      navgations={[nav]}
      alignx="center"
      aligny="center"
      bgcolor="primary"
    />
  );
};
