import { Section } from '@/components/blocks/contents/section';
import { CardBootstrap } from '../../../../utils/cards/skills/minicards/styled-components';
import { CardCss } from '../../../../utils/cards/skills/minicards/css';
import { CardFigma } from '../../../../utils/cards/skills/minicards/figma';
import { CardGithub } from '../../../../utils/cards/skills/minicards/git';
import { CardHtml } from '../../../../utils/cards/skills/minicards/html';
import { CardJest } from '../../../../utils/cards/skills/minicards/jest';
import { CardJs } from '../../../../utils/cards/skills/minicards/javascript';
import { CardNextjs } from '../../../../utils/cards/skills/minicards/next';
import { CardReactjs } from '../../../../utils/cards/skills/minicards/react';
import { CardStorybook } from '../../../../utils/cards/skills/minicards/storybook';

export const SectionSkills = () => {
  return (
    <Section
      id="section-card-skills"
      direction="row"
      flexwrap="wrap"
      alignx="center"
      aligny="center"
      height="calc(100% - 7.5rem)"
      width="80%"
      gap="0 20px"
      margin="auto"
      bgcolor="primary"
      color="rgb(170, 105, 56)"
    >
      <CardHtml />
      <CardCss />
      <CardJs />
      <CardReactjs />
      <CardNextjs />
      <CardBootstrap />
      <CardGithub />
      <CardFigma />
      <CardJest />
      <CardStorybook />
    </Section>
  );
};
