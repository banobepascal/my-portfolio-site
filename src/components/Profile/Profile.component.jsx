import React from "react";

import Header from "../Header/Header.component";

import {
  ProfileContainer,
  NameHeading,
  TableContainer,
  TableRow
} from "./Profile.styles";

const Profile = () => {
  return (
    <ProfileContainer className="animated slideInDown">
    <Header/>
      <NameHeading>Pascal</NameHeading>
      <h2>Fullstack / Javascript / Software developer </h2>
      <TableContainer>
        <tbody>
          <TableRow>
            <td className="animated zoomIn" style={{ animationDelay: "2.2s" }}>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
            </td>
            <td className="animated zoomIn" style={{ animationDelay: "2.4s" }}>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </td>
            <td className="animated zoomIn" style={{ animationDelay: "2.6s" }}>
              <a href="#">
                <i className="fab fa-medium"></i>
              </a>
            </td>
            <td className="animated zoomIn" style={{ animationDelay: "2.8s" }}>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </td>
          </TableRow>
        </tbody>
      </TableContainer>
    </ProfileContainer>
  );
};

export default Profile;
