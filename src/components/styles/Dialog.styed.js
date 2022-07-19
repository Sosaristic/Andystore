import styled from "styled-components";
import { Container } from "./Container.styled";

export const DialogStyled = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(227, 232, 229, 0.1);
  z-index: 2000;
  .wrapper {
    position: relative;
    background-color: white;
    height: 10rem;
    width: 70%;
    padding: 8px;
    color: Gray;
    box-shadow: 0.5px 0.5px 10px 2px gray;
  }
  .text {
    margin-top: 2rem;
    text-align: center;
  }
`;
