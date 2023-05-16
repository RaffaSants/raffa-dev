import type { medias } from '@/components/utils/navs/types';
import { navOffCanvas } from '../components/utils/navs/buttons';
import { navPages } from '../components/utils/navs/pages';

export const Responsiveness: medias = [
  {
    sizes: { maxWidth: '768px' },
    comands: `#${navPages.id} {
      display: none;
    }

  #bt-toggleTheme-navSocialMidia {
    display: none;
  }
  #icon-socialMidia-Linkedin {
    svg {
      fill: blue;
    }
  }
  #icon-socialMidia-gitHub {
    svg {
      fill: gray;
    }
  }
  #icon-socialMidia-instagram {
    svg {
      fill: url(#rg-instagram);
    }
  }
  #icon-socialMidia-youtube {
    svg {
      fill: red;
    }
  }
  #nav-experience {
    align-items: center;
    flex-direction: row;
    border-radius: 5px 5px 0 0;
    width: 90%;
    height: fit-content;
    justify-content: space-between;
  }
  `
  },
  {
    sizes: { minWidth: '769px' },
    comands: `#${navOffCanvas.id} {
      display: none;
  }
    #bt-toggleTheme-navSocialMidia
  `
  }
];
