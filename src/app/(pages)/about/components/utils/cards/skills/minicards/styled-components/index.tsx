import { Card } from '@/components/utils/cards';
import { SiStyledcomponents } from 'react-icons/si';

export const CardBootstrap = () => {
  return (
    <Card
      keyid="card-bootstrap"
      bgcolor="primary"
      height="120px"
      width="120px"
      alignx="center"
      aligny="center"
      position="relative"
      body={<SiStyledcomponents style={{ height: '100px', width: '100px' }} />}
    ></Card>
  );
};
