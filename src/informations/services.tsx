import { ReactElement } from 'react';
import { MdImportantDevices } from 'react-icons/md';
import { BiCodeBlock } from 'react-icons/bi';
import { TbWorldSearch } from 'react-icons/tb';

type IServices = {
  icon: ReactElement;
  title: string;
  description: string;
};

export const servicesList: IServices[] = [
  {
    icon: <MdImportantDevices />,
    title: 'UI/UX',
    description:
      'Criação de interfaces intuitivas, focadas na experiência do usuário, desde a prototipagem até o produto final.'
  },
  {
    icon: <BiCodeBlock />,
    title: 'Web developement',
    description:
      'Desenvolvimento de sites e aplicações com alta performance, segurança e escalabilidade, totalmente adaptados às necessidades do seu negócio.'
  },
  {
    icon: <TbWorldSearch />,
    title: 'SEO',
    description:
      'Otimização de sites para motores de busca, com gestão de tráfego e estratégias de marketing para aumentar sua visibilidade online.'
  }
];
