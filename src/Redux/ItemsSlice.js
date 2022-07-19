import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
  },
  reducers: {
    addItems(state, action) {
    
    
        return {
          items: action.payload,
        }
     
    },
    toogleFavorite(state, action) {
      const { itemId, favorite } = action.payload;
      return {
        items: state.items.map((item) => {
          if (item.id === itemId) {
            return {
              ...item,
              isFavorite: !favorite,
            };
          }
          return item;
        }),
      };
    },
    toogleItemAdded(state, action) {
      const { itemId, isAdded } = action.payload;
      console.log(state.items.isAdded);

      return {
        items: state.items.map((item) => {
          if (item.id === itemId) {
            return {
              ...item,
              isAdded: !isAdded,
            };
          }
          return item;
        }),
      };
    },
    resetIsAdded(state, action) {
      return {
        items: state.items.map((item) => {
          return {
            ...item,
            isAdded: false,
          };
        }),
      };
    },
    addNewItems (state, action){
      return {
        items: [...state.items, ...action.payload]
      }
    }
  },
});

export const itemsActions = itemSlice.actions;
export default itemSlice;
