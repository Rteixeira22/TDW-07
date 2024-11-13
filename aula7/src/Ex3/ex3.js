import React from "react";
import { Provider } from 'react-redux'
import IBM from "./components/ibm"
import { configureStore } from '@reduxjs/toolkit';
import balanceReducer from './components/slice';

const store = configureStore({
    reducer: {
        balance: balanceReducer,
    },
});

function Ex3() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1> Exercicio 3</h1>
                <IBM />
            </div>
        </Provider>
    
    );
}

export default Ex3;