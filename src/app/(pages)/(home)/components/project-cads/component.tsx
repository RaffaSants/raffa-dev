import './styles.scss';
import { projects } from './projects-list';

export const ProjectCards = () => {
  const cardsGenerate = () => {
    return projects.map((project) => {
      return (
        <article key={`card-project-${project.title}`}>
          <figure>
            <img src={project.imageSrc} alt={project.imageAlt} />
          </figure>
          <section>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.technologies &&
                project.technologies.map((technology) => {
                  return (
                    <li
                      key={`project-${project.title}-technology-${technology}`}
                    >
                      {technology}
                    </li>
                  );
                })}
            </ul>
          </section>
        </article>
      );
    });
  };

  return <section className="ProjectCards"> {cardsGenerate()} </section>;
};
