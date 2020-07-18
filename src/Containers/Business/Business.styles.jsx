import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  img {
    height: 30%;
    width: 50%;
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
`;
