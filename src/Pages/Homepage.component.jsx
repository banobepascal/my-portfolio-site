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
  state = {
    isClicked: false,
    showAboutPage: false,
    showContactPage: false,
    showWorkPage: false
  };

  closePage = () => false;

  showAboutHandler = () => {
    const showAbout = this.state.showAboutPage;
    this.setState({ showAboutPage: !showAbout });
  };

  closeAboutHandler = () => {
    const closeAbout = this.state.showAboutPage;
    this.setState({ closeAboutPage: !closeAbout });
  };

  showContactHandler = () => {
    const showContact = this.state.showContactPage;
    this.setState({ showContactPage: !showContact });
  };

  showWorkHandler = () => {
    const showWork = this.state.showWorkPage;
    this.setState({ showWorkPage: !showWork });
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
    let About = null;
    let Contact = null;
    let Work = null;

    if (this.state.showAboutPage) {
      About = <AboutPage showAboutPage={this.state.showAboutPage} closeAbout={this.showAboutHandler} />;
    }

    if (this.state.showContactPage) {
      Contact = <ContactPage showContactPage={this.state.showContactPage} />;
    }

    if (this.state.showWorkPage) {
      Work = <WorkPage showWorkPage={this.state.showWorkPage} />;
    }
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
        {About}
        {Contact}
        {Work}
        {/* <ContactPage showContactPage={this.state.showPage} /> */}
        {/* <WorkPage /> */}
        <FooterContainer>
          <a href="https://github.com/banobepascal/">Banobe Pascal</a>
        </FooterContainer>
      </div>
    );
  }
}

export default Homepage;
