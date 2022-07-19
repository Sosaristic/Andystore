import styled from "styled-components";

export const InputStyled = styled.div`
  position: relative;
  width: 65%;
  text-align: center;
  margin: 1rem auto;
  @media(min-width: 992px){
    width: 50%;
  }

  input {
    height: 2.5rem;
    border: 1px solid gray;
    width: 100%;
    border-radius: 5px;
    padding-left: 1rem; 
    outline: none;
    line-height: 100%;
    font-size: 100%;

    &:focus{
        border: 1px solid ${({theme})=>theme.colors.primary}; 
    }
  }

  div {
    margin-bottom: 0.3rem;
    text-align: left;
  }
`;
