import { Figure } from '@/components/medias/figures';
import img from '../../../../../../public/image/building.png';
import { imgFigureProps } from '@/components/medias/figures/types';
import { Title } from '@/components/typography/title';
import { Text } from '@/components/typography/texts';

export const FigureBuilding = () => {
  const fig: imgFigureProps = {
    src: img,
    alt: 'pagina em construção'
  };
  return (
    <Figure
      keyid="figBuilding-project"
      type="flex"
      img={fig}
      direction="row-reverse"
      caption={
        <>
          <Title color="primary" level="1">
            Página em construção
          </Title>
          <Text color="primary" size="l" align="justify">
            Esta página está em construção você pode acessar os meu projetos
            visitando a minha página do github.{' '}
          </Text>
        </>
      }
    />
  );
};
