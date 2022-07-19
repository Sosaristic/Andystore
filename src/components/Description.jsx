import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../Redux/CartSlice";
import { itemsActions } from "../Redux/ItemsSlice";

import { MdAdd } from "react-icons/md";
import { CgMathMinus } from "react-icons/cg";

import { DescriptionStyled } from "./styles/Description.styled";
import Rating from "./Rating";
import NairaIcon from "./NairaIcon";
import { Container } from "./styles/Container.styled";
import { ButtonStyled } from "./styles/Button.styled";

function Description(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const myId = +id;
  const items = useSelector((state) => state.items.items);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartFiltered = cartItems.filter((item) => item.id === myId);
  const { qty: itemQty } = cartFiltered[0] || {};

  const product = items.filter((item) => item.id === myId);
  const modified = product.map((item) => {
    return {
      ...item,
      qty: 1,
    };
  });
  
  const {
    id: itemId,
    title,
    price,
    description,
    image,
    rating,
    isAdded,
    
  } = product[0];

  const addedToCart = isAdded;
  const handleAddToCart = () => {
    dispatch(cartActions.addToCart(modified));
    dispatch(itemsActions.toogleItemAdded({ itemId, isAdded }));
  };
  const handleIncrease = () => {
    dispatch(cartActions.increaseNumOfItem({ itemId, itemQty }));
  };
  const handleDecrease = () => {
    dispatch(cartActions.decreaseNumOfItem({ itemId, itemQty }));
  };
 
  return (
    <>
      <DescriptionStyled>
        <img src={image} className="image" alt="item" />

        <h3>{title}</h3>
        <div className="rating">
          <div className="rate">
            <Rating rating={rating} reviewText={true} />
          </div>
        </div>
        <NairaIcon amount={price} />
        <h2>Description</h2>
        <div className="description">{description}</div>

        {addedToCart ? (
          <Container
            display="flex"
            position="sticky"
            bottom="3px"
            left="5vw"
            color="white"
            background="white"
            width="100%"
            margin="1rem 0 0 0"
            padding="6px"
            border="none"
            radius="10px"
            zIndex={({ theme }) => theme.zIndex.level3}
            justify="space-evenly"
            fontSize="3vw"
            alignItems="center"
          >
            <ButtonStyled
              background={({ theme }) => theme.colors.primary}
              color="white"
              width="10%"
              size="4vw"
              border="none"
              radius="4px"
              onClick={handleDecrease}
              disabled={itemQty < 2}
            >
              <CgMathMinus />
            </ButtonStyled>
            <div className="items-amount">{itemQty}</div>
            <ButtonStyled
              background={({ theme }) => theme.colors.primary}
              color="white"

              width="10%"
              size="4vw"
              border="none"
              radius="4px"
              onClick={handleIncrease}
            >
              <MdAdd />
            </ButtonStyled>
          </Container>
        ) : (
          <ButtonStyled
            position="sticky"
            bottom="3px"
            left="5vw"
            background={({ theme }) => theme.colors.primary}
            color="white"
            width="90%"
            margin="1rem 0 0 0"
            padding="6px"
            border="none"
            radius="10px"
            zIndex={({ theme }) => theme.zIndex.level3}
            onClick={handleAddToCart}
            
          >
            Add To Cart
          </ButtonStyled>
        )}
      </DescriptionStyled>
    </>
  );
}
export default Description;
