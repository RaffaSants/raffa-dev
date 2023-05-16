import { TextLink } from '@/components/typography/links';
import { Section } from '@/components/blocks/contents/section';
import { Text } from '@/components/typography/texts';
import { Title } from '@/components/typography/title';

export const SectionText = () => {
  return (
    <Section
      height="100%"
      direction="column"
      alignx="center"
      aligny="top"
      width="100%"
    >
      <Title level="1" weight="300" color="#aa6938">
        <b>Pense, Planeje, Produza!</b>
      </Title>
      <Text size="xl" color="primary">
        <b>Olá! Me chamo Rafael</b> sou estudante de Eng. de Software e
        desenvolvimento front-end. Conheça{' '}
        <TextLink href="/about" color="darkgray" size="xl">
          {' '}
          mais sobre{' '}
        </TextLink>{' '}
        as minhas habilidades, experiências e projetos. Seria um prazer
        contribuir para a construção dos seus projetos.
      </Text>
    </Section>
  );
};
