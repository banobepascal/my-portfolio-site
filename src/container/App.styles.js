import styled, { css } from "styled-components";

const tagStyles = css`
  width: 10vw;
  height: 10vw;
  text-align: center;
  font-size: 25px;
  background: transparent;
  bottom: 40vh;
  color: #fff;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 4;
  transition: 0.4s ease-in-out;
  border-radius: 0px 0px 100px 100px;
  animation-delay: 2.1s;

  &: hover {
    background: #FF4040;
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    display:none;
  }

  }
`;

export const AboutTag = styled.a`
  left: 0;
  transform: rotate(-90deg);

  ${tagStyles}
`;

export const WorkTag = styled.a`
  right: 0;
  transform: rotate(90deg);

  ${tagStyles}
`;

export const ContactTag = styled.a`
  left: 45vw;

  ${tagStyles}
  border-radius:100px 100px 0px 0px;
  bottom: 0;
`;

export const FooterContainer = styled.div`
  color: #fff;
  width: 92vw;
  padding: 5vh 4vw;
  text-align: right;
  position: fixed;
  z-index: 1;
  bottom: 0;
  font-size: 16px;
  font-weight: bold;

  a {
    color: #FF4040;
    text-decoration: none;
  }

  @media screen and (max-width: 800px) {
    text-align:center;
  }
`;
