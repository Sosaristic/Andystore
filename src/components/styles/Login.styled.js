import styled from "styled-components";

export const LoginStyled = styled.div`
  position: relative;
  margin: 1rem auto;
  width: 90%;
  padding: 1rem;

  @media(min-width: 992px){
    width: 50%;
  }
  .header-text {
    font-size: 5vw;
    font-weight: bold;
    @media(min-width: 992px){
      font-size: 2.5rem;
    }
  }
  input {
    display: block;
    width: 100%;
    height: 2.5rem;
    margin: 2rem auto;
    outline: none;
    border: none;
    border-bottom: 0.5px solid gray;
    padding-left: 1rem;
    font-size: medium;
    &:focus {
      border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    }
  }
  .have-account{
    margin-top: 1rem;
    font-size: medium;
    width: 100%;
  }
`;
