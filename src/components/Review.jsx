import React from "react";
import { PaymentStyled } from "./styles/Payment.styled";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

import NairaIcon from "./NairaIcon";
import { ButtonStyled } from "./styles/Button.styled";
import { cartActions } from "../Redux/CartSlice";
import { itemsActions } from "../Redux/ItemsSlice";

export default function Review() {
  const dispatch = useDispatch();
  window.scrollTo(0, 0);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const inputDetails = useSelector((state) => state.input.inputData);

  const { fullname, address, email, phone } = inputDetails;
  const addItems = cartItems.reduce((previous, initial) => {
    return previous + initial.price * initial.qty;
  }, 0);

  const deliveryFee = 5;
  const totalFee = deliveryFee + addItems;

  const handleClearCart = () => {
    dispatch(itemsActions.resetIsAdded())
    dispatch(cartActions.clearCart());
  };
  return (
    <>
      <PaymentStyled>
        <h3>1. Shipping</h3>
        <div className="shipping-details">
          <h4>Customer details</h4>
          <div className="name">{fullname}</div>
          <div className="address">{address}</div>
          <div className="email">{email}</div>
          <div className="phone">{phone}</div>
        </div>
        <h3>2. Review</h3>

        <div className="items-container">
          {cartItems.map((item) => {
            return (
              <div className="item" key={uuid()}>
                <div className="image-container">
                  <img src={item.image} alt="" />
                </div>
                <div className="description">
                  <h6>{item.title}</h6>
                  <p>QTY: {item.qty}</p>
                  <div className="amount">
                    <NairaIcon amount={item.price * item.qty} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="summary">
          <div className="summary-item">
            <div className="title">Subtotal</div>
            <div className="amount">
              <NairaIcon amount={addItems} />
            </div>
          </div>
          <div className="summary-item">
            <div className="title">Delivery</div>
            <div className="amount">
              <NairaIcon amount={deliveryFee} />
            </div>
          </div>
          <div className="summary-item">
            <div className="title">Total</div>
            <div className="amount">
              <NairaIcon amount={totalFee} />
            </div>
          </div>
        </div>

        <Link to={"/checkout/success"}>
          <ButtonStyled
            position="relative"
            display="flex"
            justify="center"
            alignItems="center"
            width="100%"
            margin="1rem 0"
            padding="4px"
            border="none"
            background={({ theme }) => theme.colors.primary}
            color="white"
            radius="4px"
            onClick={handleClearCart}
          >
            Place Order
          </ButtonStyled>
        </Link>
      </PaymentStyled>
    </>
  );
}
