import { Figure } from '@/components/medias/figures';
import { imgFigureProps } from '@/components/medias/figures/types';
import perfilPicture from '../../../../../../../../public/image/me_2.jpg';
import { Text } from '@/components/typography/texts';

const image: imgFigureProps = {
  alt: 'img-perfil',
  src: perfilPicture,
  height: 150,
  width: 150,
  borderradius: '50%',
  priority: true,
  quality: 80
};

const Caption = () => {
  return (
    <>
      <Text color="primary" size="m">
        Rafael da Conceição
      </Text>
      <Text color="primary" size="s">
        28 anos, estudante de Eng. de software
      </Text>
    </>
  );
};

export const FigureAbout = () => {
  return (
    <Figure
      keyid="figure-about"
      position="relative"
      type="flex"
      direction="column"
      aligny="center"
      alignx="center"
      padding="0 0 2.5rem 0"
      height="50%"
      minheight="150px"
      width="100%"
      minwidth="150px"
      maxwidth="300px"
      img={image}
      caption={<Caption />}
    ></Figure>
  );
};
