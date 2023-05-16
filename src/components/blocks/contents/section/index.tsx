import { Content } from '../style';
import { contentSectionProps } from './type';

export const Section = ({ children, target, ...rest }: contentSectionProps) => {
  return (
    <Content variant="section" target={target} {...rest}>
      {children}
    </Content>
  );
};
