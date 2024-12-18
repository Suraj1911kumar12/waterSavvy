import {configureStore} from '@reduxjs/toolkit';

import cartItemsReducer from '../slices/cartItems';

const Store = configureStore({
  reducer: {
    cartItem: cartItemsReducer,
  },
});

export default Store;
