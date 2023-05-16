import { Section } from '@/components/blocks/contents/section';
import { NavExperience } from '../../../../utils/navs/experience';
import { SectionExperiences } from '../../experience';

export const SectionExperience = () => {
  return (
    <Section
      key={'section-card-experience'}
      id="section-card-experience"
      position="relative"
      alignx="center"
      aligny="center"
      direction="row"
      flexwrap="wrap"
      height="calc(100% - 7.5rem)"
      width="100%"
    >
      <NavExperience />
      <SectionExperiences />
    </Section>
  );
};
