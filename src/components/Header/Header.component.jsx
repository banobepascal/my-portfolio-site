import React from "react";

import { MenuContainer, MenuTags } from "./Header.styles";

const Homepage = () => {
  return (
    <MenuContainer>
      <MenuTags>about</MenuTags>
      <MenuTags>work</MenuTags>
      <MenuTags>contact</MenuTags>
    </MenuContainer>
  );
};

export default Homepage;
