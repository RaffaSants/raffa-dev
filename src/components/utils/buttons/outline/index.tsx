import * as S from '../style';
import { buttonProps } from '../types';

export const ButtonOutline = ({ children, ...rest }: buttonProps) => {
  return (
    <S.Button variant="outline" {...rest}>
      {children}
    </S.Button>
  );
};
