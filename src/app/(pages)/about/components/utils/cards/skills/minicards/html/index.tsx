import { Card } from '@/components/utils/cards';
import { FaHtml5 } from 'react-icons/fa';

export const CardHtml = () => {
  return (
    <Card
      keyid="card-html"
      bgcolor="primary"
      height="12rem"
      width="12rem"
      alignx="center"
      aligny="center"
      position="relative"
      body={<FaHtml5 style={{ height: '10rem', width: '10rem' }} />}
    ></Card>
  );
};
