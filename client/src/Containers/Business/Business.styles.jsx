import styled from "styled-components";

export const Container = styled.div`
  /* background-color: white; */

  background: 
        linear-gradient(180deg, rgba(248, 184, 139,0) 20%, rgba(248, 184, 139,.1) 20%, rgba(248, 184, 139,.1) 40%, rgba(248, 184, 139,.2) 40%, rgba(248, 184, 139,.2) 60%, rgba(248, 184, 139,.4) 60%, rgba(248, 184, 139,.4) 80%, rgba(248, 184, 139,.5) 80%),
    linear-gradient(45deg, rgba(250, 248, 132,.3) 20%, rgba(250, 248, 132,.4) 20%, rgba(250, 248, 132,.4) 40%, rgba(250, 248, 132,.5) 40%, rgba(250, 248, 132,.5) 60%, rgba(250, 248, 132,.6) 60%, rgba(250, 248, 132,.6) 80%, rgba(250, 248, 132,.7) 80%),
    linear-gradient(-45deg, rgba(186, 237, 145,0) 20%, rgba(186, 237, 145,.1) 20%, rgba(186, 237, 145,.1) 40%, rgba(186, 237, 145,.2) 40%, rgba(186, 237, 145,.2) 60%, rgba(186, 237, 145,.4) 60%, rgba(186, 237, 145,.4) 80%, rgba(186, 237, 145,.6) 80%),
        linear-gradient(90deg, rgba(178, 206, 254,0) 20%, rgba(178, 206, 254,.3) 20%, rgba(178, 206, 254,.3) 40%, rgba(178, 206, 254,.5) 40%, rgba(178, 206, 254,.5) 60%, rgba(178, 206, 254,.7) 60%, rgba(178, 206, 254,.7) 80%, rgba(178, 206, 254,.8) 80%),
    linear-gradient(-90deg, rgba(242, 162, 232,0) 20%, rgba(242, 162, 232,.4) 20%, rgba(242, 162, 232,.4) 40%, rgba(242, 162, 232,.5) 40%, rgba(242, 162, 232,.5) 60%, rgba(242, 162, 232,.6) 60%, rgba(242, 162, 232,.6) 80%, rgba(242, 162, 232,.8) 80%),
    linear-gradient(180deg, rgba(254, 163, 170,0) 20%, rgba(254, 163, 170,.4) 20%, rgba(254, 163, 170,.4) 40%, rgba(254, 163, 170,.6) 40%, rgba(254, 163, 170,.6) 60%, rgba(254, 163, 170,.8) 60%, rgba(254, 163, 170,.8) 80%, rgba(254, 163, 170,.9) 80%)
;
    background-color: rgb(254, 163, 170);
    background-size: 100% 100%;
    min-height: 100%;
padding: 50px;

  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  img {
    height: 30%;
    width: 50%;
  }
  /* Mobile Device */
  @media only screen and (min-width: 600px) {
    padding:50px;
  }
`;

export const TextBox = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: black;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  opacity: 0.8;

  @media only screen and (min-width: 600px) {
    padding: 50px;
    padding-right: 200px;
  }
`;
