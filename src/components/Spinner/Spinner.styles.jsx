import styled from "styled-components";

export const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: #fff;
  z-index: 999;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  animation: rotate 0.56s infinite linear;
  width:50px;
  height:50px;
  border: 4px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  margin:0;
}
@keyframes rotate {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
}
`;
