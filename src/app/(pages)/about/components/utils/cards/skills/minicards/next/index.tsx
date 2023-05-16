import { Card } from '@/components/utils/cards';
import { SiNextdotjs } from 'react-icons/si';

export const CardNextjs = () => {
  return (
    <Card
      keyid="card-nextjs"
      bgcolor="primary"
      height="120px"
      width="120px"
      alignx="center"
      aligny="center"
      position="relative"
      body={<SiNextdotjs style={{ height: '100px', width: '100px' }} />}
    ></Card>
  );
};
