import React, { Component } from "react";
import $ from "jquery";

import Profile from "../components/Profile/Profile.component";
import AboutPage from "../components/About/About.component";
import ContactPage from "../components/Contact/Contact.component";
import WorkPage from "../components/Work/Work.component";
import Loader from "../components/Spinner/Spinner.component";

import {
  AboutTag,
  WorkTag,
  ContactTag,
  FooterContainer
} from "./Homepage.styles";

class Homepage extends Component {
  showAboutHandler = () => {
    $(".about_container").css("display", "inherit");
    $(".about_container").addClass("animated slideInLeft");
    setTimeout(() => {
      $(".about_container").removeClass("animated slideInLeft");
    }, 800);
  };

  showWorkHandler = () => {
    $(".work_container").css("display", "inherit");
    $(".work_container").addClass("animated slideInRight");
    setTimeout(() => {
      $(".work_container").removeClass("animated slideInRight");
    }, 800);
  };

  showContactHandler = () => {
    $(".contact_container").css("display", "inherit");
    $(".contact_container").addClass("animated slideInUp");
    setTimeout(() => {
      $(".contact_container").removeClass("animated slideInUp");
    }, 800);
  };

  componentDidMount() {
    setTimeout(function() {
      $(".loading").addClass("animated fadeOut");
      setTimeout(function() {
        $(".loading").removeClass("animated fadeOut");
        $(".loading").css("display", "none");
      }, 1000);
    }, 1500);
  }

  render() {
    return (
      <div>
        <Loader />
        <AboutTag className="animated fadeIn" onClick={this.showAboutHandler}>
          about
        </AboutTag>
        <WorkTag className="animated fadeIn" onClick={this.showWorkHandler}>
          work
        </WorkTag>
        <ContactTag
          className="animated fadeIn"
          onClick={this.showContactHandler}
        >
          contact
        </ContactTag>
        <Profile
          showAbout={this.showAboutHandler}
          showWork={this.showWorkHandler}
          showContact={this.showContactHandler}
        />
        <AboutPage />
        <ContactPage />
        <WorkPage />
        <FooterContainer>
          <a href="https://github.com/banobepascal/">Banobe Pascal</a>
        </FooterContainer>
      </div>
    );
  }
}

export default Homepage;
