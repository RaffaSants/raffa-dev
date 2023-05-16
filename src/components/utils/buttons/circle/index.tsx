import * as S from '../style';
import { buttonProps } from '../types';

export const ButtonCircle = ({ children, ...rest }: buttonProps) => {
  return (
    <S.Button variant="circle" {...rest}>
      {children}
    </S.Button>
  );
};
