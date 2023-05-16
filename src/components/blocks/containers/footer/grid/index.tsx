import * as S from '../../style';
import type { footerGrid } from '../types';

export const GridFooter = ({ children, ...rest }: footerGrid) => {
  return (
    <S.Container variant="footer" type="grid" {...rest}>
      {children}
    </S.Container>
  );
};
