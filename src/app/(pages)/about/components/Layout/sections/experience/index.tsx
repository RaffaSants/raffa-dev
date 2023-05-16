import { Section } from '@/components/blocks/contents/section';
import { ExperienceOnix } from '../../../utils/texts/experience/ônix-formaturas';
import { ExperienceWebDeveloper } from '../../../utils/texts/experience/web-developer';

export const SectionExperiences = () => {
  return (
    <Section
      position="relative"
      direction="column"
      width="60%"
      minheight="400px"
      margin="0 0 1rem 0"
      breakpoints={[{ sizes: { maxWidth: '768px' }, comands: `width:90%;` }]}
    >
      <ExperienceOnix />
      <ExperienceWebDeveloper />
    </Section>
  );
};
