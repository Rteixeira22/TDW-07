import { configureStore } from '@reduxjs/toolkit';
import balanceReducer from '../src/Ex3/components/slice';
import catSlice from './Ex4/components/catSlice';
import { catApi } from './Ex5/components/catApi'; 


const store = configureStore({
    reducer: {
        balance: balanceReducer,
        cats: catSlice,
        // Adicione o reducer do RTK-Query
        [catApi.reducerPath]: catApi.reducer,

    },
    // Adicione o middleware do RTK-Query
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catApi.middleware),

}); 

export default store;