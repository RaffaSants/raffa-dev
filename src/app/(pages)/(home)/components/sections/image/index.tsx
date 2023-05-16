import { Section } from '@/components/blocks/contents/section';
import { Figure } from '@/components/medias/figures';
import type { imgFigureProps } from '@/components/medias/figures/types';
import image from '../../../../../../../public/image/background1.svg';

const img: imgFigureProps = {
  alt: 'mesa de trabalho de um desenvolvedor web, sobre a mesa estão alguns itens um notebook, um celular, uma xicará de café, um óculos, um caderno, uma caneta, um tablet e um óculos',
  src: image,
  priority: true,
  fill: true,
  quality: 80,
  sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
};

export const SectionImage = () => {
  return (
    <Section
      height="100%"
      minheight="250px"
      direction="column"
      alignx="center"
      aligny="center"
      width="100%"
      minwidth="300px"
    >
      <Figure
        keyid="figuremain"
        position="relative"
        type="flex"
        direction="column"
        height="100%"
        width="100%"
        alignx="center"
        aligny="center"
        img={img}
      />
    </Section>
  );
};
