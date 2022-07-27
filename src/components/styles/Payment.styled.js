import styled from "styled-components";

export const PaymentStyled = styled.div`
position: relative;
padding: 1rem 3rem;
background-color: white;
margin: 0 auto;

@media(min-width: 992px){
    width: 80%;
}
h4{
    font-weight: bold;
    color: black;
}
.shipping-details{
    margin-top: .5rem;
    color: gray;
    padding-left: 10%;
}
h3{
    margin-top: 1rem;
}
.items-container{
    position: relative;
    display: flex;
    align-items: center;

    margin-top: 1rem;
    min-width: 100%;
    height: 7rem;
    overflow-x: auto;
  
}
.item{
    position: relative;
    display: flex;
    justify-content: space-evenly;
    min-width: 100%;
    margin-right: .5rem; 
    height: 100%;
    @media(min-width: 992px){
        min-width: 30%;
    }
}

.image-container, .description{
    position: relative;
    height: 90%;
    width: 45%;
}
.description{
    padding: 4px 6px;
}
img{
    width: 100%;
    height: 100%;
}
p{
    font-size: small;
}
.summary{
    position: relative;
    margin-top: 2rem;
}
.summary-item{
    display: flex;
padding: 4px 6px;
}
.title{
    font-weight: bold;
}
.amount{
    margin-left: auto;
}
`