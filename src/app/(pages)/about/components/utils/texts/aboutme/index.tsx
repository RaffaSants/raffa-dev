import { Text } from '@/components/typography/texts';
import { Article } from '@/components/blocks/contents/article';

export const TextAbout = () => {
  return (
    <Article
      width="90%"
      maxwidth="450px"
      minwidth="200px"
      alignx="left"
      gap="1.5rem"
      margin="0 0 1rem 0"
    >
      <Text size="m" color="primary" align="justify">
        Formado em tec. em administração pelo SENAC, estou em fase de transição
        de carreira, sempre dividi o meu amor por gestão empresarial com
        desenvolvimento tecnológico.
      </Text>
      <Text size="m" color="primary" align="justify">
        Em janeiro de 2022 iniciei o curso de Eng. de Software e decidi
        ingressar de vez nesse ramo. Atualmente, estou me dedicando ao
        aprendizado do desenvolvimento front-end.
      </Text>
    </Article>
  );
};
