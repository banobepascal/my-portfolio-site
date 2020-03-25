import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100%;
  text-align: center;
  display: none;
  margin: 0;

  @media screen and (max-width: 800px) {
    display:inline-block;
  }
`;

export const MenuTags = styled.a`
  margin: 0px 6%;
  font-size: 19px;
  color: #fff;
  cursor: pointer;
`;

