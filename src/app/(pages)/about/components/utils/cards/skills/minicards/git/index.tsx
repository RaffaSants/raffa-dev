import { Card } from '@/components/utils/cards';
import { FiGithub } from 'react-icons/fi';

export const CardGithub = () => {
  return (
    <Card
      keyid="card-github"
      bgcolor="primary"
      height="12rem"
      width="12rem"
      alignx="center"
      aligny="center"
      position="relative"
      body={<FiGithub style={{ height: '10rem', width: '10rem' }} />}
    ></Card>
  );
};
