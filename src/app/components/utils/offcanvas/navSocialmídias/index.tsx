import { SiGithub, SiYoutube } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import { GrInsta } from '../../icons/iconInsta';
import type * as T from '@/components/utils/navs/types';

const styles: T.LiStyle = {};

const itemStyle: T.LinkStyle = {
  fontSize: 'xl',
  color: 'primary',
  align: 'around'
};

export const SocialMidias: T.itens = [
  {
    id: 'icon-offCanvas-linkedin',
    icon: {
      icon: (
        <FaLinkedinIn
          fill="#0a63bc"
          style={{ transition: ' 0.5s ease-in-out' }}
        />
      )
    },
    path: 'https://www.linkedin.com/in/dev-raffaelc/',
    style: styles,
    linkstyle: itemStyle
  },
  {
    id: 'icon-offCanvas-github',
    icon: {
      icon: <SiGithub fill="gray" style={{ transition: ' 0.5s ease-in-out' }} />
    },
    path: 'https://github.com/RaffaSants',
    style: styles,
    linkstyle: itemStyle
  },
  {
    id: 'icon-offCanvas-instagram',
    icon: {
      icon: <GrInsta fill="url(#rg-instagram)" />
    },
    path: 'https://www.instagram.com/mnrafael/',
    style: styles,
    linkstyle: itemStyle
  },
  {
    id: 'icon-offCanvas-youtube',
    icon: {
      icon: <SiYoutube fill="red" style={{ transition: ' 0.5s ease-in-out' }} />
    },
    path: 'https://www.youtube.com/channel/UCfaV8rjEyCjK2kCB75jafFw',
    style: styles,
    linkstyle: itemStyle
  }
];

export const offCanvasSocialMidias: T.navigation = {
  id: 'navSocialMidias-offCanvas',
  direction: 'row',
  padding: '0 2.5rem',
  align: 'around',
  width: '100vw',
  bgcolor: 'tertiary',
  gap: '1.8rem',
  itens: SocialMidias
};
