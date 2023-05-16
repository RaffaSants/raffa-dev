import { Section } from '@/components/blocks/contents/section';
import { TextEducation } from '../../../../utils/texts/education';

export const SectionEducation = () => {
  return (
    <Section
      key={'section-card-education'}
      id="section-card-education"
      alignx="center"
      aligny="center"
      direction="row"
      height="calc(100% - 7.5rem)"
      width="100%"
      gap="10px"
    >
      <TextEducation />
    </Section>
  );
};
