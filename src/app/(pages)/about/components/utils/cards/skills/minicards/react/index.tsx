import { Card } from '@/components/utils/cards';
import { SiReact } from 'react-icons/si';

export const CardReactjs = () => {
  return (
    <Card
      keyid="card-rectjs"
      bgcolor="primary"
      height="120px"
      width="120px"
      alignx="center"
      aligny="center"
      position="relative"
      body={<SiReact style={{ height: '100px', width: '100px' }} />}
    ></Card>
  );
};
