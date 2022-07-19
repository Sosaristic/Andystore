import styled from "styled-components";
import { Container } from "./Container.styled";

export const ShippingStyled = styled(Container)`
position: relative;
padding: 6px 6px;
text-align: center;
background-color: white;
width: 90%;

h3{
    margin: 1rem .5rem;
    text-align: left;
}
button{
    all: unset;
    background-color: ${({theme})=>theme.colors.primary};
    color: white;
    height: 2rem;
    padding: 4px 8px;
    margin-bottom: .5rem;
}
.others{
    color: Gray;
}
`