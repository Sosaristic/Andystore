import React from "react";
import { useSelector } from "react-redux";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { CartBox } from "./styles/Cart.styled";
import CartCard from "./CartCard";
import EmptyCart from "./EmptyCart";
import NairaIcon from "./NairaIcon";

import { ButtonStyled } from "./styles/Button.styled";
export default function MyCart(props) {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cartItems);
  const auth = useSelector((state) => state.login.token);
  let { refreshToken } = auth || {};

  const cartLength = cart.length;

  const addItems = cart.reduce((previous, initial) => {
    return previous + initial.price * initial.qty;
  }, 0);
  const totalAmount = addItems;
  
  const itemTotal = (value) => (value > 1 ? `${value} items` : `${value} item`);
  const handleCheckOut = () => {
    if (refreshToken) {
      navigate("/checkout");
    } else {
      navigate("/login")
      toast.info("please sign in first", {
        autoClose: 2000,
      });
    }
  };
  return (
    <>
      <CartBox background="white">
        <h3>Shopping Cart</h3>

        {cartLength > 0 && (
          <div className="total-amount">
            Subtotal ({itemTotal(cartLength)}){" "}
            <div className="total-amount-value">
              <NairaIcon amount={totalAmount} />
            </div>
          </div>
        )}
        {cartLength > 0 ? (
          cart.map((item) => {
            return (
              <CartCard
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
                key={uuid()}
                favorite={item.isFavorite}
                qty={item.qty}
                handleDialog = {props.handleDialog}
              />
            );
          })
        ) : (
          <EmptyCart />
        )}

        {cartLength > 0 && (
          <div className="checkout">
            <ButtonStyled
              display="flex"
              justify="space-evenly"
              alignItems="center"
              background="white"
              color="green"
              width="100%"
              margin="1rem 0 0 0"
              padding="6px"
              border="1px solid green"
              radius="8px"
              zIndex={({ theme }) => theme.zIndex.level3}
              onClick={handleCheckOut}
            >
              Checkout <NairaIcon amount={totalAmount} />
            </ButtonStyled>
          </div>
        )}
      </CartBox>
    </>
  );
}
