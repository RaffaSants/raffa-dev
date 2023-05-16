import { Card } from '@/components/utils/cards';
import { FiFigma } from 'react-icons/fi';

export const CardFigma = () => {
  return (
    <Card
      keyid="card-figma"
      bgcolor="primary"
      height="12rem"
      width="12rem"
      alignx="center"
      aligny="center"
      position="relative"
      body={<FiFigma style={{ height: '10rem', width: '10rem' }} />}
    ></Card>
  );
};
