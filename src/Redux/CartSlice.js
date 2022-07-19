import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart(state, action) {
      const { id } = action.payload[0];
      
      if (state.cartItems.length === 0) {
        return {
          cartItems: [...state.cartItems, ...action.payload],
        };
      }
      if (state.cartItems.length !== 0) {
        if (state.cartItems.some((item) => item.id === id)) {
          return {
            cartItems: state.cartItems.map((item) => {
              if (item.id === id) {
                return {
                  ...item,
                  qty: item.qty + 1,
                };
              }
              return item;
            }),
          };
        }
        else {
          return {
            cartItems: [...state.cartItems, ...action.payload],

          }
        }
      }
    },
    increaseNumOfItem(state, action) {
      const { itemId, itemQty } = action.payload;
      return {
        cartItems: state.cartItems.map((item) => {
          if (item.id === itemId) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          }
          return item;
        }),
      };
    },
    decreaseNumOfItem(state, action) {
      const { itemId, itemQty } = action.payload;
      return {
        cartItems: state.cartItems.map((item) => {
          if (item.id === itemId) {
            return {
              ...item,
              qty: item.qty - 1,
            };
          }
          return item;
        }),
      };
    },
    removeFromCart(state, action) {
      let id = action.payload;
      return {
        cartItems: state.cartItems.filter((item) => item.id !== id),
      };
    },
    clearCart(state, action) {
      return {
        cartItems: [],
      };
    },
  },
});

export const cartActions = CartSlice.actions;
export default CartSlice;
