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
        <b>Front-end Developer</b>
      </Title>
      <Text size="m" color="primary" align="justify">
        <b>Olá! Me chamo Rafael</b> sou estudante de Eng. de Software e
        desenvolvimento front-end. este é o meu site, onde compartilho as minhas
        habilidades, experiências e projetos.
      </Text>
    </Section>
  );
};
