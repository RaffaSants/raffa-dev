import './styles.scss';

import { Tools } from '@/informations/tools';
import Link from 'next/link';

export const ToolsCards = () => {
  const generateCard = () => {
    return Tools.map((tool) => {
      return (
        <li key={`tool-${tool.title}`}>
          <Link
            href={tool.linkToDoc}
            target="_blank"
            aria-label={`go to ${tool.title} site`}
          >
            <article>
              <figure>{tool.icon}</figure>
              <p>{tool.title}</p>
            </article>
          </Link>
        </li>
      );
    });
  };

  return <ul className="knowledge-list">{generateCard()}</ul>;
};
