import styled from "styled-components";
export const FlexibleDiv = styled.div`
display: flex;
flex-direction: ${({direction})=>direction || "row"}
align-items: ${({align})=>align};
justify-content: ${({justify})=>justify}
background-color: ${({background})=> background};
color: ${({color})=> color};
height: ${({height})=>height}
`;
