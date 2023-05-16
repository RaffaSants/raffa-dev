import { Card } from '@/components/utils/cards';
import { IoLogoJavascript } from 'react-icons/io';

export const CardJs = () => {
  return (
    <Card
      keyid="card-javascript"
      bgcolor="primary"
      height="120px"
      width="120px"
      alignx="center"
      aligny="center"
      position="relative"
      body={<IoLogoJavascript style={{ height: '100px', width: '100px' }} />}
    ></Card>
  );
};
