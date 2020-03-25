import styled from "styled-components";

export const HomepageContainer = styled.div `
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  text-align: center;
  z-index: 1;
  color: #fff;
  padding-bottom: 10vh;
  align-items: center;
`;

export const NameHeading = styled.h1 `
  color: #ff4040;
  font-size: 70px;
  font-weight: bold;
`;

export const MenuContainer = styled.div `
  width: 100%;
  text-align: center;
  margin: 6vh 0px;
  display: none;
`;

export const MenuTags = styled.a `
  margin: 0px 6%;
  font-size: 19px;
  color: #fff;
  text-decoration: underline;
`;

export const TableContainer = styled.table `
  width: 30%;
  margin: 6vh auto;
`;

export const TableRow = styled.tr `
  text-align: center;

  td a {
    color:#fff;
    font-size:22px;
    border-radius:50%;
    transition:0.4s ease-in-out;
    margin:0px 8px;
    text-align:center;

    &:hover {
    cursor: pointer;
    color: #ff4040;
    }
}
  }
`;