import { Section } from '@/components/blocks/contents/section';
import {
  CardAbout,
  CardEducation,
  CardExperience,
  CardSkills
} from './components/utils/cards/export';
//import { SectionCards } from './components/Layout/sections/cards';
//import { SideNav } from './components/Layout/sections/navs';

export default function Page() {
  return (
    <Section direction="column" aligny="center" gap="30vh" padding="5rem 2rem">
      <CardAbout />
      <CardEducation />
      <CardExperience />
      <CardSkills />
    </Section>
  );
}
