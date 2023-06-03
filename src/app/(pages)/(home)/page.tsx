import { Metadata } from 'next';
import { SectionImage } from './components/sections/image';
import { SectionText } from './components/sections/texts';
import { Section } from '@/components/blocks/contents/section';

export const metadata: Metadata = {
  title: 'Portfolio - Home'
};

export default function Page() {
  return (
    <Section
      direction="row"
      flexwrap="wrap-reverse"
      gap="5%"
      alignx="center"
      aligny="center"
    >
      <SectionText />
      <SectionImage />
    </Section>
  );
}
