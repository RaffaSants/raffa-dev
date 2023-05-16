import { Card } from '@/components/utils/cards';
import { SiStyledcomponents } from 'react-icons/si';

export const CardBootstrap = () => {
  return (
    <Card
      keyid="card-bootstrap"
      bgcolor="primary"
      height="12rem"
      width="12rem"
      alignx="center"
      aligny="center"
      position="relative"
      body={<SiStyledcomponents style={{ height: '10rem', width: '10rem' }} />}
    ></Card>
  );
};
