import { Card } from '@/components/utils/cards';
import { SiJest } from 'react-icons/si';

export const CardJest = () => {
  return (
    <Card
      keyid="card-jest"
      bgcolor="primary"
      height="120px"
      width="120px"
      alignx="center"
      aligny="center"
      position="relative"
      body={<SiJest style={{ height: '100px', width: '100px' }} />}
    ></Card>
  );
};
