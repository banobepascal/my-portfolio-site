import React from "react";

import {
  HomepageContainer,
  NameHeading,
  TableContainer,
  TableRow,
  MenuContainer,
  MenuTags
} from "./Homepage.styles";
const Homepage = () => {
  return (
    <HomepageContainer>
      <NameHeading>Pascal</NameHeading>
      <h2>Fullstack / Javascript / Software developer </h2>
      <MenuContainer>
        <MenuTags>about</MenuTags>
        <MenuTags>work</MenuTags>
        <MenuTags>contact</MenuTags>
      </MenuContainer>
      <TableContainer>
        <TableRow>
          <td>
            <a href="#">
              <i class="fab fa-github"></i>
            </a>
          </td>
          <td>
            <a href="#">
              <i class="fab fa-linkedin"></i>
            </a>
          </td>
          <td>
            <a href="#">
              <i class="fab fa-medium"></i>
            </a>
          </td>
          <td>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </td>
        </TableRow>
      </TableContainer>
    </HomepageContainer>
  );
};

export default Homepage;
