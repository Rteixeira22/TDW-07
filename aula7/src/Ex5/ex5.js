import React from "react";
import { Provider } from 'react-redux'
import store from '../store';
import ItemList from "./components/itemList";


function Ex5() {
    return (
       
        <Provider store={store}>
            <div className="App">
                <h1> Exercicio 5</h1>
            </div>
            <ItemList />
        </Provider>
    );
}

export default Ex5;