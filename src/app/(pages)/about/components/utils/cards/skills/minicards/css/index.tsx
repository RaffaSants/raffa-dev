import { Card } from '@/components/utils/cards';
import { DiCss3 } from 'react-icons/di';

export const CardCss = () => {
  return (
    <Card
      keyid="card-css"
      bgcolor="primary"
      height="12rem"
      width="12rem"
      alignx="center"
      aligny="center"
      position="relative"
      body={<DiCss3 style={{ height: '10rem', width: '10rem' }} />}
    ></Card>
  );
};
