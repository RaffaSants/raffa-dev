export type Project = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  links: {
    prototype?: string;
    repo?: string;
    site?: string;
  };
};

export const projects: Project[] = [
  {
    imageSrc: '',
    imageAlt: '',
    title: 'CoreNote App',
    description:
      'projeto de gestão de tarefas proposto pela empresa Corelab em seu desafio de código. O projeto consiste no desenvolvimento de um aplicativo (front-end e back-end) que permite aos usuários gerenciar suas tarefas por meio de blocos de notas, possibilitando a criação, visualização, edição e exclusão de notas, além de classificá-las por cores e favoritos.',
    links: {
      prototype: '#'
    }
  },
  {
    imageSrc: '',
    imageAlt: '',
    title: 'CoreNote App',
    description:
      'projeto de gestão de tarefas proposto pela empresa Corelab em seu desafio de código. O projeto consiste no desenvolvimento de um aplicativo (front-end e back-end) que permite aos usuários gerenciar suas tarefas por meio de blocos de notas, possibilitando a criação, visualização, edição e exclusão de notas, além de classificá-las por cores e favoritos.',
    links: {
      prototype: '#',
      repo: '#'
    }
  },
  {
    imageSrc: '',
    imageAlt: '',
    title: 'CoreNote App',
    description:
      'projeto de gestão de tarefas proposto pela empresa Corelab em seu desafio de código. O projeto consiste no desenvolvimento de um aplicativo (front-end e back-end) que permite aos usuários gerenciar suas tarefas por meio de blocos de notas, possibilitando a criação, visualização, edição e exclusão de notas, além de classificá-las por cores e favoritos.',
    links: {
      prototype: '#',
      repo: '#',
      site: '#'
    }
  }
];
