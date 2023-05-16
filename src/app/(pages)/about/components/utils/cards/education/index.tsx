import type { cardHeader } from '@/components/utils/cards/types';
import { Card } from '@/components/utils/cards';
import { Text } from '@/components/typography/texts';
import { SectionEducation } from '../../../Layout/sections/cards/education';

export const CardEducation = () => {
  const header: cardHeader = {
    alignx: 'center',
    color: 'primary',
    content: (
      <Text size="l" color="primary">
        Formação acadêmica
      </Text>
    )
  };

  return (
    <Card
      keyid="card-education"
      position="relative"
      bgcolor="primary"
      minheight="400px"
      width="100%"
      maxwidth="900px"
      minwidth="300px"
      shadow="3px 2px 3px navajowhite"
      borderradius="5px"
      header={header}
      body={<SectionEducation />}
      target={{
        id: 'card-education',
        comands: 'scroll-margin-top: 15rem;',
        animation: {
          variant: 'opacity',
          time: '2.5s',
          delay: 'ease'
        }
      }}
    ></Card>
  );
};
