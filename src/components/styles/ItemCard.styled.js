import styled from "styled-components";

export const ItemCardStyled = styled.div`
  position: relative;
  width: 45vw;
  margin-top: 0.5rem;
  background-color: white;
  border-radius: 8px;
  font-size: 3.5vw;
  padding: 8px;
  @media(min-width: 992px){
    width: 23%;
    font-size: small;
  }
  .item-image{
    height: 20%;
  }
  .image {
    width: 100%;
    height: 10rem;
    @media(min-width: 992px){
     height: 12rem;
    }
  }
  .item-title{
    height: 6rem;
    padding: 0.5rem;
    font-size: 2.8vw;
    @media(min-width: 992px){
      height: auto;
      font-size: 1rem;
    }
  }
  
 
  .item-price {
    padding: 0.5rem;
    font-size: 4vw;
    color: green;
    font-weight: bold;
    @media(min-width: 992px){
      font-size: 1rem;
    }
  }
  .favorite{
    margin-left: auto;
  }
  .rating{
    margin-left: 8px;
    width: fit-content;
    font-size: large;
  }
`;
