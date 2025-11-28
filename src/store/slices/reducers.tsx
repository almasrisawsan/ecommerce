
'use client';

import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import counterReducer from './counterSlice';
import productsReducer from './productsSlice';

const rootReducer = combineReducers({
   cart: cartReducer,
   counter: counterReducer,
   products: productsReducer,
});

export default rootReducer;
