import './styles.scss';
import { servicesList } from '@/informations/services';

export const ServicesCardList = () => {
  const generateServiceCards = () => {
    return servicesList.map((service) => {
      return (
        <li key={`service-card-${service.title}`}>
          <article>
            <figure> {service.icon}</figure>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        </li>
      );
    });
  };

  return <ul className="services-list">{generateServiceCards()}</ul>;
};
