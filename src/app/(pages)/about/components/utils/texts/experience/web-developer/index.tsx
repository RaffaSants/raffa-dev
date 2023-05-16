import { Text } from '@/components/typography/texts';
import { Article } from '@/components/blocks/contents/article';

export const ExperienceWebDeveloper = () => {
  return (
    <Article
      id="web-developer"
      width="100%"
      height="100%"
      aligny="center"
      gap="1rem"
      padding="1rem"
      position="relative"
      border="solid 1px #282C34"
      borderradius="0 5px 5px 0"
      top="0"
      target={{
        id: 'web-developer',
        comands: `scroll-margin-top: 22.7rem;`,
        after: `
        content: ' ';
        position: absolute;
        top: 48px;
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
      notarget={{
        id: 'web-developer',
        comands: `
        opacity: 0;
        display: none;`
      }}
      breakpoints={[
        { sizes: { maxWidth: '768px' }, comands: 'border-radius: 0 0 5px 5px;' }
      ]}
    >
      <Text size="m" color="primary" align="justify" weight="300">
        Estou à procura de minha primeira experiência de trabalho como web
        developer front-end. Quero desenvolver minhas habilidades e também
        contribuir para o sucesso da empresa.Gostaria de atuar em um ambiente
        que promova o crescimento e ofereça perspectivas de futuro.
      </Text>
    </Article>
  );
};
