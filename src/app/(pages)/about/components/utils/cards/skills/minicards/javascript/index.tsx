import { Card } from '@/components/utils/cards';
import { IoLogoJavascript } from 'react-icons/io';

export const CardJs = () => {
  return (
    <Card
      keyid="card-javascript"
      bgcolor="primary"
      height="12rem"
      width="12rem"
      alignx="center"
      aligny="center"
      position="relative"
      body={<IoLogoJavascript style={{ height: '10rem', width: '10rem' }} />}
    ></Card>
  );
};
