import { Article } from '@/components/blocks/contents/article';
import { Title } from '@/components/typography/title';
import { Text } from '@/components/typography/texts';

export const ExperienceOnix = () => {
  return (
    <Article
      id="onix-formaturas"
      width="100%"
      height="100%"
      aligny="center"
      gap="1rem"
      padding="1rem"
      position="relative"
      border="solid 1px #282C34"
      borderradius="0 5px 5px 0"
      top="0"
      notarget={{
        id: 'onix-formaturas',
        comands: `
        opacity: 0;
        display: none;
        `
      }}
      target={{
        id: 'onix-formaturas',
        comands: `scroll-margin-top: 22.7rem;`,
        after: `content: ' ';
          position: absolute;
          top: 7px;
          left: -7px;
          height: 30px;
          width: 2px;
          background-color: rgb(170, 105, 56);`,
        animation: {
          variant: 'opacity',
          time: '2.5s',
          delay: 'ease'
        }
      }}
    >
      <Title level="4" color="primary" weight="300" align="center">
        Assistente Administrativo jan/2017 - set/2022
      </Title>
      <Text size="m" color="primary" align="justify" weight="300">
        Durante o meu tempo na empresa, tive a oportunidade de me envolver com a
        implantação de softwares e, em especial, fui responsável pela
        implementação do software de gestão administrativo (SGE). Essa
        experiência despertou em mim um forte interesse pelo desenvolvimento de
        software.
      </Text>
      <Text size="m" color="primary" align="justify" weight="300">
        Com esse entusiasmo, desenvolvi um site para a empresa utilizando a
        plataforma WordPress, o que me incentivou a aprofundar meus estudos em
        desenvolvimento web.
      </Text>
    </Article>
  );
};
