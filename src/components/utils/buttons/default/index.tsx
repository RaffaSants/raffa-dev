import * as S from '../style';
import { buttonProps } from '../types';

export const ButtonDefault = ({ children, ...rest }: buttonProps) => {
  return (
    <S.Button variant="default" {...rest}>
      {children}
    </S.Button>
  );
};
