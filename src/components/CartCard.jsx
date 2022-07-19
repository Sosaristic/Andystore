import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../Redux/CartSlice";
import { ButtonStyled } from "./styles/Button.styled";
import { CartCardStyled } from "./styles/CartCard.styled";
import { Container } from "./styles/Container.styled";

import {
  MdOutlineFavoriteBorder,
  MdOutlineFavorite,
  MdOutlineDelete,
  MdAdd,
} from "react-icons/md";
import { CgMathMinus } from "react-icons/cg";

import NairaIcon from "./NairaIcon";

export default function CartCard(props) {
  let itemId = props.id;
  let itemQty = props.qty
  const dispatch = useDispatch();
  const favoriteClicked = props.favorite;
  const subTotal = props.price * props.qty

 
const handleDelete = ()=>{
  props.handleDialog( itemId)
 // dispatch(itemsActions.toogleItemAdded({itemId, isAdded}))

  //dispatch(cartActions.removeFromCart(props.id))
 
}
const handleIncrease = ()=>{
  dispatch(cartActions.increaseNumOfItem({itemId, itemQty}))
}
const handleDecrease = ()=>{
  dispatch(cartActions.decreaseNumOfItem({itemId, itemQty}))
}

  return (
    <>
      <CartCardStyled>
        <Container display="flex" direction="column">
          <Container display="flex" direction="row" padding="6px">
            <img className="item-image" src={props.image} alt="" />
            <div className="item-title">{props.title}</div>
          </Container>
          <Container display="flex" direction="row" padding="4px">
            <div className="item-price">Price:</div>
            <div className="amount">
              <NairaIcon amount={props.price} size="large"/>
            </div>
          </Container>
        </Container>
        <Container
          position="relative"
          display="flex"
          direction="row"
          padding="4px"
        >
          <div className="item-qty">Qty:</div>
          <div className="item-arithmetric">
            <ButtonStyled
              background={({ theme }) => theme.colors.primary}
              color="white"
              width="20%"
              size="3vw"
              border="none"
              radius="4px"
              onClick={handleDecrease}
              disabled={itemQty < 2}
            >
              <CgMathMinus />
            </ButtonStyled>
            <span>{props.qty}</span>
            <ButtonStyled
              background={({ theme }) => theme.colors.primary}
              color="white"
              width="20%"
              size="3vw"
              border="none"
              radius="4px"
              onClick={handleIncrease}
            >
              <MdAdd />
            </ButtonStyled>
          </div>
        </Container>
        <Container display="flex" direction="row">
          <div className="item-total">subtotal:</div>
          <div className="amount"><NairaIcon amount={subTotal} size="small"/></div>
        </Container>
        <Container
          display="flex"
          direction="row"
          justify="space-evenly"
          margin=".5rem 0 0 0"
        >
          <ButtonStyled
            width="45%"
            display="flex"
            alignItems="center"
            justify="space-evenly"
            size="3vw"
            border="none"
          >
            {favoriteClicked ? (
              <MdOutlineFavorite size={25} color={"coral"} />
            ) : (
              <MdOutlineFavoriteBorder size={25} color={"coral"} />
            )}
          </ButtonStyled>
          <ButtonStyled
            width="45%"
            display="flex"
            alignItems="center"
            justify="space-evenly"
            size="3vw"
            border="none"
          >
            <div className="delete-icon" onClick={handleDelete}>
              <MdOutlineDelete size={25} color={"red"} />
            </div>
          </ButtonStyled>
        </Container>
      </CartCardStyled>
    </>
  );
}
