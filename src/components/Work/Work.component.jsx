import React from "react";
import $ from "jquery";

import { Container, Headings, BackPointer } from "../container.styles";
import { ProjectsContainer, Projects } from "./Work.styles";

const img = require("../../assets/grp3.jpg");

const WorkPage = (props) => {
  let workClass = "";
  let slideInRight = "animated slideInRight";
  let slideOutLeft = "animated slideOutLeft";

  if (props.showWorkPage) {
    workClass = slideInRight;
  }
  return (
    <Container className={workClass}>
      <BackPointer >
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
