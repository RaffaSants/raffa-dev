import * as S from '../../style';
import { containerGridBody } from '../types';

export const GridBody = ({ children, ...rest }: containerGridBody) => {
  return (
    <S.Container variant="body" type="grid" {...rest}>
      {children}
    </S.Container>
  );
};
