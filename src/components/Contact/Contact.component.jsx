import React from "react";
import $ from 'jquery';

import {Container, Headings, BackPointer} from '../container.styles';
import {FormInput, FormTextArea, SendButton} from './Contact.styles';

const ContactPage = (props) => {
  let contactStyles = "";
  let slideInUp = "animated slideInUp";
  let slideOutLeft = "animated slideOutLeft";

  if (props.showContactPage) {
    contactStyles = slideInUp;
  }

  return (
    <Container className={contactStyles}>
      <BackPointer >
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
