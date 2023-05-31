import type { cardHeader } from '@/components/utils/cards/types';
import { Card } from '@/components/utils/cards';
import { Text } from '@/components/typography/texts';
import { SectionAbout } from '../../../Layout/sections/cards/about-me';

export const CardAbout = () => {
  const header: cardHeader = {
    alignx: 'center',
    color: 'primary',
    content: (
      <Text size="l" color="primary">
        Sobre mim
      </Text>
    )
  };

  return (
    <Card
      bgcolor="primary"
      minheight="400px"
      keyid="card-about"
      position="relative"
      width="100%"
      maxwidth="900px"
      minwidth="300px"
      padding="0 0 2rem 0"
      shadow="3px 2px 3px #101010"
      borderradius="5px"
      header={header}
      body={<SectionAbout />}
      target={{
        id: 'card-about',
        comands: `scroll-margin-top: 15rem;`,
        animation: {
          variant: 'opacity',
          time: '2.5s',
          delay: 'ease'
        }
      }}
    ></Card>
  );
};
