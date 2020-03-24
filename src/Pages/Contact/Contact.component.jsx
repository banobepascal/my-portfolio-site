import React from "react";
import $ from 'jquery';

import {Container, Headings, BackPointer} from '../container.styles';
import {FormInput, FormTextArea, SendButton} from './Contact.styles';

const ContactPage = () => {
  const closeContact = () => {
    $(".contact_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $(".contact_container").removeClass("animated slideOutDown");
        $(".contact_container").css("display","none");
    },800);
  }

  return (
    <Container className='contact_container'>
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
