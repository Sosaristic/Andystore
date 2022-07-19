import styled from "styled-components";

export const NairaIconStyled = styled.div`
color: green;
display: flex;
font-weight: bold;
font-size: ${(props)=>props.size};
width: fit-content;

.naira-icon{
    position: relative;
}
  .naira-icon::before {
    content: "";
    position: absolute;
    top: 45%;
    width: 100%;
    height: 0.1rem;

    border-top: 2px solid green;
    border-bottom: 2px solid green;
  }
`