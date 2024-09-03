import { ReactNode } from 'react';
import { FaCss3, FaHtml5 } from 'react-icons/fa';
import {
  IoLogoGithub,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoStencil
} from 'react-icons/io5';
import {
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoSass,
  BiLogoTailwindCss,
  BiLogoTypescript
} from 'react-icons/bi';
import { RiNextjsFill } from 'react-icons/ri';
import {
  SiAngular,
  SiJasmine,
  SiJest,
  SiMui,
  SiNestjs,
  SiReactivex
} from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';

type Tool = {
  title: string;
  icon: ReactNode;
  linkToDoc: string;
};

export const Tools: Tool[] = [
  {
    title: 'HTML',
    icon: <FaHtml5 />,
    linkToDoc: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML'
  },
  {
    title: 'CSS',
    icon: <FaCss3 />,
    linkToDoc: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS'
  },
  {
    title: 'Javascript',
    icon: <IoLogoJavascript />,
    linkToDoc: 'https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript'
  },
  {
    title: 'Typescript',
    icon: <BiLogoTypescript />,
    linkToDoc: 'https://www.typescriptlang.org/'
  },
  {
    title: 'SASS',
    icon: <BiLogoSass />,
    linkToDoc: 'https://sass-lang.com/'
  },
  {
    title: 'Tailwind',
    icon: <BiLogoTailwindCss />,
    linkToDoc: 'https://tailwindcss.com/'
  },
  {
    title: 'Material UI',
    icon: <SiMui />,
    linkToDoc: 'https://mui.com/'
  },
  {
    title: 'Stenciljs',
    icon: <IoLogoStencil />,
    linkToDoc: 'https://stenciljs.com/'
  },
  {
    title: 'Nextjs',
    icon: <RiNextjsFill />,
    linkToDoc: 'https://nextjs.org/'
  },
  {
    title: 'React',
    icon: <IoLogoReact />,
    linkToDoc: 'https://react.dev/'
  },
  {
    title: 'Angular',
    icon: <SiAngular />,
    linkToDoc: 'https://angular.io/'
  },
  {
    title: 'RxJS',
    icon: <SiReactivex />,
    linkToDoc: 'https://rxjs.dev/'
  },
  {
    title: 'Nestjs',
    icon: <SiNestjs />,
    linkToDoc: 'https://nextjs.org/'
  },
  {
    title: 'Postgresql',
    icon: <BiLogoPostgresql />,
    linkToDoc: 'https://www.postgresql.org/'
  },
  {
    title: 'MongoDB',
    icon: <BiLogoMongodb />,
    linkToDoc: 'https://www.mongodb.com/'
  },
  {
    title: 'MySql',
    icon: <GrMysql />,
    linkToDoc: 'https://www.mysql.com/'
  },
  {
    title: 'Github',
    icon: <IoLogoGithub />,
    linkToDoc: 'https://github.com/'
  },
  {
    title: 'Husky',
    icon: <RiNextjsFill />,
    linkToDoc: 'https://typicode.github.io/husky/'
  },
  {
    title: 'Jest',
    icon: <SiJest />,
    linkToDoc: 'https://jestjs.io/'
  },
  {
    title: 'Jasmine',
    icon: <SiJasmine />,
    linkToDoc: 'https://jasmine.github.io/'
  }
];
