import React from "react";
import { Element } from "react-scroll";

import {
  ContactContainer,
  Head,
  Title,
  // Whatsapp,
  FormContainer,
} from "./Contact.style";

// import whatsapp from "../../assets/images/whatsappicon.png";

export const Contact = () => (
  <Element id="contato" name="contato">
    <ContactContainer>
      <Head>Contact</Head>
      <Title>Get in touch for a meeting</Title>
      {/* <Whatsapp
        href="https://web.whatsapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <a
          href="http://api.whatsapp.com/send?1=pt_BR&phone=5511981263581"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsapp} alt="WhatsApp" />
        </a>
      </Whatsapp> */}
      <FormContainer>
        <form
          id="contactform"
          action="https://mailthis.to/aguasdelindoia"
          method="POST"
        >
          <input name="name" type="text" id="name" placeholder="Name" />
          <input name="phone" type="text" id="phone" placeholder="Phone" />
          <input name="email" type="email" id="email" placeholder="Email" />
          <textarea
            name="comment"
            id="comment"
            rows="10"
            placeholder="Write your message"
          />
          <input
            type="hidden"
            name="_subject"
            value="Apartamento Agua de Lindoia"
          />
          <input type="hidden" name="_honeypot" value="" />
          <input
            type="hidden"
            name="_confirmation"
            value="Obrigado pela sua mensagem, retornaremos em breve!"
          />
          <input type="submit" value="Send" />
        </form>
      </FormContainer>
    </ContactContainer>
  </Element>
);

export default Contact;
