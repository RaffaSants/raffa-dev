import * as S from '../../style';
import { containerFlexMain } from '../types';

export const FlexMain = ({ children, ...rest }: containerFlexMain) => {
  return (
    <S.Container type="flex" variant="main" {...rest}>
      {children}
    </S.Container>
  );
};
