import React, { Component } from "react";
import $ from "jquery";

import Homepage from "../components/Homepage/Homepage.component";
import AboutPage from "../components/About/About.component";
import ContactPage from "../components/Contact/Contact.component";
import WorkPage from "../components/Work/Work.component";

import { AboutTag, WorkTag, ContactTag, FooterContainer } from "./App.styles";

class App extends Component {

  showAbout = () => {
    $(".about_container").css("display", "inherit");
    $(".about_container").addClass("animated slideInLeft");
    setTimeout(() => {
      $(".about_container").removeClass("animated slideInLeft");
    }, 800);
  };

  showWork = () => {
    $(".work_container").css("display", "inherit");
    $(".work_container").addClass("animated slideInRight");
    setTimeout(() => {
      $(".work_container").removeClass("animated slideInRight");
    }, 800);
  };

  showContact = () => {
    $(".contact_container").css("display", "inherit");
    $(".contact_container").addClass("animated slideInUp");
    setTimeout(() => {
      $(".contact_container").removeClass("animated slideInUp");
    }, 800);
  };

  render() {
    return (
      <div>
        <AboutTag onClick={this.showAbout}>about</AboutTag>
        <WorkTag onClick={this.showWork}>work</WorkTag>
        <ContactTag onClick={this.showContact}>contact</ContactTag>
        <Homepage />
        <AboutPage />
        <ContactPage />
        <WorkPage />
        <FooterContainer>
          <a href="#">Banobe Pascal</a>
        </FooterContainer>
      </div>
    );
  }
}

export default App;
