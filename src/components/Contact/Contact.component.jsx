import React from "react";

import {Container, Headings, BackPointer} from '../container.styles';
import {FormInput, FormTextArea, SendButton} from './Contact.styles';

const ContactPage = ({classes, closeContact}) => {
  return (
    <Container className={classes}>
      <BackPointer onClick={closeContact}>
        <i className="fas fa-angle-down"></i>
      </BackPointer>
      <Headings>contact.</Headings>
      <section>
      <h2>contact me</h2>
        <form>
          <FormInput type="text" placeholder="name" required />
          <FormInput type="email" placeholder="email" required />
          <br />
          <FormTextArea placeholder="your message" required rows="5"></FormTextArea>
          <br />
          <SendButton>send</SendButton>
        </form>
      </section>
    </Container>
  );
};

export default ContactPage;
