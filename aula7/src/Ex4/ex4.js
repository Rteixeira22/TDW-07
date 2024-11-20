import React from "react";
import { Provider } from 'react-redux'
import store from '../store';
import ItemsList from "./components/itemsList";


function Ex4() {
    return (
       
        <Provider store={store}>
            <div className="App">
                <h1> Exercicio 4</h1>
            </div>
            <ItemsList />
        </Provider>
    );
}

export default Ex4;