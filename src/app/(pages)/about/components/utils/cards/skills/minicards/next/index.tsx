import { Card } from '@/components/utils/cards';
import { SiNextdotjs } from 'react-icons/si';

export const CardNextjs = () => {
  return (
    <Card
      keyid="card-nextjs"
      bgcolor="primary"
      height="12rem"
      width="12rem"
      alignx="center"
      aligny="center"
      position="relative"
      body={<SiNextdotjs style={{ height: '10rem', width: '10rem' }} />}
    ></Card>
  );
};
