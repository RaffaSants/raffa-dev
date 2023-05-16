import * as S from '../../style';
import { containerGridHeader } from '../types';

export const GridHeader = ({ children, ...rest }: containerGridHeader) => {
  return (
    <S.Container variant="header" type="grid" {...rest}>
      {children}
    </S.Container>
  );
};
