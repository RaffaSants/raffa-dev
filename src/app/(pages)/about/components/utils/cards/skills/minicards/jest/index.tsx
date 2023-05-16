import { Card } from '@/components/utils/cards';
import { SiJest } from 'react-icons/si';

export const CardJest = () => {
  return (
    <Card
      keyid="card-jest"
      bgcolor="primary"
      height="12rem"
      width="12rem"
      alignx="center"
      aligny="center"
      position="relative"
      body={<SiJest style={{ height: '10rem', width: '10rem' }} />}
    ></Card>
  );
};
