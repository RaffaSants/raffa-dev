import * as S from '../../style';
import { containerFlexHeader } from '../types';

export const FlexHeader = ({ children, ...rest }: containerFlexHeader) => {
  return (
    <S.Container type="flex" variant="header" direction="row" {...rest}>
      {children}
    </S.Container>
  );
};
