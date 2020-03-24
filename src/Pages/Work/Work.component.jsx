import React from "react";
import $ from "jquery";

import { Container, Headings, BackPointer } from "../container.styles";
import { ProjectsContainer, Projects } from "./Work.styles";

const img = require("../../assets/grp3.jpg");

const WorkPage = () => {
  const closeWork = () => {
    $(".work_container").addClass("animated slideOutRight");
    setTimeout(function() {
      $(".work_container").removeClass("animated slideOutRight");
      $(".work_container").css("display", "none");
    }, 800);
  };

  return (
    <Container className="work_container">
      <BackPointer onClick={closeWork}>
        <i className="fas fa-angle-right"></i>
      </BackPointer>
      <Headings>Projects</Headings>
      <ProjectsContainer>
        <Projects src={img}></Projects>
        <Projects src={img} />
        <Projects src={img} />
      </ProjectsContainer>
    </Container>
  );
};

export default WorkPage;
