import { Content } from '../style';
import { contentFooterProps } from './type';

export const Footer = ({ children, ...rest }: contentFooterProps) => {
  return (
    <Content variant="footer" direction="row" {...rest}>
      {children}
    </Content>
  );
};
