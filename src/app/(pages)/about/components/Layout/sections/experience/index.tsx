import { Section } from '@/components/blocks/contents/section';
import { ExperienceOnix } from '../../../utils/texts/experience/ônix-formaturas';
import { ExperienceWebDeveloper } from '../../../utils/texts/experience/web-developer';

export const SectionExperiences = () => {
  return (
    <Section
      position="relative"
      direction="column"
      width="90%"
      minheight="400px"
      gap="1rem"
      margin="0 0 1rem 0"
    >
      <ExperienceOnix />
      <ExperienceWebDeveloper />
    </Section>
  );
};
