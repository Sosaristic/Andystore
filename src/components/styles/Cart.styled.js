import styled from "styled-components";
export const CartBox = styled.div`
position: relative;

height: 100%;
width: 100%;
text-align: center;
padding: 6px 12px;  
background-color: ${({ background }) => background};
@media(min-width: 992px){
   
}
h3{
    color: #4d4f54;
    text-align: left;
}
.total-amount{
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 5vw;
    text-align: left;
    padding: 5px 0;
    @media(min-width: 992px){
        font-size: 2.5rem;
    }
}
.total-amount-value{
    margin-left: auto;
}
img{
    width: 60%; 
    
}

p{
    font-size: large;
    font-weight: bold;
    color: #696969:
}
.checkout{
    position: sticky;
    left: 0;
    bottom: 3px;
    width: 80vw;
    margin: 0 auto;
    @media(min-width: 992px){
        position: sticky;
        left: 0;
        bottom: 10px;
        width: 50%;
        margin: 0 auto;
    }
}
`;
