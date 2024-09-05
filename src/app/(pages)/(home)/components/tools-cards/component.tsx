import './styles.scss';

import { Tools } from '@/informations/tools';
import Link from 'next/link';

export const ToolsCards = () => {
  const generateCard = () => {
    return Tools.map((tool) => {
      return (
        <Link
          key={`tool-${tool.title}`}
          href={tool.linkToDoc}
          target="_blank"
          aria-label={`go to ${tool.title} site`}
        >
          <article>
            <figure>{tool.icon}</figure>
            <p>{tool.title}</p>
          </article>
        </Link>
      );
    });
  };

  return <ul className="knowledge-list">{generateCard()}</ul>;
};
