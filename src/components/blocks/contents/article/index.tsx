import { Content } from '../style';
import { contentArticleProps } from './type';

export const Article = ({ children, target, ...rest }: contentArticleProps) => {
  return (
    <Content variant="article" target={target} direction="column" {...rest}>
      {children}
    </Content>
  );
};
