import { Section } from '@/components/blocks/contents/section';
import { CardAbout } from '../../../utils/cards/about';
import { CardEducation } from '../../../utils/cards/education';
import { CardExperience } from '../../../utils/cards/experiences';
import { CardSkills } from '../../../utils/cards/skills';
export const SectionCards = () => {
  return (
    <Section
      id="section-cards"
      alignx="center"
      aligny="center"
      direction="column"
      gap="20rem"
      padding="4.5rem 0"
      margin="0 0 4.5rem 0"
      width="75%"
    >
      <CardAbout />
      <CardEducation />
      <CardExperience />
      <CardSkills />
    </Section>
  );
};
