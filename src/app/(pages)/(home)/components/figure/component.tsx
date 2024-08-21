import './styles.scss';
import Image from 'next/image';
import image from '../../../../../../public/image/workspace.png';

export const SectionImage = () => {
  return (
    <figure className="main-figure">
      <Image
        alt="mesa de trabalho de um desenvolvedor web, contendo um notebook, um celular, uma xicará de café, um óculos, um caderno, uma caneta, um tablet e um óculos"
        src={image}
        priority={true}
        fill={true}
        quality={90}
        sizes="(max-width: 768px) 80vw, (min-width: 769px) 40vw"
      />
    </figure>
  );
};
