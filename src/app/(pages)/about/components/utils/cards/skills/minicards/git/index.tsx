import { Card } from '@/components/utils/cards';
import { FiGithub } from 'react-icons/fi';

export const CardGithub = () => {
  return (
    <Card
      keyid="card-github"
      bgcolor="primary"
      height="120px"
      width="120px"
      alignx="center"
      aligny="center"
      position="relative"
      body={<FiGithub style={{ height: '100px', width: '100px' }} />}
    ></Card>
  );
};
