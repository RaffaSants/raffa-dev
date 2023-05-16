import { Figure } from '@/components/medias/figures';
import { imgFigureProps } from '@/components/medias/figures/types';
//import { LightBulb } from '../../icons/lightbulb';
import image from '../../../../../../../../public/lightbulb.svg';

const img: imgFigureProps = {
  src: image,
  alt: 'uma lampada acesa',
  height: 150,
  width: 150,
  priority: true,
  quality: 80
};

export const FigureLightBulb = () => {
  return (
    <Figure
      keyid="figure-lightbulb"
      position="absolute"
      top="75%"
      right="8%"
      img={img}
      type="flex"
      alignx="center"
      aligny="center"
      width="150px"
      height="150px"
      transform="rotate(-65deg)"
    ></Figure>
  );
};
