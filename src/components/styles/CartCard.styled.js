import styled from "styled-components";

export const CartCardStyled = styled.div`
  posittion: relative;
  padding: 10px;
  box-shadow: 0.6px 1.1px  1px gray;
  margin-top: .5rem;
  @media(min-width: 992px){
    width: 60%;
    margin: 0 auto;
  }
  .item-image {
    width: 15%;
    
  }
  .item-title {
    font-size: 4vw;
    margin-left: auto;

    color: DarkGray;
    letter-spacing: 1px;
    @media(min-width: 992px){
     font-size: 1.5rem;
    }

  }
  .item-price, .item-qty, .item-total {
    font-weight: bold;
    font-size: 4vw;
    @media(min-width: 992px){
      font-size: 1.5rem;
     }
  }
  .amount, .item-arithmetric {
    margin-left: auto;
    font-weight: bold;
  }
 span{
    color: black;
    font-size: 3.5vw;
    @media(min-width: 992px){
      font-size: 1.5rem;
     }
 }
 .item-favorite{
    display: flex;
    align-items: center;
    width: 45%;
    border: 1px solid ${({theme})=>theme.colors.primary}
 }
 .delete-text, .favorite-text{
    margin-left: 5px;
 }
 .item-arithmetric{
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media(min-width: 992px){
   height: 4rem;
   }
 }
`;
