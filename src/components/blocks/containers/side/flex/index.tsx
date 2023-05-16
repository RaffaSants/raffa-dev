import * as S from '../../style';
import { containerFlexSide } from '../types';

export const FlexSide = ({ children, ...rest }: containerFlexSide) => {
  return (
    <S.Container type="flex" variant="aside" direction="column" {...rest}>
      {children}
    </S.Container>
  );
};
