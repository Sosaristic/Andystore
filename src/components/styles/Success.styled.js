import styled from "styled-components";

export const SuccessStyled = styled.div`
  position: relative;
  text-align: center;
  padding-top: 2rem;
  background-color: white;
  height: 100vh;
  margin: 0 auto;

  .status-icon {
    margin: 0 auto;
    font-size: 12vw;
    color: lightGreen;
    @media(min-width: 992px){
      font-size: 6rem;
    }
  }
  .success {
    font-size: 7vw;
    @media(min-width: 992px){
      font-size: 2rem;
    }
  }
  p {
    margin-top: 1rem;
  }
`;
