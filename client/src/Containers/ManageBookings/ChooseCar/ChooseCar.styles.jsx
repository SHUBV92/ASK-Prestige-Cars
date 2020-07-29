import styled from "styled-components";

export const Container = styled.div`
  /* background-color: #f6f6f6; */
  .header {
    padding: 100px;
  }
  .carousel {
    padding: 10px;
  }
  .carinfo {
    /* margin-top: 800px; */
    padding-top: 300px;
  }

  .carousel-caption{
    padding-top:100px;
    color: black;
  }

  span {
    padding-top: 180px;
    /* padding:30px; */
    border-style: none;
    color: purple;
    /* background-color: white; */
  }

  p {
    border-style: groove;
    padding: 20px;
  }

/* Mobile  */
  @media only screen and (min-width: 600px) {
    padding-right: 150px;
    padding-left: 150px;
  }

  @media only screen and (min-width: 1200px) {
    padding-right: 500px;
    padding-left: 500px;
  }
`;
