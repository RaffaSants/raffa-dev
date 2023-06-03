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
      gap="1rem"
      width="50%"
      breakpoints={[
        {
          sizes: { maxWidth: '768px' },
          comands: `
            width: 80%;
            height: fit-content;
            align-items: center;
            margin: 0 10%;`
        }
      ]}
    >
      <Title
        level="1"
        weight="300"
        color="#aa6938"
        lineheight="95%"
        breakpoints={[
          { sizes: { maxWidth: '768px' }, comands: 'text-align: center;' }
        ]}
      >
        Front-end Developer
      </Title>
      <Text size="m" color="primary" align="justify">
        <b>Olá! Me chamo Rafael</b> sou estudante de Eng. de Software e
        desenvolvimento front-end. este é o meu site, onde compartilho as minhas
        habilidades, experiências e projetos.
      </Text>
    </Section>
  );
};
