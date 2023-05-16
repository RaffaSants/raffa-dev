import * as S from '../style';
import { buttonProps } from '../types';

export const ButtonCircleOutline = ({ children, ...rest }: buttonProps) => {
  return (
    <S.Button variant="circle-outline" {...rest}>
      {children}
    </S.Button>
  );
};
