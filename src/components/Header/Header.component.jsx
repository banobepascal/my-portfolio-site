import React from "react";

import { MenuContainer, MenuTags } from "./Header.styles";

const Header = (props) => {
  return (
    <MenuContainer>
      <MenuTags onClick={props.showAbout}>about</MenuTags>
      <MenuTags onClick={props.showWork}>work</MenuTags>
      <MenuTags onClick={props.showContact}>contact</MenuTags>
    </MenuContainer>
  );
};

export default Header;
