import { FlexFooter } from '@/components/blocks/containers/footer/flex';
import { Text } from '@/components/typography/texts';

export const Footer = () => {
  return (
    <FlexFooter
      height="4.5rem"
      alignx="center"
      aligny="center"
      width="100%"
      bgcolor="#212121ab"
    >
      <Text size="s" color="secondary">
        Copyright © 2023
      </Text>
    </FlexFooter>
  );
};
