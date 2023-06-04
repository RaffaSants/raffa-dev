import { Section } from '@/components/blocks/contents/section';
import { Figure } from '@/components/medias/figures';
import type { imgFigureProps } from '@/components/medias/figures/types';
import image from '../../../../../../../public/image/workspace.png';

const img: imgFigureProps = {
  alt: 'mesa de trabalho de um desenvolvedor web, sobre a mesa estão alguns itens um notebook, um celular, uma xicará de café, um óculos, um caderno, uma caneta, um tablet e um óculos',
  src: image,
  priority: true,
  fill: true,
  quality: 90,
  sizes: '(max-width: 768px) 80vw, (min-width: 769px) 40vw',
  fit: 'contain'
};

export const SectionImage = () => {
  return (
    <Section
      height="95%"
      minheight="250px"
      direction="column"
      alignx="center"
      aligny="center"
      width="45%"
      minwidth="300px"
      breakpoints={[
        {
          sizes: { maxWidth: '768px' },
          comands: 'width: 100%; max-height: 340px;'
        }
      ]}
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
