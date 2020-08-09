import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);

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

  .carousel-caption {
    padding-top: 100px;
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
    padding: 10%;
  }
  @media only screen and (min-width: 768px) {
    padding: 10%;
  }

  @media only screen and (min-width: 992px) {
    padding: 10%;
  }

  @media only screen and (min-width: 1200px) {
    padding: 10%;
  }
`;
