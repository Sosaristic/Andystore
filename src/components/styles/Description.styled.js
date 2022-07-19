import styled from "styled-components";
import { Container } from "./Container.styled";

export const DescriptionStyled = styled(Container)`
  position: relative;
  padding: 4px 8px;
  background-color: white;
  margin: 0 auto;

  h3 {
    word-break: break;
    margin-top: 0.5rem;
  }
  h2 {
    color: #463f4f;
    margin-top: 1.5rem;
  }
  .image {
    width: 60vw;
    height: 20%;
    @media(min-width: 992px){
      height: 14rem;
      width: 40%;
    }
  }
  .rating {
    display: flex;
  }
  .price {
    padding: 4px 0;
    font-size: x-large;
    font-weight: bold;
    color: green;
  }
  .price .naira-icon {
    position: relative;
    display: inline-block;
  }
  .price .naira-icon::before {
    content: "";
    position: absolute;
    top: 0.9rem;
    left: 0.1rem;
    width: 1rem;
    height: 0.3rem;

    border-top: 2px solid green;
    border-bottom: 2px solid green;
  }
  .description {
    width: 70vw;
    padding: 4px 0;
    color: DarkGray;
    font-weight: bold;
  }
  .items-amount{
    color: black;
    font-size: 4vw;
  }
`;
