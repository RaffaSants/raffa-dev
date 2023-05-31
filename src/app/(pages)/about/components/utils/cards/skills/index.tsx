import type { cardHeader } from '@/components/utils/cards/types';
import { Card } from '@/components/utils/cards';
import { Text } from '@/components/typography/texts';
import { SectionSkills } from '../../../Layout/sections/cards/skills';

export const CardSkills = () => {
  const header: cardHeader = {
    alignx: 'center',
    color: 'primary',
    content: (
      <Text size="l" color="primary">
        Skills
      </Text>
    )
  };

  return (
    <Card
      keyid="card-skills"
      position="relative"
      bgcolor="primary"
      minheight="400px"
      width="100%"
      maxwidth="900px"
      minwidth="300px"
      shadow="3px 2px 3px #101010"
      borderradius="5px"
      header={header}
      body={<SectionSkills />}
      target={{
        id: 'card-skills',
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
