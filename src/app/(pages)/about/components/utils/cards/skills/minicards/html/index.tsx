import { Card } from '@/components/utils/cards';
import { FaHtml5 } from 'react-icons/fa';

export const CardHtml = () => {
  return (
    <Card
      keyid="card-html"
      bgcolor="primary"
      height="120px"
      width="120px"
      alignx="center"
      aligny="center"
      position="relative"
      body={<FaHtml5 style={{ height: '100px', width: '100px' }} />}
    ></Card>
  );
};
