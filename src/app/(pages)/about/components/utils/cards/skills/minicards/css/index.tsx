import { Card } from '@/components/utils/cards';
import { DiCss3 } from 'react-icons/di';

export const CardCss = () => {
  return (
    <Card
      keyid="card-css"
      bgcolor="primary"
      height="120px"
      width="120px"
      alignx="center"
      aligny="center"
      position="relative"
      body={<DiCss3 style={{ height: '100px', width: '100px' }} />}
    ></Card>
  );
};
