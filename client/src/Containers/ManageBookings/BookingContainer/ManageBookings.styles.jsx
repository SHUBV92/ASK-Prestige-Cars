/* Extra small devices (phones, 600px and down) */
/* Small devices (portrait tablets and large phones, 600px and up) */
/* Medium devices (landscape tablets, 768px and up) */
/* Large devices (laptops/desktops, 992px and up) */
/* Extra large devices (large laptops and desktops, 1200px and up) */

import styled from "styled-components";

export const Container = styled.div`
  /* sizing */
  padding-top: 50px;
  width: 100%;
  padding-left: 5%;
  padding-right: 10%;

  /* color */
  background: linear-gradient(
    110deg,
    #d4af37 60%,
    #fdcd3b 60%
  );
  /* background-color: #d4af37; */
  /* border-radius: 10px; */

  h1 {
    font-family: GothamLight;
    font-size: 30px;
  }

  /* Small devices  */
  @media only screen and (min-width: 600px) {
    padding-left: 10%;
    padding-right: 10%;
  }
`;

export const Info = styled.div`
  /* sizing */
  display: inline-block;
  height: 300px;
  width: 100%;
  margin: 10px;
  /* styling */
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);

  @media only screen and (min-width: 600px) {
    height: 400px;
  }
`;

export const InputContainer = styled.div`
  width: 90vw;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 15px;
  InputContainer:before {
    opacity: 0.1;
  }

  /* Small devices  */
  @media only screen and (min-width: 600px) {
    width: 100%;
    height: 60%;
    padding-top: 45px;
    /* padding-left: 20%; */
    /* padding-right: 20%; */
  }
`;

export const Input = styled.div`
  opacity: 1;

  .AdditionalInfo {
    display: none;
    padding-top: 10px;
  }

  .options {
    width: 100px;
    color: red;
    padding-bottom: 10px;
  }

  .options:focus + .AdditionalInfo {
    display: block;
  }
`;

export const Details = styled.div`
  /* sizing */
  display: inline-block;
  width: 250px;
  height: 300px;
  margin: 10px;
  padding-right: 10px;
  /* styling */
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const SearchButton = styled.div`
  padding-top: 2px;
  align-items: center;
  color: red;
`;

export const Price = styled.div`
  padding-top: 2px;
  padding-left: 180px;
  font-size: 20px;
`;
