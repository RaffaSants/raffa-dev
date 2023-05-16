import { FlexFooter } from '@/components/blocks/containers/footer/flex';
import { Text } from '@/components/typography/texts';

export const FooterLayout = () => {
  return (
    <FlexFooter
      height="4.5rem"
      alignx="center"
      aligny="center"
      width="100%"
      position="absolute"
      bottom="0"
    >
      <Text size="s" color="primary">
        Copyright © 2023
      </Text>
    </FlexFooter>
  );
};
