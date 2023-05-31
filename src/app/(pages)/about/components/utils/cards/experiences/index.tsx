import { Card } from '@/components/utils/cards';
import { Text } from '@/components/typography/texts';
import type { cardHeader } from '@/components/utils/cards/types';
import { SectionExperience } from '../../../Layout/sections/cards/experiences';
export const CardExperience = () => {
  const header: cardHeader = {
    alignx: 'center',
    color: 'primary',
    content: (
      <Text size="l" color="primary">
        Experiencias
      </Text>
    )
  };

  return (
    <Card
      keyid="card-experience"
      position="relative"
      bgcolor="primary"
      minheight="400px"
      flexwrap="wrap"
      width="100%"
      maxwidth="900px"
      minwidth="300px"
      shadow="3px 2px 3px #101010"
      borderradius="5px"
      header={header}
      body={<SectionExperience />}
      target={{
        id: 'card-experience',
        comands: 'scroll-margin-top: 15rem;',
        animation: {
          variant: 'opacity',
          time: '2.5s',
          delay: 'ease'
        }
      }}
    />
  );
};
