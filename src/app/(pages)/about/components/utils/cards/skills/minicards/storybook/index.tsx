import { Card } from '@/components/utils/cards';
import { SiStorybook } from 'react-icons/si';

export const CardStorybook = () => {
  return (
    <Card
      keyid="card-storybook"
      bgcolor="primary"
      height="12rem"
      width="12rem"
      alignx="center"
      aligny="center"
      position="relative"
      body={<SiStorybook style={{ height: '10rem', width: '10rem' }} />}
    ></Card>
  );
};
