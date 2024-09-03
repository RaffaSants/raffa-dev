'use client';
import './styles.scss';

import { useState } from 'react';
import { FaFigma, FaGithub } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import { projects } from '@/informations/projects';

export const ProjectsSlide = () => {
  const [indexChecked, setIndexChecked] = useState<number>(
    Math.ceil(projects.length / 2)
  );

  const inputIndexChanged = (indexValue: number) => {
    indexValue !== indexChecked && setIndexChecked(indexValue);
    return;
  };

  const generateItens = () => {
    return projects.map((project, index) => {
      return (
        <article
          key={`slide-projects-project-${project.title}-${index}`}
          //@ts-expect-error name
          name={`item-${index + 1}`}
        >
          <figure>
            <img src={project.imageSrc} alt={project.imageAlt} />
          </figure>
          <section>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.links.prototype && (
                <li>
                  <a
                    href={project.links.prototype}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="go to prototype"
                  >
                    <FaFigma /> ver design
                  </a>
                </li>
              )}
              {project.links.repo && (
                <li>
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="go to repository"
                  >
                    <FaGithub /> ver código
                  </a>
                </li>
              )}
              {project.links.site && (
                <li>
                  <a
                    href={project.links.site}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="go to site"
                  >
                    <TbWorld /> acessar
                  </a>
                </li>
              )}
            </ul>
          </section>
        </article>
      );
    });
  };

  const generateIndex = () => {
    return projects.map((_, index) => {
      return (
        <label key={`carousel-index-${index + 1}`}>
          <input
            type="checkbox"
            name="index"
            value={index + 1}
            checked={index + 1 === indexChecked && true}
            onChange={() => inputIndexChanged(index + 1)}
          />
        </label>
      );
    });
  };

  return (
    <section className="projects-slide">
      <section className="items">
        <ul className="index-carousel">{generateIndex()}</ul>
        {generateItens()}
      </section>
    </section>
  );
};
