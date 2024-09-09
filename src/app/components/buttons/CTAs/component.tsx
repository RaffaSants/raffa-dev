import './styles.scss';

import { ReactNode } from 'react';

type buttonCTA = React.HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant: 'primary' | 'secondary';
};

export const ButtonCTA = ({ children, variant }: buttonCTA) => {
  return (
    //@ts-expect-error variant doesn't exist
    <button className="cta" variant={variant}>
      {children}
    </button>
  );
};
