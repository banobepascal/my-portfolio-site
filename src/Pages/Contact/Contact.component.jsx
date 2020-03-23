import React from "react";

import {Container, Headings, BackPointer} from '../container.styles';
import {FormInput, FormTextArea, SendButton} from './Contact.styles';

const ContactPage = () => {
  return (
    <Container>
      <BackPointer>
        <i className="fas fa-angle-down"></i>
      </BackPointer>
      <Headings>contact.</Headings>
      <section>
      <h2>contact me</h2>
      <p>
        <form>
          <FormInput type="text" placeholder="name" required />
          <FormInput type="email" placeholder="email" required />
          <br />
          <FormTextArea placeholder="your message" required rows="5"></FormTextArea>
          <br />
          <SendButton class="btn_one">send</SendButton>
        </form>
        </p>
      </section>
    </Container>
  );
};

export default ContactPage;
