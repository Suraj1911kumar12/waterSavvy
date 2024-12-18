import {createSlice} from '@reduxjs/toolkit';

// const initialState = [];

const cartItemsSlices = createSlice({
  name: 'cartItems',

  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.find(item => item.id === newItem.id);
      if (existingItem) {
        return state.filter(item => item.id !== newItem.id);
      } else {
        state.push(newItem);
      }
    },
    removeToCart: (state, action) => {
      return state.cart.filter(item => item !== action.payload);
    },
  },
});

export const {addToCart, removeToCart, increaseItem} = cartItemsSlices.actions;
export default cartItemsSlices.reducer;
