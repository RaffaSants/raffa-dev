import { Content } from '../style';
import { contentSideProps } from './type';

export const Side = ({ children, ...rest }: contentSideProps) => {
  return (
    <Content variant="aside" direction="column" {...rest}>
      {children}
    </Content>
  );
};
