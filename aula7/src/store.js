import { configureStore } from '@reduxjs/toolkit';
import balanceReducer from '../src/Ex3/components/slice';
import catSlice from './Ex4/components/catSlice';


const store = configureStore({
    reducer: {
        balance: balanceReducer,
        cats: catSlice,
    },
}); 

export default store;