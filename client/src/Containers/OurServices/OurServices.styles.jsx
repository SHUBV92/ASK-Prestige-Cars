import styled from "styled-components";
//good job
export const Container = styled.div`
  /* background-color: white; */

  background: linear-gradient(
      180deg,
      rgba(248, 184, 139, 0) 20%,
      rgba(248, 184, 139, 0.1) 20%,
      rgba(248, 184, 139, 0.1) 40%,
      rgba(248, 184, 139, 0.2) 40%,
      rgba(248, 184, 139, 0.2) 60%,
      rgba(248, 184, 139, 0.4) 60%,
      rgba(248, 184, 139, 0.4) 80%,
      rgba(248, 184, 139, 0.5) 80%
    ),
    linear-gradient(
      45deg,
      rgba(250, 248, 132, 0.3) 20%,
      rgba(250, 248, 132, 0.4) 20%,
      rgba(250, 248, 132, 0.4) 40%,
      rgba(250, 248, 132, 0.5) 40%,
      rgba(250, 248, 132, 0.5) 60%,
      rgba(250, 248, 132, 0.6) 60%,
      rgba(250, 248, 132, 0.6) 80%,
      rgba(250, 248, 132, 0.7) 80%
    ),
    linear-gradient(
      -45deg,
      rgba(186, 237, 145, 0) 20%,
      rgba(186, 237, 145, 0.1) 20%,
      rgba(186, 237, 145, 0.1) 40%,
      rgba(186, 237, 145, 0.2) 40%,
      rgba(186, 237, 145, 0.2) 60%,
      rgba(186, 237, 145, 0.4) 60%,
      rgba(186, 237, 145, 0.4) 80%,
      rgba(186, 237, 145, 0.6) 80%
    ),
    linear-gradient(
      90deg,
      rgba(178, 206, 254, 0) 20%,
      rgba(178, 206, 254, 0.3) 20%,
      rgba(178, 206, 254, 0.3) 40%,
      rgba(178, 206, 254, 0.5) 40%,
      rgba(178, 206, 254, 0.5) 60%,
      rgba(178, 206, 254, 0.7) 60%,
      rgba(178, 206, 254, 0.7) 80%,
      rgba(178, 206, 254, 0.8) 80%
    ),
    linear-gradient(
      -90deg,
      rgba(242, 162, 232, 0) 20%,
      rgba(242, 162, 232, 0.4) 20%,
      rgba(242, 162, 232, 0.4) 40%,
      rgba(242, 162, 232, 0.5) 40%,
      rgba(242, 162, 232, 0.5) 60%,
      rgba(242, 162, 232, 0.6) 60%,
      rgba(242, 162, 232, 0.6) 80%,
      rgba(242, 162, 232, 0.8) 80%
    ),
    linear-gradient(
      180deg,
      rgba(254, 163, 170, 0) 20%,
      rgba(254, 163, 170, 0.4) 20%,
      rgba(254, 163, 170, 0.4) 40%,
      rgba(254, 163, 170, 0.6) 40%,
      rgba(254, 163, 170, 0.6) 60%,
      rgba(254, 163, 170, 0.8) 60%,
      rgba(254, 163, 170, 0.8) 80%,
      rgba(254, 163, 170, 0.9) 80%
    );
  transform: matrix(1.04, 0, 0, 1.04, 0, 0);
  background-color: rgb(254, 163, 170);
  background-size: 100% 100%;
  min-height: 100%;
  padding: 50px;
  /* filter: blur(10px); */

  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  img {
    height: 30%;
    width: 50%;
  }
  /* Mobile Device */
  @media only screen and (min-width: 600px) {
    padding: 50px;
  }
  /* @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1200px) {
  } */
`;

export const TextBox = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: black;
  color: white;
  padding-left: 10%;
  padding-right: 10%;
  opacity: 0.8;
  text-align: center;

  h3 {
    padding: 10%;
  }

  @media only screen and (min-width: 600px) {
    padding: 50px;
    padding-right: 200px;
  }
  /* @media only screen and (min-width: 768px) {
  } */

  @media only screen and (min-width: 992px) {
    padding-left: 100px;
    padding-right: 100px;
  }
  /* @media only screen and (min-width: 1200px) {
  } */
`;
