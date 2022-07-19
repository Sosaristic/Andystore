import styled from "styled-components";
import { Container } from "./Container.styled";

export const RatingStyled = styled(Container)`

.rate-icon{
    
}
.count{
    margin-left: 6px;
    color: gray;
}
.review-text{
    margin-left: 2rem;
    font-weight: bold;
    color: #1e90ff;
    font-size: 3.5vw;
    @media(min-width: 992px){
        font-size: 1rem;
    }
}
`