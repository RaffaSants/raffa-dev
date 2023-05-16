import * as S from '../../style';
import { containerFlexBody } from '../types';

export const FlexBody = ({ children, ...rest }: containerFlexBody) => {
  return (
    <S.Container type="flex" variant="body" {...rest}>
      {children}
    </S.Container>
  );
};
