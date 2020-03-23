import React from 'react';

import Homepage from './Pages/Homepage/Homepage.component'
import {AboutTag, WorkTag, ContactTag, FooterContainer} from './App.styles'
function App() {
  return (
    <div>
    <AboutTag>about</AboutTag>
    <WorkTag>work</WorkTag>
    <ContactTag>contact</ContactTag>
      <Homepage/>
    <FooterContainer>
      <a href="#">Banobe Pascal</a>
    </FooterContainer>
    </div>
  );
}

export default App;
