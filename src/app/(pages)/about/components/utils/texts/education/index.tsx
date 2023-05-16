import { Article } from '@/components/blocks/contents/article';
import { Text } from '@/components/typography/texts';
import { TextLink } from '@/components/utils/links/text/style';

export const TextEducation = () => {
  return (
    <Article
      width="80%"
      height="100%"
      alignx="left"
      padding="2.5rem 0"
      gap="1.5rem"
    >
      <Text size="m" color="primary" align="justify">
        Bacharelado em Engenharia de software - cursando, previsão de formatura
        jul/2025
      </Text>
      <Text size="m" color="primary" align="justify">
        USER EXPERIENCE INTERFACES DIGITAIS - Sesi/Senai - cursando
      </Text>
      <Text size="m" color="primary" align="justify">
        Desenvolvimento web - Udemy - 2019
      </Text>
      <Text size="m" color="primary" align="justify">
        Estudo muito buscando sempre aprimorar minhas habilidades em tecnologias
        e linguagens. Para isso, utilizo diversas fontes de aprendizado,
        incluindo documentações oficiais e aulas online de cursos gratuitos,
        como os vídeos do{' '}
        <TextLink
          href={'https://www.youtube.com/@CursoemVideo'}
          target="_blank"
          color="secondary"
        >
          Curso em Vídeo
        </TextLink>{' '}
        oferecidos pelo Gustavo Guanabara, o curso{' '}
        <TextLink
          href={'https://www.youtube.com/@WillianJustenCursos'}
          target="_blank"
          color="secondary"
        >
          React Avançado
        </TextLink>{' '}
        do Willian Justim, além dos canais do youtube{' '}
        <TextLink
          href={'https://www.youtube.com/@WillianJustenCursos'}
          target="_blank"
          color="secondary"
        >
          Dev Soltinho
        </TextLink>{' '}
        do Mario Souto e da{' '}
        <TextLink
          href={'https://www.youtube.com/@rocketseat'}
          target="_blank"
          color="secondary"
        >
          Rocketseat.
        </TextLink>
      </Text>
    </Article>
  );
};
