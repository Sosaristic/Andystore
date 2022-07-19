import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import sessionStorage from "redux-persist/es/storage/session";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import itemSlice from "./ItemsSlice";
import CartSlice from "./CartSlice";
import inputSlice from "./InputSlice";
import loginSlice from "./LogInSlice";

const persistConfig = {
    key: 'root',
   storage: sessionStorage,
}
const persistCart ={
    key: 'cart',
    storage,
}

const persistedCart = persistReducer(persistCart, CartSlice.reducer) 



const itemsReducers = combineReducers({
    input: inputSlice.reducer,
    items: itemSlice.reducer,
    login: loginSlice.reducer,
    cart: persistedCart,
})
const cartReducers = combineReducers({
    cartItems: CartSlice.reducer 
})

const persistedReducer = persistReducer(persistConfig, itemsReducers)
const combined = combineReducers({
  reducer: persistedReducer,
});

const store = configureStore({
  reducer:  persistedReducer,
   middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),

});
export default store;
