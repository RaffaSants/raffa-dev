import * as S from '../../style';
import { containerGridMain } from '../types';

export const GridMain = ({ children, ...rest }: containerGridMain) => {
  return (
    <S.Container variant="main" type="grid" {...rest}>
      {children}
    </S.Container>
  );
};
