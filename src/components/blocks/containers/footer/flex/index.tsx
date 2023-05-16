import * as S from '../../style';
import type { footerFlex } from '../types';

export const FlexFooter = ({ children, ...rest }: footerFlex) => {
  return (
    <S.Container type="flex" variant="footer" direction="row" {...rest}>
      {children}
    </S.Container>
  );
};
