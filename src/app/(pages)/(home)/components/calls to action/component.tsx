import './styles.scss';

import { MdOutlineMail } from 'react-icons/md';
import { RiWhatsappFill } from 'react-icons/ri';
import { ButtonCTA } from '@/app/components/buttons/CTAs/component';

export const CallsToAction = () => {
  return (
    <section className="callsToAction">
      <ButtonCTA variant="secondary">
        enviar email
        <MdOutlineMail />
      </ButtonCTA>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <ButtonCTA variant="primary">
          enviar mensagem
          <RiWhatsappFill fill="green" />
        </ButtonCTA>
      </a>
      {/*<ContactForm />*/}
    </section>
  );
};
