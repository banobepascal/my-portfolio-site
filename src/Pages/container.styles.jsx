import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  height: 90vh;
  padding: 5vh 5vw;
  background: rgb(10, 18, 22);
  color: #fff;
  z-index: 9;
  position: fixed;
  max-height: 100vh;
  overflow-y: auto;
  display: none;
`;

export const BackPointer = styled.div`
  font-size: 25px;
  margin: 20px 0px;
  transition: 0.4s ease-in-out;

  &:hover {
    cursor: pointer;
  }
`;

export const Headings = styled.h1`
  font-size: 50px;
`;

export const SectionContainer = styled.section`
  margin: 8vh 0px;

  p {
    font-size: 21px;
  }
`;
