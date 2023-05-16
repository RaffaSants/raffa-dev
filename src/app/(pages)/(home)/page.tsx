import { Metadata } from 'next';
import { SectionImage } from './components/sections/image';
import { SectionText } from './components/sections/texts';

export const metadata: Metadata = {
  title: 'Portfolio - Home'
};

export default function Page() {
  return (
    <>
      <SectionText />
      <SectionImage />
    </>
  );
}
