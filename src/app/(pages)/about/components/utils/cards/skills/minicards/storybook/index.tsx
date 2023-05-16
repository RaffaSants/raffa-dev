import { Card } from '@/components/utils/cards';
import { SiStorybook } from 'react-icons/si';

export const CardStorybook = () => {
  return (
    <Card
      keyid="card-storybook"
      bgcolor="primary"
      height="120px"
      width="120px"
      alignx="center"
      aligny="center"
      position="relative"
      body={<SiStorybook style={{ height: '100px', width: '100px' }} />}
    ></Card>
  );
};
