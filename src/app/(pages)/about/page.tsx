import { Section } from '@/components/blocks/contents/section';
import { CardAbout } from './components/utils/cards/about';
import { CardEducation } from './components/utils/cards/education';
import { CardExperience } from './components/utils/cards/experiences';
import { CardSkills } from './components/utils/cards/skills';
//import { SectionCards } from './components/Layout/sections/cards';
//import { SideNav } from './components/Layout/sections/navs';

export default function Page() {
  return (
    <Section direction="column" aligny="center" gap="15rem" padding="5rem 2rem">
      <CardAbout />
      <CardEducation />
      <CardExperience />
      <CardSkills />
    </Section>
  );
}
