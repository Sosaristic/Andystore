import React from "react";
import {Link} from "react-router-dom";
import CartImage from "./svg/cart2.svg";

import { ButtonStyled } from "./styles/Button.styled";
import { EmptyStyled } from "./styles/EmptyCart.styled";


export default function EmptyCart(props){
    return(
        <>
        <EmptyStyled>
        <div >
          <img src={CartImage} alt="cart" />
        </div>
        <p>No items added to cart yet</p>
        <Link to="/">
        <ButtonStyled
          width="50%"
          background="white"
          textColor= {({theme})=>theme.colors.primary}
          radius="12px"
          padding="4px 8px"
          margin="1rem 0"
          size="medium"
          weight="bold"
        >
          Start Shopping
        </ButtonStyled>
        </Link>
    
        </EmptyStyled>
        </>
    )
}