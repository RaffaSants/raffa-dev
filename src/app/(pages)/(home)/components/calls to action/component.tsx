import './styles.scss';

import { MdOutlineMail } from 'react-icons/md';
import { RiWhatsappFill } from 'react-icons/ri';
import { ButtonCTA } from '@/app/components/buttons/CTAs/component';

export const CallsToAction = () => {
  return (
    <section className="callsToAction">
      <ButtonCTA variant="secondary">
        enviar email
        <MdOutlineMail className="icon" />
      </ButtonCTA>
      <a
        aria-label="chat on whatsapp"
        href="https://wa.me/5521982794006"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ButtonCTA variant="primary">
          enviar mensagem
          <RiWhatsappFill className="icon" fill="green" />
        </ButtonCTA>
      </a>
      {/*<ContactForm />*/}
    </section>
  );
};
