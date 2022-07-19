import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  HeaderStyled,
  MenuIcon,
  StoreName,
  StoreSub,
  UserIcon,
  Cart,
} from "./styles/Header.styled";

import { MdMenu } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";


export default function Header(props) {

  const cartItems = useSelector((state)=> state.cart.cartItems);
  const cartLength = cartItems.reduce((previous, initial) => {
    return previous +  initial.qty;
  }, 0);
  return (
    <>
      <HeaderStyled>
        <MenuIcon>
          <MdMenu size={30} onClick={props.handleDisplaySideBar} />
        </MenuIcon>
        <Link to="/">
          <StoreName textColor={({ theme }) => theme.colors.primary}>
            ANDY<StoreSub myColor="coral">store</StoreSub>
          </StoreName>
        </Link>
        <UserIcon onClick={props.handleDisplayProfile}>
          <FaUser size={30} />
        </UserIcon>
        <Link to="/cart">
          <Cart>
            <div className="cart-icon"><MdOutlineShoppingCart size={30} /></div>
            {cartLength > 0 && <div className="cart-length">{cartLength}</div>}
          </Cart>
        </Link>
      </HeaderStyled>
    </>
  );
}
