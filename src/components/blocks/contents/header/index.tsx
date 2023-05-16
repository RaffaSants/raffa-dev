import { Content } from '../style';
import { contentHeaderProps } from './type';

export const Header = ({ children, ...rest }: contentHeaderProps) => {
  return (
    <Content variant="header" direction="row" {...rest}>
      {children}
    </Content>
  );
};
