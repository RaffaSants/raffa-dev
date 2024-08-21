import './styles.scss';

import { Metadata } from 'next';
import { SectionImage } from './components/figure/component';
import { KnowledgeCards } from './components/knowledge-cards/component';
import { ContactForm } from './components/contact-form/contact-form';
import { ProjectCards } from './components/project-cads/component';

export const metadata: Metadata = {
  title: 'Portfolio - Home'
};

export default function Page() {
  return (
    <>
      <section className="SectionMain">
        <section className="SectionText">
          <p> &#128075; Olá, me chamo</p>
          <h1>Rafael</h1>
          <p>
            sou <b>desenvolvedor web</b>, estudante de Análise e desenvolvimento
            de sistemas, apaixonado e dedicado ao meu trabalho.
          </p>
        </section>
        <SectionImage />
      </section>
      <section className="SectionKnowledge">
        <section className="SectionText">
          <h2 className="title">O que eu sei</h2>
          <p className="description">
            Busco constantemente me manter atualizado quanto às melhores
            práticas e tecnologias utilizadas na construção de softwares. Possuo
            amplo conhecimento em desenvolvimento de aplicações web, com ênfase
            no desenvolvimento front-end. As tecnologias com as quais tenho mais
            experiência são:
          </p>
        </section>
        <KnowledgeCards />
      </section>
      <section className="SectionProjects">
        <section className="SectionText">
          <h2 className="title">O que faço</h2>
          <p className="description">
            Sou apaixonado por desenvolver aplicações responsivas e de alto
            desempenho, com forte foco em acessibilidade. Meu conhecimento em UX
            e SEO garante que minhas soluções funcionem bem e proporcionem uma
            experiência de usuário excepcional.
          </p>
        </section>
        <ProjectCards />
      </section>
      <section className="SectionContact">
        <section className="SectionText">
          <h2 className="title">Contato</h2>
        </section>
        <ContactForm />
      </section>
    </>
  );
}
