import { Section } from '@/components/blocks/contents/section';
import { FigureAbout } from '../../../../utils/figures/perfil';
import { TextAbout } from '../../../../utils/texts/aboutme';

export const SectionAbout = () => {
  return (
    <Section
      key={'section-card-about'}
      id="section-card-about"
      alignx="center"
      aligny="center"
      flexwrap="wrap"
      direction="row"
      padding="1rem"
      margin="0 0 1.5rem 0"
      height="calc(100% - 7.5rem)"
      width="100%"
      gap="10px"
    >
      <FigureAbout />
      <TextAbout />
    </Section>
  );
};
