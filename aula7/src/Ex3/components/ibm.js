import React from "react";
import '../../styles.css';
import { useSelector } from 'react-redux';
import BalanceManager from "./balanceManager";


function IBM() {
    const saldo = useSelector((state) => state.balance.saldo);

    return (
        <div className="todoapp stack-large">
            <h1> Máquina de Multibanco </h1>

            <h2>Saldo atual: {saldo}</h2>

            <BalanceManager />

        </div>
    );
}
export default IBM;