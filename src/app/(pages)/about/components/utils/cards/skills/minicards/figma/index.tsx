import { Card } from '@/components/utils/cards';
import { FiFigma } from 'react-icons/fi';

export const CardFigma = () => {
  return (
    <Card
      keyid="card-figma"
      bgcolor="primary"
      height="120px"
      width="120px"
      alignx="center"
      aligny="center"
      position="relative"
      body={<FiFigma style={{ height: '100px', width: '100px' }} />}
    ></Card>
  );
};
