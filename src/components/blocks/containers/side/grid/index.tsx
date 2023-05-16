import * as S from '../../style';
import { containerGridSide } from '../types';

export const GridSide = ({ children, ...rest }: containerGridSide) => {
  return (
    <S.Container variant="aside" type="grid" {...rest}>
      {children}
    </S.Container>
  );
};
