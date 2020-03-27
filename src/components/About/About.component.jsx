import React, { Component } from "react";

import {
  Container,
  Headings,
  BackPointer,
  SectionContainer
} from "../container.styles";

class AboutPage extends Component {
  state ={
    isClicked: false
  }

  closeAbout = () => {
    const closeAbout = this.state.isClicked;
    this.setState({ isClicked: !closeAbout });
  }

  getBadgeClasses = () => {
    let classes = "";
    if (this.props.showAboutPage) {
      classes = "animated slideInLeft";
    }
    return classes;
  };

  render() {
    return (
      <Container className={this.getBadgeClasses()}>
        <BackPointer onClick={this.props.closeAbout}>
          <i className="fas fa-angle-left"></i>
        </BackPointer>
        <Headings>about me</Headings>
        <SectionContainer>
          <p>
            I am a self motivated and self taught software developer, with
            strong work ethics. I am a well organized programmer with 1.5+ years
            of hands on experience in web and software development, passionate
            about Technology and driven to learn new skills plus adapting to the
            different changes and patterns in the IT industry.
          </p>
          <p>
            My primary goal is to use my expert problem solving and
            communication skills to work with teams developing products and
            tools people love to use, along with my strong personal knowledge
            and skills in software development.
          </p>
        </SectionContainer>
        <Headings>skills</Headings>
        <SectionContainer>
          <p>
            HTML5, CSS3, Bootstrap, JavaScript, Node.js, Express Framework, npm,
            GitHub, Mongoose, MongoDB, Postgres, Postman, Mocha/Chai, Jest,
            Travis CI, Code Climate, Coveralls, RESTFul APIs, Visual Studio, MS
            Office suite, Windows, Linux, Unix, bash
          </p>
        </SectionContainer>
      </Container>
    );
  }
}

export default AboutPage;
