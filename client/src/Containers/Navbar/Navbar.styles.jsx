import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  width: 100%;
  background-color: linear-gradient(
    110deg,
    #fdcd3b 60%,
    #ffed4b 60%
  );
  /* height: 250px; */
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  background: black;

  h3 {
    font-size: 10px;
    color: black;
    /* padding-left:800px; */
  }
  .navbar {
    background: linear-gradient(
      90deg,
      black 18%,
      grey 40%,
      white 70%
    );

    /* background: black; */
  }
`;

export const Img = styled.img`
  width: 100px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 1);
  border-radius: 10px;
`;

export const NavLinks = styled.div`
  @media only screen and (min-width: 768px) {
    padding-left: 70%;
    color: black;
  }

  @media only screen and (min-width: 600px) {
    padding-left: 50%;

  }

  Nav-Links {
    text-align: right;
  }
  .booking {
    margin-right: 100px;
    h2 {
      padding-left: 100px;
    }
  }
`;

// Navbar Style
// background: linear-gradient(143deg, black 28%,#fdcd3b 70% ,#FFF 70%);