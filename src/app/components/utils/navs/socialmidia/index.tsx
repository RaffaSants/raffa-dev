import { SiGithub, SiYoutube } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import { GrInsta } from '../../icons/iconInsta';
import { ToggleTheme } from '@/app/components/utils/buttons/toggleTheme';
import type * as T from '@/components/utils/navs/types';

const styles: T.LiStyle = {};

const itemStyle: T.LinkStyle = {
  fontSize: 'l',
  color: 'primary',
  align: 'center'
};

export const SocialMidias: T.itens = [
  {
    id: 'icon-socialMidia-Linkedin',
    arialabel: 'visitar o meu perfil no linkedin',
    target: '_blank',
    icon: {
      icon: <FaLinkedinIn />,
      hover: { comands: 'fill: #0a63bc;' }
    },
    path: 'https://www.linkedin.com/in/dev-raffaelc/',
    style: styles,
    linkstyle: itemStyle
  },
  {
    id: 'icon-socialMidia-gitHub',
    arialabel: 'visitar o meu perfil no github',
    target: '_blank',
    icon: {
      icon: <SiGithub />,
      hover: { comands: 'fill: gray;' }
    },
    path: 'https://github.com/RaffaSants',
    style: styles,
    linkstyle: itemStyle
  },
  {
    id: 'icon-socialMidia-instagram',
    arialabel: 'visitar o meu perfil no instagram',
    target: '_blank',
    icon: {
      icon: <GrInsta />,
      hover: { comands: 'fill: url(#rg-instagram)' }
    },
    path: 'https://www.instagram.com/mnrafael/',
    style: styles,
    linkstyle: itemStyle
  },
  {
    id: 'icon-socialMidia-youtube',
    arialabel: 'visitar o meu canal no youtube',
    target: '_blank',
    icon: {
      icon: <SiYoutube />,
      hover: { comands: 'fill: red;' }
    },
    path: 'https://www.youtube.com/channel/UCfaV8rjEyCjK2kCB75jafFw',
    style: styles,
    linkstyle: itemStyle
  },
  {
    id: 'bt-toggleTheme-navSocialMidia',
    icon: { icon: <ToggleTheme id="bt" /> },
    style: styles,
    linkstyle: itemStyle
  }
];

export const navSocialMidias: T.navigation = {
  id: 'navSocialMidias',
  align: 'center',
  bgcolor: 'tertiary',
  height: 'fit-content',
  gap: '1.8rem',
  itens: SocialMidias
};
