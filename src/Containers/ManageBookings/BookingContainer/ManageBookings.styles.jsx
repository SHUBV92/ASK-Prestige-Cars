import styled from "styled-components"

export const Container = styled.div`
padding-top: 50px;
background-color: lightblue;
width:100%;
padding-left: 5%;
padding-right: 5%;


`

export const Info= styled.div`
display: inline-block;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 300px;
  margin: 10px;
  background-color:white;

  /* button{
    padding-top:100px;
  } */

`

export const InputContainer = styled.div`
width: 90vw;
padding-left: 10%;
padding-right: 10%;
InputContainer:before{
  opacity: 0.1;
};

.dropdownButton{
}
`
export const Input = styled.div`
opacity: 1;
`


export const Details= styled.div`
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  /* transition: 0.3s; */
  padding-right:10px;
  width: 250px;
  height: 300px;
  margin: 10px;

`

export const SearchButton = styled.div`
  padding-top:45px;
  align-items: center;
`