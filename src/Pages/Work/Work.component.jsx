import React from "react";

import { Container, Headings, BackPointer } from "../container.styles";
import {ProjectsContainer, Projects} from './Work.styles';
// import { ReactComponent as TeamworkImg} from '../../assets/grp3.jpg';

const img = require('../../assets/grp3.jpg');

const WorkPage = () => {
  return (
    <Container>
      <BackPointer>
        <i className="fas fa-angle-right"></i>
      </BackPointer>
      <Headings>Projects</Headings>
    <ProjectsContainer>
    <Projects src={img}>
    </Projects>
    <Projects src={img}/>
    <Projects src={img}/>
    </ProjectsContainer>
    </Container>
  );
};

export default WorkPage;
