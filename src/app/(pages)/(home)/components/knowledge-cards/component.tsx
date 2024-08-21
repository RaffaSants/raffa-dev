import './styles.scss';
import Link from 'next/link';
import { Knowledges } from './knowledges-list';

export const KnowledgeCards = () => {
  const generateCard = () => {
    return Knowledges.map((Knowledge) => {
      return (
        <li key={`knowledge-${Knowledge.title}`}>
          <Link href={Knowledge.linkToDoc} target="_blank">
            <article>
              <figure>{Knowledge.icon}</figure>
              <p>{Knowledge.title}</p>
            </article>
          </Link>
        </li>
      );
    });
  };

  return <ul className="knowledge-list">{generateCard()}</ul>;
};
