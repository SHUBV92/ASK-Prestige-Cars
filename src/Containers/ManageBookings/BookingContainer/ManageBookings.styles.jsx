import styled from "styled-components";

export const Container = styled.div`
  padding-top: 50px;
  background-color: #d4af37;
  width: 100%;
  padding-left: 5%;
  padding-right: 10%;

  h1 {
    font-family: GothamLight;
    font-size: 30px;
  }

  @media only screen and (min-width: 600px) {
    padding-left: 20%;
    padding-right: 20%;
  }
`;

export const Info = styled.div`
  display: inline-block;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  /* box-shadow: 5px 5px 0px black; */
  width: 100%;
  height: 300px;
  margin: 10px;
  background-color: white;

  /* button{
    padding-top:100px;
  } */
`;

export const InputContainer = styled.div`
  width: 90vw;
  padding-left: 10%;
  padding-right: 10%;
  InputContainer:before {
    opacity: 0.1;
  }

  @media only screen and (min-width: 600px) {
    width: 100%;
    height: 60%;
    /* padding-left: 20%; */
    /* padding-right: 20%; */
  }
`;

export const Input = styled.div`
  opacity: 1;
  
  .AdditionalInfo {
    display: none;
    padding-top: 10px;
    background-color: forestgreen;
  }

  .options{
    width: 100px;
    color: purple;
    padding-bottom:10px;
    background-color: yellow;

  }

  .options:focus + .AdditionalInfo{
    display: block;
  }

  /* .AdditionalInfo - .options:active{
          display: block
  } */
`;

export const Details = styled.div`
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  /* transition: 0.3s; */
  padding-right: 10px;
  width: 250px;
  height: 300px;
  margin: 10px;
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
