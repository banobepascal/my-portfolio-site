import styled from "styled-components";

export const FormInput = styled.input`
  width: 46%;
  margin: 20px 1%;
  background: transparent;
  border: 0px;
  border-bottom: 3px solid rgba(255, 255, 255, 0.5);
  padding: 8px 10px;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  transition: 0.4s ease-in-out;
  color: #fff;
  font-weight: bold;

  &:focus {
    outline: none;
    border-bottom: 3px solid rgba(255, 255, 255, 1);
  }
`;

export const FormTextArea = styled.textarea`
  width: 96%;
  margin: 20px 1%;
  padding: 8px 10px;
  border: 0px;
  border-bottom: 3px solid rgba(255, 255, 255, 0.5);
  padding: 8px 10px;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  background: transparent;
  resize: none;
  transition: 0.4s ease-in-out;
  color: #fff;
  font-weight: bold;

  &:focus {
    outline: none;
    border-bottom: 3px solid rgba(255, 255, 255, 1);
  }
`;

export const SendButton = styled.button`
  font-size: 18px;
  font-family: "Josefin Sans", sans-serif;
  color: #fff;
  background: transparent;
  border: 3px solid #fff;
  padding: 8px 40px;
  border-radius: 80px;
  font-weight: bold;
  margin: 2vh 10px;
  transition: 0.4s ease-in-out;

  &: hover {
    cursor: pointer;
    color: #000;
    background: #fff;
  }
`;
