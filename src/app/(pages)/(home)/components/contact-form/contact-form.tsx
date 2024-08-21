import './styles.scss';

import { FiSend } from 'react-icons/fi';

export const ContactForm = () => {
  return (
    <form action="" className="ContactForm">
      <label>
        <input type="name" placeholder="Nome" name="name" />
      </label>
      <label>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
        />
        <p className="msgError">*insira um email válido</p>
      </label>
      <label>
        <textarea placeholder="Mensagem" minLength={3} name="message" />
        <p className="msgError">*a mensage deve contar no mínimo 3 digítos</p>
      </label>
      <button type="button">
        <FiSend />
        Enviar
      </button>
    </form>
  );
};
